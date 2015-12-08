# Data and Caching

+ $http
+ Promises ($q)
+ Loading
+ Caching
+ Refreshing

## $http

In the **Service**

```javascript
$http.get("http://elite-schedule.net/api/leaguedata/" + currentLeagueId)
      .success(function(data,status) {
        console.log("Received schedule data via HTTP",data, status);
        callback(data);
      })
      .error(function() {
        console.log("Error while making HTTP call.");
      });
```

In the **Controller**

```javascript
function activate() {
    eliteApi.getLeagues(function(data) {
        vm.leagues = data;
    });
}
```

## Promises ($q)

```The piramid of doom or nested callbacks!```

In the service

```javascript
function getLeagueData() {
    var deferred = $q.defer();

    $http.get("http://elite-schedule.net/api/leaguedata/" + currentLeagueId)
    .success(function(data,status) {
      console.log("Received schedule data via HTTP",data, status);
      deferred.resolve(data);
    })
    .error(function() {
      console.log("Error while making HTTP call.");
      deferred.reject();
    });
    return deferred.promise;
  }
```

In the controller

```javascript
function activate() {
      eliteApi.getLeagues()
      .then(function(data) {
        vm.leagues = data;
      });
    }
```

## $ionicLoading

This example has also a $timeout but it's only to shouw the $ionicLoading more time

```javascript
function getLeagueData() {
      var deferred = $q.defer();

      $ionicLoading.show({template: 'Loading...'});

      $http.get("http://elite-schedule.net/api/leaguedata/" + currentLeagueId)
      .success(function(data,status) {
        console.log("Received schedule data via HTTP",data, status);
        $timeout(function() {
          $ionicLoading.hide();
          deferred.resolve(data);
        },1000);
      })
      .error(function() {
        console.log("Error while making HTTP call.");
        $ionicLoading.hide();
        deferred.reject();
      });
      return deferred.promise;
    }
```

## Angular Cache

+ Angular-cache is a replacement for Angular's **$cacheFactory**
+ Configurable TTL (time to live, when are we going to reload/refresh it)
+ Configurable Storage Options (e.g., Local Storage)
+ Expiration Events
