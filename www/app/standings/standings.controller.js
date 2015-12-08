(function (){
	'use strict';

	angular.module('myStandings')
		.controller('StandingsController',['eliteApi',StandingsController]);

	function StandingsController(eliteApi){

		var vm = this;

        activate();

        function activate() {
            eliteApi.getLeagueData()
            .then(function(data) {
                vm.standings = data.standings;
            });
        }

	}

})();