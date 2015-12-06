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
  <h1 class="title">bar-light</h1>
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

## <button>

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