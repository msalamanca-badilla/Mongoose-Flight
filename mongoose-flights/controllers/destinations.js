const app = require("../app");
const Flight = require('../models/flight');//still need flight because need to access flight doc to add destination


function create(req,res,next){
    Flight.findById(req.params.id, function(err,flight){
        flight.destinations.push(req.body);
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

module.exports = {
    create,
};
