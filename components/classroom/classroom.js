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
  console.log(this.classroomId);
  console.log(students);
  this.classrooms[this.classroomId] = students;
  console.log(this.classrooms);
  this.storageFactory.memorize('classrooms', this.classrooms);
};