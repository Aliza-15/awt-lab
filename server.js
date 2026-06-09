const express=require("express");

const app=express();

app.use(express.urlencoded({extended:true}));

// GET Request

app.get("/",(req,res)=>{

res.send("<h1 style='color:purple;font-size:40px;text-align:center'>GET Request Successful</h1>");

});

// POST Request

app.post("/submit",(req,res)=>{

res.send("<h1 style='color:green;font-size:40px;text-align:center'>POST Request Received: "+req.body.name+"</h1>");

});

// Server

app.listen(3000,()=>{

console.log("Server Running on Port 3000");

});