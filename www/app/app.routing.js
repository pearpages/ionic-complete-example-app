(function (){
    'use strict';
    angular.module('eliteApp')
    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider){

        //disabling cache
    $ionicConfigProvider.views.maxCache(0);

    // it can't be home because home is abstract
    // home.leagues is part of the myHome module
    $urlRouterProvider.otherwise('/home/leagues');

});
}());