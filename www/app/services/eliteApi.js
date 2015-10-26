(function (){
	'use strict';

	angular.module('eliteApp')
		.factory('eliteApi', ['$http','$q','$ionicLoading',eliteApi]);

	function eliteApi ($http,$q,$ionicLoading){

    var currentLeagueId;

		return {
			getLeagues: getLeagues,
			getLeagueData: getLeagueData,
      setLeagueId: setLeagueId
		};

    function getLeagues(){
      var deferred = $q.defer();


      $ionicLoading.show({
        template: "Loading..."
      });

				$http.get("http://elite-schedule.net/api/leaguedata")
          .success(function(data){
            $ionicLoading.hide();
            deferred.resolve(data);
          })
          .error(function(){
            console.log("Error while making HTTP call.");
            $ionicLoading.hide();
            deferred.reject();
          });

          return deferred.promise;
		}

    function setLeagueId(id){
      currentLeagueId = id;
    }

		function getLeagueData(){
      var deferred = $q.defer();

      $ionicLoading.show({
        template: "Loading..."
      });

      $http.get("http://elite-schedule.net/api/leaguedata/" + currentLeagueId)
        .success(function(data,status){
          console.log("Received schedule data via HTTP.",data,status);
          $ionicLoading.hide();
          deferred.resolve(data);
        })
        .error(function(){
          console.log("Error while making HTTP call.");
          $ionicLoading.hide();
          deferred.reject();
        });

        return deferred.promise;
		}
	}

})();

