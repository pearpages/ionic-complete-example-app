(function() {
    'use strict';

    angular.module("eliteApp")
    .factory('myTeams',['CacheFactory',myTeams]);

    function myTeams(CacheFactory) {

        var self = this;
        self.myTeamsCache = null;

        activate();

        return {
            followTeam: followTeam,
            unfollowTeam: unfollowTeam,
            getFollowedTeams: getFollowedTeams,
            isFollowingTeam: isFollowingTeam
        };

        function activate() {
            self.myTeamsCache = CacheFactory.get("myTeamsCache");
        }

        function followTeam(team) {
            self.myTeamsCache.put(team.id, team);
        }

        function unfollowTeam(teamId) {
            self.myTeamsCache.remove(teamId.toString());
        }

        function getFollowedTeams() {
            var teams = [];
            var keys = self.myTeamsCache.keys();

            for(var i = 0; i < keys.length; i++) {
                var team = self.myTeamsCache.get(keys[i]);
                teams.push(team);
            }

            return teams;
        }

        function isFollowingTeam(teamId) {
            var team = self.myTeamsCache.get(teamId);
            return team;
        }
    }
})();