var indexTemplate = require('./indexTemplate.html'),
	listView = require('../../modules/list/list');

function controller($scope){
	$scope.name = 'Jon Yardley';
	$scope.list = ['cheese', 'crackers', 'bunting'];
}


module.exports = function(app){

	//require dependencies!
	listView(app);


	//Attach controller to app
	app.config(['$stateProvider', function($stateProvider){
		$stateProvider.state('index',{
			url: '/',
			views: {
				main: {
					controller: ['$scope', controller],
					template: indexTemplate
				}
			}
		});
	}]);

}