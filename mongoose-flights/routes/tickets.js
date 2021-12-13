let express = require('express');
let router = express.Router();
let ticketsCtrl = require('../controllers/tickets');
	
router.get('/:id/new', ticketsCtrl.new);
router.post('/:id', ticketsCtrl.create);
// don't need to add tickets again because it's already in the router
	
module.exports = router;