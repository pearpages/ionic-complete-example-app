# Data and Caching

+ $http
+ Promises ($q)
+ Loading
+ Caching
+ Refreshing

## Disabling Cache Globally

```javascript
(function (){
    'use strict';
    angular.module('eliteApp')
    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider){

    //disabling cache globally
    $ionicConfigProvider.views.maxCache(0);

    // it can't be home because home is abstract
    // home.leagues is part of the myHome module
    $urlRouterProvider.otherwise('/home/leagues');

});
}());
```

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

```javascript
(function (){
angular.module('eliteApp', [
  'ionic',
  'angular-data.DSCacheFactory'
  ]);
```

index.html

```html
<script src="lib/angular-cache/dist/angular-cache.min.js"></script>
```

app.js (run)

```javascript
(function (){
angular.module('eliteApp', [
  'ionic',
  'angular-cache'
  ])
.run(function($ionicPlatform, CacheFactory) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    //caches
    //10seconds = 10000
    CacheFactory.create("leagueDataCache", {storageMode: "localStorage", maxAge: 10000, deleteOnExpire: "agressive"});
    CacheFactory.create("leaguesCache", {storageMode: "localStorage", maxAge: 10000, deleteOnExpire: "agressive"});
    CacheFactory.create("myTeamsCache", {storageMode: "localStorage"});
    CacheFactory.create("staticCache", {storageMode: "localStorage"});
  });
});


})();
```

Service code

```javascript
    var leaguesCache = CacheFactory.get('leaguesCache');

    function getLeagues() {
      var deferred = $q.defer();
      var cacheKey = 'leagues;'
      var leaguesData = leaguesCache.get(cacheKey);

      if(leaguesData) {
        console.log('Found data inside cache', leaguesData);
        deferred.resolve(leaguesData);
      } else {
        $http.get("http://elite-schedule.net/api/leaguedata")
        .success(function(data) {
          console.log("Received data via HTTP");
          leaguesCache.put(cacheKey, data);
          deferred.resolve(data);
        }).error(function() {
          console.log("Error while making HTTP call.");
          deferred.reject();
        });
      }

      return deferred.promise;
    }
```

## Offline

In a service

```javascript
 var leaguesCache = CacheFactory.get('leaguesCache')
    .setOptions({
      onExpire: function(key, value) {
        getLeagues()
          .then(function() {
            console.log("Leagues Cache was automatically refreshed");
          }, function() {
            console.log("Error getting data. Putting exipred item back into the cache", new Date());
            leaguesCache.put(key, value);
          });
      }
    });
```