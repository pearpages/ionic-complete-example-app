(function (){
	'use strict';

	angular.module('eliteApp')
	.controller('TeamDetailController', ['$stateParams',TeamDetailController]);

	function TeamDetailController ($stateParams){
		var vm = this;

		console.log("$stateParams", $stateParams);
	}
})();