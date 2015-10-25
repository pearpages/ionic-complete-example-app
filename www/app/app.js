(function (){
angular.module('eliteApp', ['ionic'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "app/home/home.html"
    })
    .state('app',{
      url: "/app",
      templateUrl: "app/layout/layout.html"
    });

    $urlRouterProvider.otherwise('/app');

});

})();