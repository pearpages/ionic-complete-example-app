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
