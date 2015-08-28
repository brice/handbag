angular.module('app.skills', [])
  .controller('SkillsController', ['storageFactory', SkillsController]);

function SkillsController(storageFactory) {
  this.storageFactory = storageFactory;
  this.skills = [];

  var skills = this.storageFactory.recall('skills');

  if (skills != false && skills != null) {
    this.skills = skills;
  }
  delete(skills);
}

SkillsController.prototype.saveSkill = function() {
  var skill = { category:this.category, libelle: this.libelle};
  this.skills.push( skill );
  this.storageFactory.memorize ('skills', this.skills );
};

