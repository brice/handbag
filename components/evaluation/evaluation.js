angular.module('app.evaluation', [])
  .controller('EvaluationController', ['$routeParams', 'storageFactory', EvaluationController]);

  function ClassroomEditController($routeParams, storageFactory) {
  	this.classroomId = $routeParams.classroomId;
  	this.studentId = $routeParams.studentId;
  }