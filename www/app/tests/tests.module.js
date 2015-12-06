(function() {
    'use strict';
    angular.module("myTests",[])  
    .config(function($stateProvider, $urlRouterProvider){

      $stateProvider
      .state('tests', {
          url: "/tests",
          templateUrl: "app/tests/tests.html",
          controller: 'MyTestsController',
          controllerAs: 'vm'
      });

  });
})();