(function (){
	angular.module('eliteApp')
		.controller('GameController',['$stateParams','eliteApi',GameController]);


		function GameController($stateParams,eliteApi){

			var vm = this;

			var gameId = Number($stateParams.id);
			var data = eliteApi.getLeagueData();

			vm.game = _.find(data.games, {"id":gameId});
		}
})();