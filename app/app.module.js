angular.module('app', [
	'ngNewRouter', 
	'slugifier',

	'app.home', 
	'app.classroom', 
	'app.classroomEdit', 
	'app.skills',
	'app.evaluation'
	])
  .controller('AppController', ['$router', AppController]);

function AppController ($router) {}