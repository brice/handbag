(function(){

angular.module('app.report')
  .controller('ReportController', ['$routeParams', 'storageFactory', 'studentFactory', ReportController]);

function ReportController($routeParams, storageFactory, studentFactory) {
  vm = this;

  vm.classroomId = $routeParams.classroomId;
  vm.studentId   = $routeParams.studentId;

  vm.student = studentFactory.getStudent(vm.classroomId, $routeParams.studentId);
  if (false === vm.student) {
    return false;
  }

  var classrooms = storageFactory.recall('classrooms');
  this.skills = storageFactory.recall('skills', {});

  var evaluations = storageFactory.recall('evaluations', {});

  vm.studentEvaluation = evaluations[vm.classroomId][vm.studentId];

  console.log(vm.studentEvaluation);
  vm.date = vm.studentEvaluation.map(function(data) {
  	return data.date
  });
}

})(angular)