(function (){
	angular.module('eliteApp')
		.controller('TeamsController',['eliteApi',TeamsController]);

		function TeamsController(eliteApi){
			var vm = this;

			eliteApi.getLeagueData().then(function(data){
				vm.teams = data.teams;
			});
		}
})();