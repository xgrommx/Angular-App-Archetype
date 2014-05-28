var template = require('./list.html');

function controller($scope){
	//heres the controller if you need it!
	console.log($scope);
}

module.exports = function(app){
	app.directive('basicList', function(){
		return {
			restrict: 'E',
			template: template,
			scope: {
				items: '='
			},
			controller: controller
		};
	});
};
