angular.module('app.evaluation', [])
  .controller('EvaluationController', ['$routeParams', 'storageFactory', EvaluationController]);

function EvaluationController($routeParams, storageFactory) {
  this.storageFactory = storageFactory;

  this.classroomId = $routeParams.classroomId;
  this.studentId   = $routeParams.studentId;
	
  var classrooms = storageFactory.recall('classrooms');

  this.student = classrooms[this.classroomId][this.studentId];
  if (undefined == this.student) {
    return false;
  }

	this.skills = storageFactory.recall('skills', {});
  var color  = {}

  // Set default value
	Object.keys(this.skills).map(function(id){
    console.log(id);
	  color[id] = 'na';
	});
  this.color = color;

	this.evaluations = storageFactory.recall('evaluations', {});
}

EvaluationController.prototype.saveEvaluation = function() {
  this.error = false;
	if (undefined === this.date || undefined === this.date) {
		this.error = true;
		return false;
	}
  console.log(this.color);

	var evaluations = this.evaluations;
	var studentId = this.studentId;

	if (!evaluations[this.classroomId]) {
		evaluations[this.classroomId] = [];
	}

	if (!evaluations[this.classroomId][studentId]) {
		evaluations[this.classroomId][studentId] = [];
	}

	evaluations[this.classroomId][studentId].push({date: this.date, color: this.color});
	this.storageFactory.memorize('evaluations', evaluations)
	this.check=true;
}