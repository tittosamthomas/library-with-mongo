const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;
const newSchema = new Schema({
    title: String,
    author: String,
    image : String

});
const Bookdata = mongoose.model('bookdata', newSchema);
module.exports = Bookdata;