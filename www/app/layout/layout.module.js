(function() {
    'use strict';
    angular.module("myLayout",[])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('app',{
              abstract: true,
              url: "/app",
              templateUrl: "app/layout/menu-layout.html"
            });
    });
})();