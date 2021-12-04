const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    create,
    new: newTicket,
    
}

function create(req,res){
    Flight.findById(req.params.id, function(err,flight){
        flight.tickets.push(req.body.ticketId);
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

function newTicket(req, res) {
      res.render('yo')
  }