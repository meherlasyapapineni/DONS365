const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true, 
    },
    description : {
        type: String,
        required: true,
    },
    price : {
        type: String,
        required: true,
    },
    uploadDate : {
        type: Date,
        required: true,
    },

    itemPhoto : {
        data: Buffer,
        contentType: String,
    },

    status : {
        type: String,
        required: true,
    },
});

const ItemModel = mongoose.model("items", ItemSchema)
module.exports = ItemModel;