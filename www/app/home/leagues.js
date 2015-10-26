(function (){
	angular.module('eliteApp')
		.controller('LeaguesController',['$state','eliteApi',LeaguesController]);

	function LeaguesController($state,eliteApi){

		var vm = this;

		eliteApi.getLeagues().then(function(data){
			vm.leagues = data;
		});		

		vm.selectLeague = function (id){
			eliteApi.setLeagueId(id);
			$state.go("app.teams");
		}
	}
})();