(function (){
angular.module('eliteApp', ['ionic'])
.controller('MyController', MyController)

  function MyController(){

    var vm = this;

    vm.myTitle = 'Headers Demo';
  }
})();