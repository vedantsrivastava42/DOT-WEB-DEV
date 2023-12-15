const express = require("express");
const router = express.Router();
 
const{signup} = require("../controllers/Auth");
const{login} = require("../controllers/Auth");
const{auth,isStudent,isAdmin} = require("../middlewares/auth");

router.post("/login",login);
router.post("/signup",signup);

//protected routes
router.get("/test",auth,isAdmin,(req,res) => {
    res.json({
        success:true,
        message:"Welcome to the Protected route for Tests",
    });
});


router.get("/student",auth,isStudent,(req,res) => {
    res.json({
        success:true,
        message:"Welcome to the Protected route for Students",
    });
});


router.get("/getEmail", auth, async (req, res) => {
    try{    
        const id = req.user.id;
        console.log(id)
        const user = await User.findOne({_id:id});

        res.status(200).json({
            success : true,
            user : user,
            message : "Welcome to Email Route"
        })
    }       
    catch(err){
        res.status(500).json({
            success : false,
            message : err.message
        })
    } 
})


router.get("/admin",auth,isAdmin,(req,res) => {
    res.json({
        success:true,
        message:"Welcome to the Protected route for Admin",
    });
});

module.exports = router;