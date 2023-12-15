const express = require("express");
const app = express();

//load config from any file
require("dotenv").config();
const PORT = process.env.PORT || 4000; //if port not present then use port 4000.

//middleware to  parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");
//mount/add/append todo routes API routes
//1st base url then api/v1 then todoRoutes (Example- createTodo)
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,()=> {
    console.log(`server started successfully at ${PORT}`);

});
//connect to the database 
const dbConnect = require("./config/database");
dbConnect();

//default Route
//if we remove this UI pe kuch nahi aaega bas cannot get dikhaega baki sab same. 
app.get("/",(req,res)=>{
    res.send(`<h1> This is HOMEPAGE </h1>`);
})