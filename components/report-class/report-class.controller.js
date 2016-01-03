(function(){

angular.module('app.reportClass')
  .controller('ReportClassController', ['$routeParams', 'storageFactory', 'studentFactory', ReportClassController]);

function ReportClassController($routeParams, storageFactory, studentFactory) {
  vm = this;

  vm.classroomId = $routeParams.classroomId;

  vm.student = studentFactory.getStudent(vm.classroomId, $routeParams.studentId);
  if (false === vm.student) {
    return false;
  }

  var classrooms = storageFactory.recall('classrooms');
  this.skills = storageFactory.recall('skills', {});

  var evaluations = storageFactory.recall('evaluations', {});

  vm.studentEvaluation = evaluations[vm.classroomId][vm.studentId];

  vm.date = vm.studentEvaluation.map(function(data) {
  	return data.date
  });
}

})(angular)