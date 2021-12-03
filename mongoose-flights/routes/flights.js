let express = require('express');
let router = express.Router();
let flightsCtrl = require('../controllers/flights');
	
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/', flightsCtrl.index);
router.get('/:id', flightsCtrl.show);
	
module.exports = router;