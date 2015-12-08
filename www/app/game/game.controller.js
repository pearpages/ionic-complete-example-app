(function (){
	angular.module('myGame')
		.controller('GameController',['$stateParams','eliteApi',GameController]);


		function GameController($stateParams,eliteApi){

			var vm = this;

            vm.game = null;

            activate();

            function activate() {
                var gameId = Number($stateParams.id);
                eliteApi.getLeagueData()
                .then(function(data) {
                    vm.game = _.find(data.games, {"id":gameId});    
                });
                
            }

			

		}
})();