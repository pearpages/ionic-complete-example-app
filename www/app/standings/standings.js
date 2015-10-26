(function (){
	'use strict';

	angular.module('eliteApp')
		.controller('StandingsController',['eliteApi',StandingsController]);

	function StandingsController(eliteApi){

		var vm = this;
		vm.standings = eliteApi.getLeagueData().standings;

	}

})();