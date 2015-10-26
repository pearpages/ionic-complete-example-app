(function (){
	angular.module('eliteApp')
		.controller('LeaguesController',['$state','eliteApi',LeaguesController]);

	function LeaguesController($state,eliteApi){

		var vm = this;

		vm.leagues = eliteApi.getLeagues();
		vm.leagueData = eliteApi.getLeagueData();
		vm.selectLeague = selectLeague;

		function selectLeague(leagueId){
			//TODO: select right league

			$state.go("app.teams");
		}

		
	}
})();