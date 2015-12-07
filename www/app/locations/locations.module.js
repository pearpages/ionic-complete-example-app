(function() {
    'use strict';
    angular.module("myLocations",[])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
        .state('app.locations', {
              url: "/locations",
              views: {
                'mainContent': {
                  templateUrl: "app/locations/locations.html"
                }
              }
            });

    });
})();