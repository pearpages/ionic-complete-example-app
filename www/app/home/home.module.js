(function() {
    'use strict';
    angular.module("myHome",[])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
        .state('home', {
            abstract: true,
            url: "/home",
            templateUrl: "app/home/home.html"
        })

        .state('home.leagues',{
            url: "/leagues",
            views: {
                "tab-leagues": {
                templateUrl: "app/home/leagues.html"
            }
          }
        })

        .state('home.myteams',{
          url: "/myteams",
          views: {
                "tab-myteams": {
                templateUrl: "app/home/my-teams.html"
            }
          }
        });
    });
})();

