const express=require("express");
const bookRouter=express.Router();
const books=require("./books");
const nav =  require("./nav");
const Bookdata=require('../model/bookmodel');

bookRouter.get("/",function(req,res){
    Bookdata.find().then(function(books){
        res.render("books",{books,nav}) 
    })
    
});



bookRouter.get("/admin",function(req,res){
    res.render("addbook",
    {nav,
    title:"Add book"})
});


    
bookRouter.get("/add",function(req,res){
   const item={
       title:req.param("title1"),
       author:req.param("author1"),
       image:req.param("image")
   }
   const newbook=new Bookdata(item);
   newbook.save();
   res.redirect("/books");
});

bookRouter.post("/edit",function(req,res){
    Bookdata.findById(req.body.id,(err,data)=>{
        if(err){
            throw err;
        }
        else{
            res.render("editbook",{nav,title:"update",data});
        }
    })
});

bookRouter.post("/update",function(req,res){
    Bookdata.findByIdAndUpdate(req.body.id,{$set:req.body},(err,data)=>{
        if(err){
            res.json({"status":"Failed"});
        }
        else if(data.n==0){
            console.log(data);
            res.json({"status":"No matches Found"});
    }
        else{
            Bookdata.find().then(function(data){

                res.redirect("/books");
                // res.render("books",{books,nav}) 
            })
        }
    })
});

bookRouter.post("/delete",function(req,res){
    const id = req.body.id;
    Bookdata.findByIdAndDelete({_id:id}).then(function(){
        res.redirect("/books");
    })
});

bookRouter.get("/:id",function(req,res){
    const ID =req.params.id;
    Bookdata.findOne({_id:ID})
    .then(function(book){
        res.render("book",
        {nav,
        title:"Books",book})
});
})

module.exports=bookRouter;