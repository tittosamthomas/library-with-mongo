const express=require("express");
const registerRouter=express.Router();
const nav =  require("./nav");

registerRouter.get("/",function(req,res){
    res.render("register",{nav})
});


registerRouter.get("/add",function(req,res){
    res.render("login",{nav})
});




module.exports=registerRouter;