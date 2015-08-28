angular.module('app', [
	'ngNewRouter', 

	'app.home', 
	'app.classroom', 
	'app.classroomEdit', 
	'app.skills',
	'app.evaluation'
	])
  .controller('AppController', ['$router', AppController]);

function AppController ($router) {}