const app = require("../app");
const Flight = require('../models/flight');

//render -> shows an ejs (does not need a slash bc its a path)
//redirect -> shows a new url (needs a slash bc its a url)

module.exports = {
    new: newFlight,
    index,
    create,
}

function newFlight(req, res,next) {
    res.render('flights/new')
}

function index(req,res){
    Flight.find({},function(err,flights){//error when cannot find flight
    res.render('flights/index', {flights})
    });
}

function create (req,res){
    const flight = new Flight (req.body);
    flight.save(function(err){//error happens when flight doesnt save properly (put a number in a string property)
        if (err) return res.redirect('/flights/new');
        res.redirect('/flights')
    })
}

