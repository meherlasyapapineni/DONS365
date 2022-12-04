const express = require("express")
const app = express()
const mongoose = require("mongoose")
const UserRoute = require('./routes/userRoutes')
const PostRoute = require('./routes/postsRoutes')
const ItemRoute = require('./routes/itemsRoutes')
const cors = require('cors')

app.use(cors());

app.use(express.json());

const uri = "mongodb+srv://anuradha:project123@projectcluster.0s8shtc.mongodb.net/ProjectDB?retryWrites=true&w=majority";

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to Database");
    } catch(error) {
        console.error(error);
    }
}
connect();

app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY!");
    
});



app.use('/api/user', UserRoute)
app.use('/api/items', ItemRoute)
app.use('/api/posts', PostRoute)