# Navigation and Routing

* Organize into State Machines
* Allows for Nested Views
* 3 wasys to activate state
    + ui-sref
    + url
    + $state.go()

## State

+ Unique Name
+ URL (supporst paramaters)
+ Template/TemplateUrl
+ Controller (optional)

```javascript
$stateProvider.state(
        "contacts",{
            url: "/contacts",
            templateUrl: "contacts.html"
        }
    );
```

## Nested States/Views

+ Ues dot notation
+ Child Inhertis from Parent URL
+ Parents can be abstract (can have child sstates bot not get activated themselves, must contain their own <ui-view> -in ionic <ion-nav-view>-)

```javascript
$stateProvider
    .state("foo", {
        abstract: true,
        url: "/foo",
        templateUrl: "foo.html" //must contain <ion-nav-view/>
    })
    .state("foo.bar",{
        url: "/bar", //will be "/foo/bar"
        templateUrl: "bar.html"    
    })
    .state("foo.baz",{
        url: "/xxx", //will be "/foo/xxx"
        templateUrl: "baz.html"
    });
```

## Activating states

+ ```<a href="#/foo/bar">Go</a>```
+ ```<a ui-sref="foo.bar">Go</a>```
+ ```$state.go("foo.bar)```

ui-sref example with params!

```html
<div class="list">
            <a class="item item-icon-right" ng-repeat="game in vm.games" ui-sref="app.game({id:game.gameId})">

            <div class="row">
                <div class="col-20">
                    <p>{{game.time | date:'M/d/yy'}}</p>
                    <p>{{game.time | date: 'shortTime'}}</p>
                </div>

                <div class="col col-center">
                    <h3>{{game.homeAway}} {{game.opponent}}</h3>
                    <p>{{game.location}}</p>
                </div>
                <div class="col-20">c
                    <h4 class="positive">{{game.scoreDisplay}}</h4>
                </div>                  
            </div>

            <i class="icon ion-chevron-right icon-accessory"></i>
            </a>
        </div>
```

$state.go with params

```javascript
vm.goToTeam = function(team) {
    eliteApi.setLeagueId(team.leagueId);
    $state.go("app.team-detail", {id:team.id});
}
```

## Example

### The "abstract" view

```html
<ion-nav-bar class="bar-balanced">
  <ion-nav-title>Elite Schedule</ion-nav-title>
</ion-nav-bar>

<ion-tabs class="tabs-energized tabs-icon-top">
  
  <ion-tab title="Leagues" icon="ion-home" href="#/home/leagues">
    <!-- The view has its name -->
    <ion-nav-view name="tab-leagues"></ion-nav-view>
  </ion-tab>

  <ion-tab title="My Teams" icon="ion-star" ui-sref="home.myteams">
    <ion-nav-view name="tab-myteams"></ion-nav-view>
  </ion-tab>
  
</ion-tabs>
```

### The routing in the module

Remember that in the example son routes will inherit the url of the parent, so e.g. /leagues will be /home/leagues.

```javascript
(function() {
    'use strict';
    angular.module("myHome",[])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
        .state('home', {
            abstract: true,
            url: "/home",
            templateUrl: "app/home/home.html"
        })

        .state('home.leagues',{
            url: "/leagues",
            views: {
                "tab-leagues": {
                templateUrl: "app/home/leagues.html"
            }
          }
        })

        .state('home.myteams',{
          url: "/myteams",
          views: {
                "tab-myteams": {
                templateUrl: "app/home/myteams.html"
            }
          }
        });
    });
})();
```

### leagues.html view

```html
<ion-view ng-controller="LeaguesController as leagues">
    <ion-content class="has-header" >
        <div class="list">
            <a ng-click="leagues.selectLeague()" class="item item-icon-right" ng-repeat="league in leagues.leagues">{{league.name}} <i class="icon ion-chevron-right icon-accessory"></i>
            </a>
        </div>
    </ion-content>
</ion-view>
```

## Animations

See the animation attribute:

```html
<ion-nav-bar class="bar-positive">
    <ion-nav-title>Abstract main content</ion-nav-title>
    <ion-nav-buttons>
        <button class="button button-primary icon ion-navicon" menu-toggle="left"></button>
    </ion-nav-buttons>
</ion-nav-bar>

<ion-nav-view name="mainContent" animation="slide-left-right">

</ion-nav-view>
```

## Route Parameters

### $stateParams

Through $stateParams we have access to the url params defined in the routing.

### $state

```$sate.go('home.teams');```