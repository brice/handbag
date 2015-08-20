angular.module('app', ['ngNewRouter', 'app.home', 'app.classroom'])
  .controller('AppController', ['$router', AppController]);

function AppController ($router) {}