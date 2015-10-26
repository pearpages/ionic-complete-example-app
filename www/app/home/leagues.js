(function (){
	angular.module('eliteApp')
		.controller('LeaguesController',['eliteApi',LeaguesController]);

	function LeaguesController(eliteApi){

		var vm = this;

		vm.leagues = eliteApi.getLeagues();
		vm.leagueData = eliteApi.getLeagueData();

		
	}
})();