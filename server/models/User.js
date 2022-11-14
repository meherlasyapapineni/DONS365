const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true, 
    },
    address : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
    },
    phoneno : {
        type: String,
        required: true,
    },
});

const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel;