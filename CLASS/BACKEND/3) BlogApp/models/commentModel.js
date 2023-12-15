//import mongoose  
const mongoose = require("mongoose");

//route handler
const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId, //kis post pe comment kiya h uski ID
        ref:"Post", //reference to the post model
    },
    user:{
        type: String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }
});

//export 
module.exports = mongoose.model("Comment", commentSchema);