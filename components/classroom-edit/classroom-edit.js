angular.module('app.classroomEdit', [])
  .controller('ClassroomEditController', ['$routeParams', 'classroomFactory', ClassroomEditController]);

function ClassroomEditController($routeParams, classroomFactory) {
  this.classroomId = $routeParams.classroomId;
  this.classroomFactory = classroomFactory;
}
