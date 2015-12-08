(function() {
    'use strict';

    angular.module("myHome")
    .controller('MyTeamsController',['$state','myTeams','eliteApi',MyTeamsController]);

    function MyTeamsController($state,myTeams,eliteApi) {

        var vm = this;

        vm.myTeams = null;
        vm.goToTeam = goToTeam;

        activate();

        function activate() {
            vm.myTeams = myTeams.getFollowedTeams();
            console.log(vm.myTeams);
        }

        function goToTeam(team) {
            eliteApi.setLeagueId(team.leagueId);
            $state.go("app.team-detail", {id: team.id});
        }
    }
})();