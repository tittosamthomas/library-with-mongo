const express=require("express");
const loginRouter=express.Router();
const nav =  require("./nav");

loginRouter.get("/",(req,res)=>{
    res.render("login",{
        nav
    });
});

module.exports=loginRouter;