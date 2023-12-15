const express = require("express");
const app = express();

//load config from any file
require("dotenv").config();
const PORT = process.env.PORT || 4000; //if port not present then use port 4000.

//middleware to  parse json request body
app.use(express.json());

//import routes for TODO API
const blogRoutes = require("./routes/blogs");
//mount/add/append todo routes API routes
//1st base url then api/v1 then todoRoutes (Example- createTodo)
app.use("/api/v1",blogRoutes);

//start server
app.listen(PORT,()=> {
    console.log(`server started successfully at ${PORT}`);

});
//connect to the database 
const dbConnect = require("./config/database");
dbConnect();

app.get("/",(req,res)=> {
    res.send(`<h1>This is my Homepage</h1>`)
})
