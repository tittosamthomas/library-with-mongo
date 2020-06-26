const express=require('express');
const app=new express;
const chalk=require('chalk');
const path=require('path');
const nav=require('./src/routes/nav');
const bodyparser=require('body-parser');

const authorRouter=require("./src/routes/authorrouter");
const bookRouter=require("./src/routes/bookRoutes");
const loginRouter=require("./src/routes/loginrouter");
const registerRouter=require("./src/routes/registerrouter")

app.set('views','./src/views');
app.set('view engine','ejs');
app.use(express.static(__dirname + 'public'));
app.use(express.static(__dirname + '/public/images'));
app.use(bodyparser.urlencoded({extended:true}));

;

app.use("/authors",authorRouter);
app.use("/login",loginRouter);
app.use("/books",bookRouter);
app.use("/register",registerRouter);



app.get('/',function(req,res){
res.render("index",{
    nav,
    title:"E-Library"
});
});

app.listen(2255,()=>{
    console.log("Server listening to : 2255");
});