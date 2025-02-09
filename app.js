const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// for the static file.This file is used ot eneter html,css and javascript and related images through the express function 
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// for the setup the view engine th  
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    const varivable={};
    res.status(200).render('home.pug',varivable);      
});

app.get('/contact',(req,res)=>{
    const varivable={};
    res.status(200).render('contact.pug',varivable);      

});


app.get('/register',(req,res)=>{
    const varivable={};
    res.status(200).render('register.pug',varivable);      
});

app.get('/about',(req,res)=>{
    const varivable={};
    res.status(200).render('about.pug',varivable);      
});

app.get('/schedule',(req,res)=>{
    const varivable={};
    res.status(200).render('schedule.pug',varivable);      
});


app.listen(port,()=>{
    console.log(`the application started successfully on the port ${port}`);
});