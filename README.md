# ionic-complete-example-app

+ Navigation and Routing
+ Ionic Components
+ Data and Caching
+ Mapping
+ Customizing Ionic
+ ngCordova

## Cordova

* JavaScript API that "wraps" native APIs
* Native Mobile Apss using HTML/JS/CSS
* Re-use existing "web" skills
* Re-use existing web frameworks (angularJS for example)
* Big Community

## SiteMap

```
/ My Teams
/ Leagues / Teams / Team Detail / Game
/ Leagues / Standings
/ Leagues / Locations / Location Schedule
/ Leagues / Locations / Location Mapping
/ Leagues / Rules
```

## Ionic Overview

### What is Ionic?

* Open source, mobile-optimized ibrary for HTML/JS/CSS
* Built on top of AngularJS
* Built for native Cordova apps

### Ionic Command Line Features

```bash
#starts a new ionic project
ionic start
```

```bash
#Starts a local development server
ionic serve
```

```bash
#configure platform targets
ionic platform add ios
```

```bash
#locally build app for a platform
ionic build
```

```bash
#emulate app in simulator
ionic emulate
```

```bash
#run app on device
ionic run
```

### Starting a New Project

* We install node to get npm
* And install cordova

```bash
#ionic start [appName] [template]
ionic start myApp blank
```

### Run Your App

We can run the app in different ways:

* Local Browser: $ionic serve (localhost:8100)
* Emulator: $ionic emulate
* Device: $ionic run

First remember to install the SDK appropiate.

```bash
ionic add platform ios
ionic build ios
ionic emulate ios
# or
# which builds and deploys to the device
ionic runn ios
```

### Ionic Starter Templates

* blank
* tabs
* side menu
* maps


