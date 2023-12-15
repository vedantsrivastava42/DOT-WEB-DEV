// npm init -y
//npm i express

//Server Iinitiate
const express = require('express');
const app = express();

//used to parse req.body in express -> PUT POST 
const bodyParser = require('body-parser');
//specifically parse JSON  data & add it to the request.body object
app.use(bodyParser.json());


app.listen(3000, () => {
    console.log('Server started at  port 3000');
});

//Routes 
app.get('/', (request, response) => {
    response.send("hello");
});

app.post('/api/cars', (request,response)=>{
   const {name,brand}= request.body;
   console.log(name);
   console.log(brand);
   response.send("Car added");
})

const mongoose = require('mongoose');

//use 127.0.0.1 instead of localhost in the URL
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase',{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
})
.then(() => {console.log("Connection established")})
.catch((error)=> {console.log("Received error"+error)});