(function (){
	angular.module('myTeams')
		.controller('TeamsController',['$scope','eliteApi',TeamsController]);

		function TeamsController($scope,eliteApi){
			var vm = this;

            vm.teams = null;
            vm.loadList = loadList;

            activate();

            function activate() {
                loadList(false);   
            }

            function loadList(forceRefresh) {
                eliteApi.getLeagueData(forceRefresh)
                .then(function(data) {
                    vm.teams = data.teams;
                }).finally(function() {
                    $scope.$broadcast('scroll.refreshComplete');
                });
            }
			
		}
})();