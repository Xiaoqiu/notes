ES5
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

ES6
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
