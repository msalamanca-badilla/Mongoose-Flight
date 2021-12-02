const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    addToTicket,
    new: newTicket,
}

function addToTicket(req,res){
    Flight.findById(req.params.id, function(err,flight){
        flight.ticket.push(req.body.ticketId);
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

function newTicket(req, res) {
    Ticket.find({}, function (err, tickets) {
      res.render('tickets/new', {tickets});
    })
  }