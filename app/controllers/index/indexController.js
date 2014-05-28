var template = require('./indexTemplate.html'),
	listView = require('../../modules/list/list');



function controller($scope){
	$scope.name = 'Jon Yardley';
	$scope.list = ['cheese', 'crackers', 'bunting'];
}


module.exports = function(app){

	//require dependencies!
	listView(app);


	//Attach controller to app
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.when("/", {
			controller: ['$scope', controller],
			template: template
		});
	}]);

}