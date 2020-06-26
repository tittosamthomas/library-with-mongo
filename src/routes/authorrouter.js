const express = require("express");
const authorRouter = express.Router();

const nav = require("./nav");
const authordata = require('../model/authormodel');

authorRouter.get("/", function (req, res) {
    authordata.find().then(function (author) {
        res.render("authors", { author, nav })
    })

});



authorRouter.get("/admin", function (req, res) {
    res.render("addauthor",
        { nav })
});



authorRouter.get("/add", function (req, res) {
    const item = {
        title: req.param("author"),
        author: req.param("detail"),
        image: req.param("image")

    }
    const newauthor = new authordata(item);
    newauthor.save();
    res.redirect("/authors");
});

authorRouter.post("/edit", function (req, res) {
    authordata.findById(req.body.id, (err, data) => {
        if (err) {
            throw err;
        }
        else {
            res.render("editauthor", { nav, title: "update", data });
        }
    })
});

authorRouter.post("/update", function (req, res) {
    authordata.findByIdAndUpdate(req.body.id, { $set: req.body }, (err, data) => {
        if (err) {
            res.json({ "status": "Failed" });
        }
        else if (data.n == 0) {
            console.log(data);
            res.json({ "status": "No matches Found" });
        }
        else {
            authordata.find().then(function (author) {
                res.redirect("/authors");
                
            })
        }
    })
});

authorRouter.post("/delete", function (req, res) {
    const id = req.body.id;
    authordata.findByIdAndDelete({ _id: id }).then(function () {
        res.redirect("/authors");
    })
});

authorRouter.get("/:id", function (req, res) {
    const ID = req.params.id;
    authordata.findOne({ _id: ID })
        .then(function (author) {
            res.render("author",
                {
                    nav,
                    title: "authors", author
                })
        });
})

module.exports = authorRouter;