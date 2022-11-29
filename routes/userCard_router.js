const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const UserCardModel = mongoose.model("UserCardModel")

router.post('/addCard', (req, res) => {
    const { colorCode, title, description } = req.body
    if( !colorCode || !title || !description ){
        return res.status(400).json({error: "one or more fields are empty!!"})
    }
    UserCardModel.findOne({title:title})
    .then((data)=> {
        if(data){
            return res.status(500).json({error: "Title is already exist, please use another title"});
        }
        const userCardModel = new UserCardModel({
            colorCode,
            title,
            description
        })
    
        userCardModel.save()
            .then((saveUserCard) => {
                res.status(201).json({ "saveUserCard": saveUserCard })
            })
    })
    .catch((error)=>{
        console.log(error);
    });
});

router.get('/userAllCards', (req, res) => {
    UserCardModel.find()
        .then((userCardFound) => {
            return res.json({ userAllCards: userCardFound })
        })
        .catch((err) => {
            return res.status(400).json({ err: "Property was not found!" })
        })
});

router.get('/searchCard', async (req, res) => {
    let data = []
    data = await UserCardModel.find (
        { 
            "$or": [
                { "title": { $regex: req.query.key, $options: 'i' } },
                { "description": { $regex: req.query.key, $options: 'i' } }
            ]
        }
    )
    res.send(data)
})

module.exports = router;