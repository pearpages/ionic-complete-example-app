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
```

## Subheaders

```html
<div class="bar bar-subheader">
  <h2 class="title">Sub Header</h2>
</div>
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