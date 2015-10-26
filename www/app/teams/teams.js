(function (){
	angular.module('eliteApp')
		.controller('TeamsController',['eliteApi',TeamsController]);

		function TeamsController(eliteApi){
			var vm = this;

			vm.teams = eliteApi.getLeagueData().teams;
		}
})();