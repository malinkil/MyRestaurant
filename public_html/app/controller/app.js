

(function(){

    angular.module('myApp',['ngRoute','ngMessages','ngAnimate','ngResource']);

    angular.module('myApp').config(moduleConfig);

    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/aboutUs', {
                templateUrl: 'views/aboutUs/aboutUs.html',
                controller: 'abs'
                
            })
            .when('/contactUs', {
                templateUrl: 'views/contactUs/contactUs.html',
                controller: 'cs'
            })
            .when('/csb', {
                templateUrl: 'views/catering/catering.html',
                controller: 'catDetails'
            })
            
            .otherwise({
                redirectTo: '/aboutUs'
            });
    }
    
    
    
      
})();
