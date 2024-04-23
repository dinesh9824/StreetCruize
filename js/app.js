const express = require("express");
const app=express();
const hbs=require('hbs');
const path= require("path");
const bodyParser = require("body-parser"); 
const collection1=require('./connect');
// const collection = require("./connect");

const static_path=path.join(__dirname,"../public")
const view_Path=path.join(__dirname,'../')
const partials_Path=path.join(__dirname,"../view/images")

app.use(express.static(static_path));
app.use(express.json())
app.set("view engine","hbs")
app.set("views",view_Path)
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.urlencoded({extended:true}));

hbs.registerPartials(partials_Path);

app.get("/",(req,res)=>{
  res.render("signup");
})

app.get("/login",(req,res)=>{
  res.render("login");
})
app.post('/signup',async(req,res)=>{
  let data = await collection(req.body);
  data.save()
    .then(()=>{
      res.render("login");
    })
    .catch(err => console.log(err))
})
app.post('/loggedin',async(req,res)=>{
  const username1 = req.body.username;
  const password1 = req.body.password;
  collection1.findOne({fname:username1,password:password1})
  .then(data=>{
    if(data){
      res.redirect('/dashboard')
    } else{
      res.status(401).send('Invalid username or password');
    }
  })
  .catch(error=>{
    console.error(error);
    res.status(500).send('Internal Server Error');
  });
})
app.get('/dashboard',(req,res)=>{
  res.render("Index")
})
app.listen(2010, ()=>{
  console.log("Server is running on port 2010")
})