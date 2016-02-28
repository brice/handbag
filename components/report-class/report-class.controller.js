(function(){

angular.module('app.reportClass')
  .controller('ReportClassController', ['$routeParams', 'storageFactory', ReportClassController]);

function ReportClassController($routeParams, storageFactory) {
  vm = this;

  vm.classroomId = $routeParams.classroomId;
  vm.evaluationId = $routeParams.evaluationId;

  var classrooms = storageFactory.recall('classrooms', {});
  vm.students = classrooms[vm.classroomId];
  
  var evaluations = storageFactory.recall('evaluations', {});
  vm.evaluationsClass = evaluations[vm.classroomId];

  if (false === vm.students) {
    return false;
  }

  var allSkills = storageFactory.recall('skills', {});
  vm.skills = {};

  for (var studentId in evaluations[vm.classroomId]) {
    studentEvaluations = evaluations[vm.classroomId][studentId][vm.evaluationId];
    console.log(studentEvaluations);
    if (undefined != studentEvaluations) {
      for (var skillId in allSkills) {
        if (studentEvaluations.color[skillId] != 'na') {
          vm.skills[skillId] = allSkills[skillId];
        }
      }
    } else {
      console.log(studentId);
    }
  }
}

})(angular)