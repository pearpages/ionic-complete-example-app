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
			vm.leagues = eliteApi.getLeagues();
		}

		function selectLeague(leagueId) {
			$state.go('app.teams');
		}

	}
})();