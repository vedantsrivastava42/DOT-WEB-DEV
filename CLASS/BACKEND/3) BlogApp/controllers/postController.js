// const Post = require("../models/commentModel.js");

// exports.dummyLink =(req,res) => {
//     res.send("This is dummy page");
// };

// exports.createPost = async (req,res) => {
//     try{
//         const {title,description} = req.body;
        
//         const response = await Post.create({title,description});
//         res.status(200).json(

//             {
//                 success: true,
//                 data:response,
//                 message:'Entry Created Successfully'
//             }
//         );
//     }
//     catch(err){
//         console.error(err);
//         console.log(err);
//         res.status(500)
//         .json({
//             success:false,
//             data:"internal server error",
//             message:err.message,
//         })
//     }
// }

const Post = require("../models/postModel");
exports.createPost = async (req,res) => {
        try{
            const {title,body} = req.body;
            
            const post = new Post({
                title,body,
            });
            const savedPost = await post.save().populate("likes").populate("comments").exec();
        
            res.json(
    
                {
                   post:savedPost,
                }
            );
        }
        catch(err){
            res.status(500)
            .json({
                success:false,
                data:"internal server error",
                message:err.message,
            })
        }
    };

exports.getAllPosts = async(req,res) => {
    try{
            const posts = await Post.find().populate("comments").exec();
            res.json({
                posts,
            })
    }
    catch(error){
        return res.status(500).json({
            error:"Error while fetching posts",
            message:error.message,
        })
    }
}