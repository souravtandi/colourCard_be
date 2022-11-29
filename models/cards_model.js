const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const cardsSchema = new mongoose.Schema({
    cname: {type: String},
    code: {type: String},
    qualities: [{
        quality: {type: String},
        traits: [{type: String}]
    },
    {
        quality: {type: String},
        traits: [{type: String}]
    },
    {
        quality: {type: String},
        traits: [{type: String}]
    },
    {
        quality: {type: String},
        traits: [{type: String}]
    }
]
});

mongoose.model("CardsModel", cardsSchema);