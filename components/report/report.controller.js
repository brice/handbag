(function(){

angular.module('app.report')
  .controller('ReportController', ['$routeParams', 'storageFactory', ReportController]);

function ReportController($routeParams, storageFactory) {
  vm = this;

  /*vm.classroomId = $routeParams.classroomId;
  vm.studentId   = $routeParams.studentId;

  var classrooms = storageFactory.recall('classrooms');
  this.student = classrooms[this.classroomId][this.studentId];
  if (undefined == this.student) {
    return false;
  }*/

}

})(angular)