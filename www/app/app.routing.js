(function (){
    'use strict';
    angular.module('eliteApp')
    .config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('app',{
      
      url: "/app",
      templateUrl: "app/layout/menu-layout.html"
    })

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
          templateUrl: "app/teams/team-detail.html"
        }
      }
    })

    .state('app.game',{
      url: "/game/:id",
      views: {
        'mainContent':{
          templateUrl: "app/game/game.html"
        }
      }
    })

    .state('app.standings', {
      url: "/standings",
      views:{
        'mainContent':{
          templateUrl: "app/standings/standings.html"
        }
      }
    })

    .state('app.locations', {
      url: "/locations",
      views: {
        'mainContent': {
          templateUrl: "app/locations/locations.html"
        }
      }
    })

    .state('app.rules', {
      url: "/rules",
      views: {
        'mainContent' :{
          templateUrl: "app/rules/rules.html"
        }
      }
    });

    // it can't be home because home is abstract
    $urlRouterProvider.otherwise('/home/leagues');

});
}());