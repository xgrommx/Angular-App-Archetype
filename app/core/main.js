var config = require('./config'),
	app = require('./app'),
	indexController = require('../controllers/index/indexController');


config(app);
indexController(app);