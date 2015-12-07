(function() {
    'use strict';
    angular.module("myStandings",[])
     .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('app.standings', {
              url: "/standings",
              views:{
                'mainContent':{
                  templateUrl: "app/standings/standings.html"
                }
              }
            });
    });
})();