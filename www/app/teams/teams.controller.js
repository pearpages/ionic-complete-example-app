(function (){
	angular.module('myTeams')
		.controller('TeamsController',['eliteApi',TeamsController]);

		function TeamsController(eliteApi){
			var vm = this;

            vm.teams = null;

            activate();

            function activate() {
                vm.teams = eliteApi.getLeagueData().teams;
            }
			
		}
})();