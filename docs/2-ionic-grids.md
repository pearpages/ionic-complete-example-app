# Ionic Grids

+ Responsive grid (by default equally distributed)
+ Supports explicit column sizes 
+ Supports column offsets
+ Control of vertical alignment

## Explicit Column Sizes

```
.col.col-50 .col .col (50,25,25)
.col.col-75 .col (75,25)
.col .col.col-75 (25,75)
.col .col (50,50)
.col.col-20 .col .col.col-20 (20,60,20)
```

```html
<div class="row">
                <div class="col-20">
                    <p>{{game.time | date:'M/d/yy'}}</p>
                    <p>{{game.time | date: 'shortTime'}}</p>
                </div>

                <div class="col col-center">
                    <h3>{{game.homeAway}} {{game.opponent}}</h3>
                    <p>{{game.location}}</p>
                </div>
                <div class="col-20 col-center">
                    <h4 class="positive">{{game.scoreDisplay}}</h4>
                </div>                  
            </div>
```

## Offset Columns

```
```

## Vertically Aligned Columns

```
```



