(function (){
angular.module('eliteApp', ['ionic'])
.controller('MyController', MyController)
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
});

  function MyController(){

    var vm = this;

    vm.myTitle = 'Headers Demo';
  }
})();