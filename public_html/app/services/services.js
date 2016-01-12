angular.module('myApp').factory('catrers',function($resource){
       return $resource('http://localhost:8080/PeopleBackend/webresources/catrers',{},{
          query: {
              method:'GET', isArray:true 
          } 
       }); 
    });