angular.module('app.evaluation', [])
  .controller('EvaluationController', ['$routeParams', 'storageFactory', EvaluationController]);

function EvaluationController($routeParams, storageFactory) {
  	this.skills = [];
  	this.evaluations = {};
  	this.classroomId = $routeParams.classroomId;
  	this.studentId = $routeParams.studentId;
  	this.storageFactory = storageFactory;
  	
  	var classrooms = storageFactory.recall('classrooms');
  	this.student = classrooms[this.classroomId][this.studentId];

	var skills = storageFactory.recall('skills');
	

	if (skills != false && skills != null) {
	  this.skills = skills;
	}
	delete(skills);

	var evaluations = storageFactory.recall('evaluations');
	if(evaluations != false && evaluations != null) {
		this.evaluations = evaluations;
	}
	delete evaluation;
}

EvaluationController.prototype.addEvaluation = function(index) {
	if (undefined === this.color 
		|| undefined === this.date
		|| undefined === this.color[index]
		|| undefined === this.date[index]) {
		this.error = index;
		return false;
	}

	var evaluations = this.evaluations;

	var studentId = this.studentId;
	var date = this.date[index];
	var color = this.color[index];

	if (!evaluations[this.classroomId]) {
		evaluations[this.classroomId] = [];
	}

	if (!evaluations[this.classroomId][studentId]) {
		evaluations[this.classroomId][studentId] = [];
	}

	if (!evaluations[this.classroomId][studentId]) {
		evaluations[this.classroomId][studentId] = [];
	}

    if (!evaluations[this.classroomId][studentId][index]) {
		evaluations[this.classroomId][studentId][index] = [];
	}


	evaluations[this.classroomId][studentId][index].push({date: date,color: color});

	this.storageFactory.memorize('evaluations', evaluations)
	this.check=index;
}