angular.module('app', ['ngNewRouter', 'app.home', 'app.classroom', 'app.skills'])
  .controller('AppController', ['$router', AppController]);

function AppController ($router) {}