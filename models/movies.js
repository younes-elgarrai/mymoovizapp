const mongoose = require('mongoose');


var movieSchema = mongoose.Schema({
    name: String,
    desc: String,
    img: String,
    note: Number,
    vote: Number
});

var moviesModel = mongoose.model('movie', movieSchema);

module.exports = {
    moviesModel
};

