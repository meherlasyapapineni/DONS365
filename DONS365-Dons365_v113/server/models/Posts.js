// schema for the post collection 
// fields => title, item_name, description, image, user_name, upload date, status (sold - yes or no)

const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true,
        },
        description : {
            type : String,
            required : true,
        },
        upload_date : {
            type : Date,
            required : true,
        },
        
    }
)
const PostsModel = mongoose.model("posts", PostSchema)
module.exports = PostsModel;