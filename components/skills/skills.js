angular.module('app.skills', [])
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
  console.log(this.skills);
  this.storageFactory.memorize ('skills', this.skills );
};

