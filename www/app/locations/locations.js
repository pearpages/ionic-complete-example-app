(function (){
	'use strict';

	angular.module('eliteApp')
		.controller('LocationsController',['eliteApi',LocationsController]);

	function LocationsController(eliteApi){

		var vm = this;

		vm.locations = eliteApi.getLeagueData().locations;

	}
})();