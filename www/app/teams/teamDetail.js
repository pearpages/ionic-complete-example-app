(function (){
	'use strict';

	angular.module('myTeams')
	.controller('TeamDetailController', ['$stateParams','eliteApi','$ionicPopup',TeamDetailController]);

	function TeamDetailController ($stateParams,eliteApi,$ionicPopup){
		var vm = this;

		vm.teamId = Number($stateParams.id);
		vm.teamName = getTeamName();
		vm.games = getGames();
		vm.teamStanding = getTeamStanding();
		vm.toggleFollow = toggleFollow;
		vm.following;

		var data;

		function toggleFollow(){
			if(vm.following){
				var confirmPopup = $ionicPopup.confirm({
					title: "Unfollow?",
					template: 'Are you sure you want to unfollow?'
				});
				confirmPopup.then(function(res){
					if(res){
						vm.following = !vm.following;
					}
				});
			}else{
				vm.following = !vm.following;
			}
		}


		function getData(){
			if(!data){
				data = eliteApi.getLeagueData();
			}

			return data;
		} 

		function getTeamStanding(){
			return _.chain(getData().standings)
					.flatten("divisionStandings")
					.find({"teamId": vm.teamId})
					.value();
		}

		function getTeamName(){
			return _.chain(getData().teams)
					.flatten("divisionTeams")
					.find({"id": vm.teamId})
					.value();
		}
		
		function getGames(){
			return _.chain(getData().games)
					.filter(isTeamInGame)
					.map(function(item){
						var isTeam1 = (item.team1d === vm.teamId ? true: false);
						var oponnentName = isTeam1 ? item.team2 : item.team1;
						var scoreDisplay = getScoreDisplay(isTeam1, item.team1Score);
						return {
							gameId: item.id,
							opponent: oponnentName,
							tiem: item.time,
							location: item.location,
							locationUrl: item.locationUrl,
							scoreDisplay: scoreDisplay,
							homeAway: (isTeam1 ? "vs." : "at")
						};
					}).value();
		}

		function isTeamInGame(item){
			return item.team1Id === vm.teamId || item.team2Id === vm.teamId;
		}

		function getScoreDisplay(isTeam1, team1Score, team2Score){
			if(team1Score && team2Score){
				var teamScore = (isTeam1 ? team1Score : team2Score);
				var opponentScore = (isTeam1 ? team2Score: team1Score);
				var winIndicator = teamScore > opponentScore ? "W: " : "L: ";
				return winIndicator + teamScore + "-" + opponentScore;
			}else{
				return "";
			}
		}
	}

})();