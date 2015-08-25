angular.module('app.classroomEdit', [])
  .controller('ClassroomEditController', ['$routeParams', 'storageFactory', ClassroomEditController]);

function ClassroomEditController($routeParams, storageFactory) {
  this.classroomId = $routeParams.classroomId;

  var classrooms = storageFactory.recall('classrooms');
  if (undefined != classrooms[$routeParams.classroomId]) {
    this.students  = classrooms[$routeParams.classroomId];  
  }
}
