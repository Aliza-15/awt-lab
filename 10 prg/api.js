const express=require("express");

const app=express();

app.use((req,res,next)=>{

res.header("Access-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Headers","*");
res.header("Access-Control-Allow-Methods","GET,POST,DELETE");

next();

});

app.use(express.json());

let students=[
{id:1,name:"Aliza"}
];

// GET

app.get("/students",(req,res)=>{

res.json(students);

});

// POST

app.post("/students",(req,res)=>{

let newStudent={

id:students.length+1,
name:req.body.name

};

students.push(newStudent);

res.json(students);

});

// DELETE

app.delete("/students/:id",(req,res)=>{

let id=parseInt(req.params.id);

students=students.filter(s=>s.id!==id);

res.json(students);

});

app.listen(3000,()=>{

console.log("REST API Running on Port 3000");

});