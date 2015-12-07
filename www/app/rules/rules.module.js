(function() {
    'use strict';
    angular.module("myRules",[])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('app.rules', {
              url: "/rules",
              views: {
                'mainContent' :{
                  templateUrl: "app/rules/rules.html"
                }
              }
            });
    });
})();