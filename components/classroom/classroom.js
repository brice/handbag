angular.module('app.classroom', [])
  .controller('ClassroomController', ['storageFactory', ClassroomController]);

function ClassroomController(storageFactory) {
  this.storageFactory = storageFactory;
  this.classrooms = {}; 

  var classrooms = this.storageFactory.recall('classrooms');

  if (classrooms != false &&classrooms != null) {
    this.classrooms = classrooms;
  }
  delete(classrooms);
}

ClassroomController.prototype.save = function() {
  var students = this.studentsList.split("\n");

  this.classrooms[this.classroomId] = students;
  
  this.storageFactory.memorize('classrooms', this.classrooms);
};