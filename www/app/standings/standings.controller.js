(function (){
	'use strict';

	angular.module('myStandings')
		.controller('StandingsController',['eliteApi',StandingsController]);

	function StandingsController(eliteApi){

		var vm = this;

        activate();

        function activate() {
            vm.standings = eliteApi.getLeagueData().standings;    
        }

	}

})();