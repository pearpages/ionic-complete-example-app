(function (){
	'use strict';

	angular.module('myLocations')
		.controller('LocationsController',['eliteApi',LocationsController]);

	function LocationsController(eliteApi){

		var vm = this;

		eliteApi.getLeagueData()
        .then(function(data) {
            vm.locations = data.locations;
        });

	}
})();