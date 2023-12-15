const Post = require("../models/postModel");
const Like = require("../models/likeModel");

//like a post


exports.likePost = async (req,res) => {
    try{
        const {post,user} = req.body
        const like = new Like({
            post,user
        });
        const savedLike = await like.save();

        //update the post collection
        const updatedPosts = await Post.findByIdAndUpdate(post,{$push :{likes: savedLike._id}}, {new :true})
        .populate('likes').exec();

        res.json({
            post:updatedPosts,
        });
    }
    catch(error){
        return res.status(400).json({
            error:"Error while fetching like",
            message:error.message
        });
    }
}

//like a post


exports.unlikePost = async (req,res) => {
    try{
        const {post,like} = req.body;
       
        const deletedLike = await Like.findByIdAndDelete({post:post,_id:like});

       //update post collection
        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{like:deletedLike._id}}, {new: true});
        res.json({
            post:updatedPost,
        });
    }
    catch(error){
        return res.status(400).json({
            error:"Error while unliking post",
            message:error.message
        }); 
    }
}

