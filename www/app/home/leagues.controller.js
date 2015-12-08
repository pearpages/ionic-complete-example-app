(function() {
	'use strict';

	angular.module("myHome")
	.controller('LeaguesController',['$state','eliteApi',LeaguesController]);

	function LeaguesController($state,eliteApi) {
		var vm = this;

		vm.leagues = null;
		vm.selectLeague = selectLeague;

		activate();

		function activate() {
			eliteApi.getLeagues()
			.then(function(data) {
				vm.leagues = data;
			});
		}

		function selectLeague(leagueId) {
			eliteApi.setLeagueId(leagueId);
			$state.go('app.teams');
		}

	}
})();