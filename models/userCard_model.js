const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const userCardSchema = new mongoose.Schema({
    colorCode: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

});

mongoose.model("UserCardModel", userCardSchema);