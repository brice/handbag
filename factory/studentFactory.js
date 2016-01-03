angular.module('app')
  .factory('studentFactory', ['storageFactory', function(storageFactory){
  	return{
  		getStudent: function(classroomId, studentId) {
        var classrooms = storageFactory.recall('classrooms', {});
        var student = classrooms[classroomId][studentId];
        
        if (undefined == student) {
          return false;
        }
        return student;
      },
      getStudents: function(classroomId) {
        var classrooms = storageFactory.recall('classrooms', {});
        var students = classrooms[classroomId];
        
        if (undefined == students) {
          return false;
        }
        return students; 
      }
  	}
  }]);