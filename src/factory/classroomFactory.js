angular.module('app')
  .factory('classroomFactory', ['$window', function($window){
    return{
      saveClassroom: function(id, value) {
        try{
          if ($window.Storage) {
            $window.localStorage.setItem( 'classroom-' + id, $window.JSON.stringify(value));
            return true;
          } else {
            return false
          }
        } catch (error) {
          console.error( error, error.message);
        }
        return false;
      },
      getClassroom: function(id) {
        try{
          if ($window.Storage) {
            return $window.JSON.parse( $window.localStorage.getItem('classroom-'+id));
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