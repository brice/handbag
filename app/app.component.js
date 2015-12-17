(function(app) {
  app.AppComponent = ng.core
    .Component({
      selector: 'my-app',
      template: '<h1>{{title}}</h1><h2>{{classId}} details!</h2>'
    })
    .Class({
      constructor: function() {
        this.title = 'Handbag Application';
        this.classId = '6A';
      }
    });
})(window.app || (window.app = {}));
