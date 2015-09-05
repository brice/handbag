angular.module('app.skills', ['slugifier'])
  .controller('SkillsController', ['storageFactory', 'Slug', SkillsController]);

function SkillsController(storageFactory, Slug) {
  this.storageFactory = storageFactory;
  this.Slug = Slug;
  this.skills = this.storageFactory.recall('skills', {});
}

SkillsController.prototype.saveSkill = function() {
  var skill = { category:this.category, libelle: this.libelle};
  var index = this.Slug.slugify(this.category+' '+this.libelle);
  this.skills[index] = skill;
  this.storageFactory.memorize ('skills', this.skills );
};

