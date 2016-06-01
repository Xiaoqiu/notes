
## 类

### ES5
```javascript
// 构造函数
function Point(x, y) {
    this.x = x;
    this.y = y;
}

// 方法需要定义在构造函数的prototype上
Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
};

var point = new Point(2, 3);
console.log(point.toString());
```

### ES6
```javascript
// 类
class Point {
    // 构造方法
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // 自定义的方法
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

var point = new Point(2, 3);
console.log(point.toString());
```

## 继承

### ES5
```javascript
function PointColor(x, y, color) {
  Point.apply(this, x, arguments);
  this.color = color;
}

PointColor.prototype = Object.create(Point.prototype);
PointColor.prototype.constructor = PointColor;
PointColor.prototype.toString = function () {
  return this.color + ' ' + Point.prototype.toString.call(this);
}
```

### ES6
```javascript
class PointColor extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }

    toString() {
        return this.color + ' ' + super.toString();
    }
}
```

## Reference
> - [3 ways to define a JavaScript class](http://www.phpied.com/3-ways-to-define-a-javascript-class/)
