angular.module('app.skills', [])
  .controller('SkillsController', ['storageFactory', SkillsController]);

function SkillsController(storageFactory) {
  this.storageFactory = storageFactory;
  this.skillsList = [];

  var skills = this.storageFactory.recall('skills');

  if (skills != false && skills != null) {
    this.skillsList = skills;
  }
  delete(skills);
}

SkillsController.prototype.saveSkill = function() {
  var skill = { category:this.category, libelle: this.libelle};
  this.skillsList.push( skill );
  this.storageFactory.memorize ('skills', this.skillsList );
};

