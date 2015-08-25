angular.module('app')
  .factory('storageFactory', ['$window', function($window){
    return{
      memorize: function(id, value) {
        try{
          if ($window.Storage) {
            $window.localStorage.setItem(id, $window.JSON.stringify(value));
            return true;
          } else {
            return false
          }
        } catch (error) {
          console.error( error, error.message);
        }
        return false;
      },
      recall: function(id) {
        try{
          if ($window.Storage) {
            return $window.JSON.parse($window.localStorage.getItem(id));
          } else {
            return false;
          }
        } catch (error) {
          console.error( error, error.message);
        }
        return false;
      }
    }
  }]);