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

