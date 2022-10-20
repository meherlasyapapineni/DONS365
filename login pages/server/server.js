const express = require("express");
const app = express();
const {MongoClient} = require('mongodb');
const bodyParser = require('body-parser');
// const { redirect } = require("react-router-dom");

async function main() {
    const uri = "mongodb+srv://anuradha:project123@projectcluster.0s8shtc.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient.connect(uri, { useUnifiedTopology: true}, (err, client) => {
        
        if (err) return console.error(err)
        console.log('Connected to Database')
        const db = client.db('ProjectDB')
        const usersCollection = db.collection = db.collection('user')
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(express.static('public'));

        app.listen(3000, function() {
            console.log('listening on 3000')
        })

        app.get('/auth', (req, res) => {
            // res.sendFile('C:/Users/anura/Desktop/College/Purdue FW/Courses/Web Development/Project/Website/react-login/src' + '/App.js')
            const cursor = db.collection('user').find().toArray()
            .then(results => {
                console.log(results)
            }).catch(error => console.error(error))
        })
    });
}

main().catch(console.error)

 
// const cors = require("cors");
// require("dotenv").config({ path: "./config.env" });
// const port = process.env.PORT || 5000;
// app.use(cors());
// app.use(express.json());
// // app.use(require("./routes/record"));
// // // get driver connection
// // const dbo = require("./db/conn");
 
// app.listen(port, () => {
//   // perform a database connection when server startsy

//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
 
//   });
//   console.log(`Server is running on port: ${port}`);
// });

