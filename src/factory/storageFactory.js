// Just a reminder 
// See http://time2hack.com/2014/12/browser-storage-and-angularjs.html for more information

angular.module('app')
  .factory('storage', ['$window', function($window){
  	return {
 			setLocal: function( key, value ){
        try{
          if( $window.Storage ){
            $window.localStorage.setItem(key, value);
            return true;
          } else {
            return false;
          }
        } catch( error ){
          console.error( error, error.message );
        }
      },
      getLocal: function( key ){
        try{
          if( $window.Storage ){
            return $window.localStorage.setItem( key );
          } else {
            return false;
          }
        } catch( error ){
          console.error( error, error.message );
        }
      },
      setSession: function( key, value ){
        try{
          if( $window.Storage ){
            $window.sessionStorage.setItem( key, value );
            return true;
          } else {
            return false;
          }
        } catch( error ){
          console.error( error, error.message );
        }
      },
      getSession: function( key ){
        try{
          if( $window.Storage ){
            return $window.sessionStorage.setItem( key );
          } else {
            return false;
          }
        } catch( error ){
          console.error( error, error.message );
        }
      }
  	}
  }]);
