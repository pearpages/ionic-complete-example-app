# Javascript Components

+ lists
+ grid system
+ cards
+ toggles and buttons
+ ionic popup

## ion-side-menus

```html
<ion-side-menus>
  <!-- Left menu -->
  <ion-side-menu side="left">
  </ion-side-menu>

  <ion-side-menu-content>
  <!-- Main content, usually <ion-nav-view> -->
  </ion-side-menu-content>

  <!-- Right menu -->
  <ion-side-menu side="right">
  </ion-side-menu>

</ion-side-menus>
```

## ion-nav-view

### Intro

Ionic uses the **AngularUI Router** module so app interfaces can be organized into various **"states"**. 

Each tab can have it's own navigation **history stack**.

### State Manager

Stats are abound to named, nested and parallel views, allowing more than one templated to be rendered on the same page.

Each state is not required to be bound to a URL, and data can be pushed to each state.

### ion-nav-view

The ion-nav-view is used to render templates in your application. Each template is part of a state.

## $ionicPopup

```javascript
function toggleFollow(){
    if(!vm.following){
        var confirmPopup = $ionicPopup.confirm({
            title: "Unfollow?",
            template: 'Are you sure you want to unfollow?'
        });
        confirmPopup.then(function(res){
            if(!res){
                vm.following = !vm.following;
            }
        });
    }
}
```