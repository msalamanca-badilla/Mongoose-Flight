let express = require('express');
let router = express.Router();
let ticketsCtrl = require('../controllers/tickets');
	
router.get('/flights/:id/tickets/new', ticketsCtrl.new); //Have to show whole route not just /tickets/new
router.post('/flights/:id/tickets', ticketsCtrl.create);

	
module.exports = router;