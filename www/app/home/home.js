(function (){
angular.module('eliteApp')
.controller('HomeController', HomeController)

  function HomeController(){

    var vm = this;

    vm.myTitle = 'Headers Demo';
  }
})();