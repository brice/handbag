angular.module('app', [
	'ngNewRouter', 
	'slugifier',
  'firebase',

	'app.home', 
	'app.classroom', 
	'app.classroomEdit', 
	'app.skills',
	'app.evaluation',
	'app.meeting'
	])
  .controller('AppController', ['$router', AppController]);

function AppController ($router) {}