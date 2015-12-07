(function() {
    'use strict';
    angular.module("myGame",[])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
           

            .state('app.game',{
              url: "/game/:id",
              views: {
                'mainContent':{
                  templateUrl: "app/game/game.html"
                }
              }
            });

    });
})();