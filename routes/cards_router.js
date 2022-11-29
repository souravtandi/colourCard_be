const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const CardsModel = mongoose.model("CardsModel")

router.post('/cardsData', (req, res) => {
     const { cname, code, qualities, quality, traits } = req.body
    const cardsModel = new CardsModel({
        cname,
        code,
        qualities,
        quality,
        traits
    })

    cardsModel.save()
        .then((savedCards) => {
            res.status(201).json({ "savedCards": savedCards })
        })
})

router.get('/allCardsDetails', (req, res) => {
    CardsModel.find()
        .then((cardsFound) => {
            return res.json({ allCards: cardsFound })
        })
        .catch((err) => {
            return res.status(400).json({ err: "Property was not found!" })
        })
})

module.exports = router;

