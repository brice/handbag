angular.module('app.skills', [])
  .controller('SkillsController', ['skillsFactory', SkillsController]);

function SkillsController(skillsFactory) {
  this.skillsFactory = skillsFactory;
  this.skillsList = [];

  var skills = skillsFactory.recall();

  if (skills != false && skills != null) {
    this.skillsList = skills;
  }
  console.log(this.skillsList);
  delete(skills);
}

SkillsController.prototype.saveSkill = function() {
  console.log(this.category);
  var skill = { category:this.category, libelle: this.libelle};
  this.skillsList.push( skill );
  this.skillsFactory.memorize ( this.skillsList );
};

