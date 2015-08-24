angular.module('app', [
	'ngNewRouter', 

	'app.home', 
	'app.classroom', 
	'app.classroomEdit', 
	'app.skills'])
  .controller('AppController', ['$router', AppController]);

function AppController ($router) {}