const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    create,
    new: newTicket,
    
}

function create(req,res){
    Flight.findById(req.params.id, function(err,flight){
        const newFlight = new Flight (req.body);
            let ticket = {
                seat:req.body.seat,
                price: req.body.price,
            }
            console.log(ticket)
        newFlight.ticket.push(req.body.ticketId);
            newFlight.save(function(err){

                res.redirect(`/flights`);
            });
        });
}

function newTicket(req, res) {
      res.render('tickets/new', {flight: req.params.id})
  }