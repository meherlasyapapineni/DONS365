const express = require("express")
const app = express()
const mongoose = require("mongoose")
const UserModel = require('./models/User')

const uri = "mongodb+srv://anuradha:project123@projectcluster.0s8shtc.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to Database");
    } catch(error) {
        console.error(error);
    }
}
connect();

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        
            res.json(result);
        
    })
})

app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY!");
});