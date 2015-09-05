angular.module('handbagFilters', []).filter('libelleColor', function() {
  return function(input) {
  	var libelle = 'N/A';
    switch(input){
    	case 'red':
    		libelle = 'R';
        break;
		  case 'yellow':
        libelle = 'J';
        break;
      case 'green': 
        libelle = 'V';
        break;
    }
    return libelle;
  };
});