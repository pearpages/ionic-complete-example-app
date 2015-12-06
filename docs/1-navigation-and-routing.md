# Navigation and Routing

* Headers and footers
* Tabs
* Side Menu
* Routing

## Headers and footers

```html
<ion-pane>
    <ion-header-bar class="bar-positive">
        <h1 class="title">Title</h1>
    </ion-header-bar>

    <ion-content class="padding">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa corporis repellat sapiente perspiciatis, nisi totam ut, officia quibusdam eum ullam libero qui doloremque temporibus itaque assumenda, fuga quis obcaecati magnam ex quasi, deleniti. Impedit incidunt deserunt eveniet numquam, voluptatem minus debitis voluptatum, nobis facere qui iure at.
    </ion-content>

    <ion-footer-bar class="bar-balanced">
        <div class="title">Footer</div>
    </ion-footer-bar>
</ion-pane>
```

## Tabs

[Tabs Documentation in IonicFramework](http://ionicframework.com/docs/components/#tabs)

Just changing the footer area we can add tabs.

```html
<ion-pane>
    <ion-header-bar class="bar-positive">
        <h1 class="title">My title</h1>
    </ion-header-bar>

    <ion-content>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa corporis repellat sapiente perspiciatis, nisi totam ut, officia quibusdam eum ullam libero qui doloremque temporibus itaque assumenda, fuga quis obcaecati magnam ex quasi, deleniti. Impedit incidunt deserunt eveniet numquam, voluptatem minus debitis voluptatum, nobis facere qui iure at.
    </ion-content>

    <!-- tabs can be: blanced, positive, energized, ... -->
    <ion-tabs class="tabs-balanced">
        <ion-tab title="title1" href="#"></ion-tab>
        <ion-tab title="title2" href="#"></ion-tab>
        <ion-tab title="title3" href="#"></ion-tab>
    </ion-tabs>
</ion-pane>
```

### Icons on top

```html
<ion-pane>
    <ion-header-bar class="bar-positive">
        <h1 class="title">My title</h1>
    </ion-header-bar>

    <ion-content>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa corporis repellat sapiente perspiciatis, nisi totam ut, officia quibusdam eum ullam libero qui doloremque temporibus itaque assumenda, fuga quis obcaecati magnam ex quasi, deleniti. Impedit incidunt deserunt eveniet numquam, voluptatem minus debitis voluptatum, nobis facere qui iure at. Eos, laborum atque in delectus placeat tempora esse cupiditate minus temporibus nobis repudiandae suscipit vero enim nulla excepturi at, consequatur a voluptas veritatis error! Magni aspernatur, quae itaque eaque modi impedit fuga nesciunt numquam minima quidem laudantium quisquam beatae consequatur animi aperiam laboriosam sit vitae sed atque minus voluptas ex omnis. Quo, at?
    </ion-content>

    <!-- tabs can be: blanced, positive, energized, ... -->
    <ion-tabs class="tabs-balanced tabs-icon-top">
        <ion-tab title="Home" icon="ion-home" href="#"></ion-tab>
        <ion-tab title="Favorite" icon="ion-star" href="#"></ion-tab>
        <ion-tab title="Account" icon="ion-gear-a" href="#"></ion-tab>
    </ion-tabs>
</ion-pane>
```