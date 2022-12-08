const mongoose = require('mongoose')
const User = require('./Users')

const ItemSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true, 
    },
    // user : {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // },
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

    status : {
        type: String,
        required: true,
    },
    userId : {
        type: String,
    },
    phoneNo : {
        type: String,
        required: true,
    },
});

// const userID = user._id;
// const Item = Item.find(userID).populate("user")
const ItemModel = mongoose.model("items", ItemSchema)
module.exports = ItemModel;