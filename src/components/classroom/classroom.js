angular.module('app.classroom', [])
  .controller('ClassroomController', ['classroomFactory', ClassroomController]);

function ClassroomController(classroomFactory) {
	this.classroomFactory = classroomFactory;
}

ClassroomController.prototype.save = function() {
	this.classroomFactory.saveClassroom(this.classroomId, this.studentsList);
};