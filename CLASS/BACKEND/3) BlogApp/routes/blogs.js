const express = require("express");
const router = express.Router();

//import
const {createPost,getAllPosts} = require("../controllers/postController");
const {createComment}= require("../controllers/commentController");
const {likePost,unlikePost} = require("../controllers/likeController")
// const {dummyLink} = require("../controllers/postController");


router.post("/posts/create",createPost);
router.post("/comments/create",createComment);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);
// router.get("/dummyRoute",dummyLink)

module.exports = router;