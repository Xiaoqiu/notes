# Define a Module
## Value Pairs
```javascript
// shirt.js
define({
    color: "black",
    size: "unisize"
});

// app.js
define(function (require) {
    var shirt = require('shirt');
    console.log(shirt.color);
});
```

## Definition Functions
```javascript
// shirt.js
define(function(){
  // do setup work here
  console.log('init...');

  return {
    color: "black",
    size: "unisize"
  }
});

// app.js
define(function (require) {
    var shirt = require('shirt'); // 立即执行
});
```

## Definition Functions with Dependencies
```javascript
// shirt.js
define(["./cart", "./inventory"], function(cart, inventory) {
    return {
        color: "blue",
        size: "large",
        addToCart: function() {
            inventory.decrement(this);
            cart.add(this);
        }
    }
});
```

## Define a Module as a Function
```javascript
define(["my/cart", "my/inventory"], function(cart, inventory) {
    //return a function to define "foo/title".
    //It gets or sets the window title.
    return function(title) {
        return title ? (window.title = title) :
            inventory.storeName + ' ' + cart.name;
        }
    }
);
```
# Tips
- One module per file:
- Relative module names inside define(): 
- Relative module names are relative to other names, not paths:
- Generate URLs relative to module:
- Console debugging:

> https://requirejs.org/docs/api.html#modulenotes
