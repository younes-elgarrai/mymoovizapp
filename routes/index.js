var express = require('express');
var router = express.Router();
var request = require('sync-request');

var moviesdb = require('../models/movies');




/* GET home page. */
router.get('/discover', function(req, res, next) {

  var result = request('GET', 'https://api.themoviedb.org/3/discover/movie?api_key=f6f74ab14413117a720394139a94233f&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
  result = JSON.parse(result.getBody());
  res.json(result);

});

router.post('/wishlist-movie', function(req, res, next){

  var newMovie = new moviesdb.moviesModel({
    name: req.body.movieName,
    desc: req.body.movieDesc,
    img: req.body.movieImg,
    note: req.body.movieNote,
    vote: req.body.movieVote
  })

  newMovie.save(function (err) {
    if (err) {res.json({result: false})}else{res.json({result: true})}
  });

});

router.delete('/wishlist-movie', async function(req, res, next){

  await moviesdb.moviesModel.deleteOne({ name: req.body.movieName }, function (err) {
    if (err) {res.json({result: false})}else{res.json({result: true})}
  });

});


router.get('/wishlist-movie', async function(req, res, next){

  var result = await moviesdb.moviesModel.find();

  res.json(result);


})

module.exports = router;
