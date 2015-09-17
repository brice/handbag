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
      recall: function(id, defaultValue) {
        try{
          if ($window.Storage) {
            var value = $window.JSON.parse($window.localStorage.getItem(id));
            if (undefined == defaultValue || (value != false && value != null)) {
              return value;
            }
            return defaultValue;
          } else {
            return false;
          }
        } catch (error) {
          console.error(error, error.message);
        }
        return false;
      }
      dump: function() {
        try{
          return $window.localStorage.dump();
        } catch (error) {
          console.error(error, error.message)
        }
      }
    }
  }]);