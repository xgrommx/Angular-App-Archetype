var config = require('./config'), //if you need it!
	app = require('./app'),
	indexController = require('../controllers/index/indexController');

indexController(app);