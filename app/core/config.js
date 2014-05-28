var config = {
	name: 'Angular App Archetype',
	version: '0.1.0'
};

module.exports = function(app){

	app.service('appConfig', function(){
		return config;
	});

};