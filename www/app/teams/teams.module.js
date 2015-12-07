(function() {
    'use strict';
    angular.module("myTeams",[])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('app.teams',{
              url: "/teams",
              views: {
                'mainContent' : {
                  templateUrl: "app/teams/teams.html"
                }
              }
            })
            .state('app.team-detail',{
              url: "/teams/:id",
              views: {
                'mainContent':{
                  templateUrl: "app/teams/team-detail.html",
                  controller: 'TeamDetailController',
                  controllerAs: 'teamDetail'
                }
              }
            });
    });
})();