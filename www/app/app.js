(function (){
angular.module('eliteApp', [
  'ionic',
  'myLayout',
  'myHome',
  'myGame',
  'myLocations',
  'myRules',
  'myTeams',
  'myStandings',
  'myTests',
  'angular-cache'
  ])
.run(function($ionicPlatform, CacheFactory) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    //caches
    //10seconds = 10000
    CacheFactory.createCache("leagueDataCache", {storageMode: "localStorage", maxAge: 5000, deleteOnExpire: "aggressive"});
    CacheFactory.createCache("leaguesCache", {storageMode: "localStorage", maxAge: 5000, deleteOnExpire: "aggressive"});
    CacheFactory.createCache("myTeamsCache", {storageMode: "localStorage"});
    CacheFactory.createCache("staticCache", {storageMode: "localStorage"});
  });
});


})();