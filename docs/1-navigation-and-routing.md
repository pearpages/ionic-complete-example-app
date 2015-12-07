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

## Route Parameters

