(function (){
    'use strict';
    angular.module('eliteApp')
    .config(function($stateProvider, $urlRouterProvider){


    // it can't be home because home is abstract
    // home.leagues is part of the myHome module
    $urlRouterProvider.otherwise('/home/leagues');

});
}());