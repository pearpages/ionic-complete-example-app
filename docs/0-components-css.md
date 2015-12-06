# Components CSS

## Colors

+ light
+ stable
+ positive
+ calme
+ balanced
+ energized
+ assertive
+ royal
+ dark

## Headers

```html
<div class="bar bar-header bar-light">
  <button class="button icon ion-navicon"></button>
  <h1 class="title">Header Buttons</h1>
  <button class="button">Edit</button>
</div>
<ion-content class="has-header"></ion-content>
```

Header with clear buttons

```html
<div class="bar bar-header bar-light">
  <button class="button button-clear icon ion-navicon"></button>
  <h1 class="title">Header Buttons</h1>
  <button class="button buton-clear button-positive">Edit</button>
</div>
<ion-content class="has-header"></ion-content>
```

## Subheaders

```html
<div class="bar bar-subheader">
  <h2 class="title">Sub Header</h2>
</div>
<ion-content class="has-subheader"></ion-content>
```

## Content

```
<ion-content 
    [delegate-handle=""] 
    [direction=""] 
    [locking=""] 
    [padding=""] 
    [scroll=""] 
    [overflow-scroll=""] 
    [scrollbar-x=""] 
    [scrollbar-y=""] 
    [start-x=""] 
    [start-y=""] 
    [on-scroll=""] 
    [on-scroll-complete=""] 
    [has-bouncing=""] 
    [scroll-event-interval=""]>
     ... 
</ion-content>
```

## Footer

```html
<div class="bar bar-footer">
  <button class="button button-clear">Left</button>
  <div class="title">Title</div>
  <button class="button button-clear">Right</button>
</div>
```

No title but button on the right or left, use **pull-right** or **pull-left**

```html
<div class="bar bar-footer">
  <button class="button button-clear pull-right">Right</button>
</div>
```

## Button

```html
<button class="button button-stable">title of the button</button>
```

**Block** button using class: **button-block**
```html
<button class="button button-block button-positive">
  Block Button
</button>
```

Or different sizes:

+ button-block
+ button-full
+ button-small
+ button-large

```html
<button class="button button-full button-positive">
  Block Button
</button>

<button class="button button-small button-positive">
  Block Button
</button>
```

Outlined

```html
<button class="button button-outlined button-full button-positive">
  Block Button
</button>
```

Clear

```html
<button class="button button-clear button-positive">
  Block Button
</button>


```

With Icons

```html
<button class="button">
  <i class="icon ion-loading-c"></i> Loading...
</button>

<button class="button icon-left ion-home">Home</button>

<button class="button icon-left ion-star button-positive">Favorites</button>

<button class="button icon ion-gear-a"></button>
```

Links (a) or (span) as buttons

```html
<a class="button icon-right ion-chevron-right button-calm">Learn More</a>

<a class="button icon-left ion-chevron-left button-clear button-dark">Back</a>

<a class="button button-icon icon ion-settings"></a>

<a class="button button-outline icon-right ion-navicon button-balanced">Reorder</a>

<span class="button button-icon icon ion-settings"></span>
```

## Button Bar

```html
<div class="button-bar">
  <a class="button">First</a>
  <a class="button">Second</a>
  <a class="button">Third</a>
</div>
```

## List

[For all the options check the docs](http://ionicframework.com/docs/components/#list)

We can create lists with:

+ div.list
+ ul.list

And list elements will be then

+ a.item
+ div.item

```html
<ul class="list">
  <li class="item">
    ...
  </li>
</ul>
```

### Dividers

Will be:

+ div.item.item-divider

```html
<div class="list">

  <div class="item item-divider">
    Candy Bars
  </div>

  <div class="item">
    Butterfinger
  </div>

  <div class="item">
    Kit Kat
  </div
  ...

</div>
```

### With Icons

```html
<div class="list">

  <a class="item item-icon-left" href="#">
    <i class="icon ion-email"></i>
    Check mail
  </a>

  <a class="item item-icon-left item-icon-right" href="#">
    <i class="icon ion-chatbubble-working"></i>
    Call Ma
    <i class="icon ion-ios-telephone-outline"></i>
  </a>

  <a class="item item-icon-left" href="#">
    <i class="icon ion-mic-a"></i>
    Record album
    <span class="item-note">
      Grammy
    </span>
  </a>

  <a class="item item-icon-left" href="#">
    <i class="icon ion-person-stalker"></i>
    Friends
    <span class="badge badge-assertive">0</span>
  </a>

</div>
```