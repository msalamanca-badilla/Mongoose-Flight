let express = require('express');
let router = express.Router();
let ticketsCtrl = require('../controllers/tickets');
	
router.get('/tickets/new', ticketsCtrl.new);
router.post('/tickets/:id', ticketsCtrl.create);

	
module.exports = router;