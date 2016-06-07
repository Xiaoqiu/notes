# Object

## Basic

### ES1
- 原型方法
 - toString
 - valueOf

### ES3
- 原型方法
 - hasOwnProperty 判断是否是自身的属性，而不是来源于继承
 - isPrototypeOf
 - propertyIsEnumerable
 - toLocaleString

### ES5
- 类方法
 - [Object.assign](#assign)
 - [Object.create](#create)
 - [Object.keys](#keys)
 - Object.freeze
 - Object.seal
 - Object.defineProperties
 - Object.defineProperty
 - Object.getOwnPropertyDescriptor
 - Object.getOwnPropertyNames
 - Object.getPrototypeOf
 - Object.isExtensible
 - Object.isFrozen
 - Object.isSealed
 - Object.preventExtensions

### ES6
- 类方法
 - Object.getOwnPropertyNames
 - Object.setPrototypeOf
 - Object.is

### ES7
- 类方法
 - Object.entries
 - Object.values

## Usage

### assign
从源对象复制可枚举变量和自身属性给目标变量（只是一级属性复制，比浅拷贝多深拷贝了一层）。
```javascript
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

### create
继承指定的prototype对象，创建新对象
```javascript
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
```

### keys
```javascript
var obj = {};
Object.keys(obj).length === 0
```

## Other

### `Class.method` vs. `Class.prototype.method`
- `Class.method`: 静态方法
- `Class.prototype.method`: 实例方法

### `prototype`
所有的对象都继承了 `Object.prototype` 的方法和属性。

`Object.prototype.constructor` 指明了创建该对象的函数。

### `__proto__`
`Object.prototype.__proto__` 指向实例化该对象的构造函数的 `prototype` 属性。
本身不属于ECMAScript规范，应该使用 `Object.getPrototypeOf` 方法代替。

```javascript
function A(name) {
  this.name = name;
}
var a = new A('John');
console.log(a.__proto__ === A.prototype); // true
```

```javascript
function A(params) {
	params = params || {};

	for(var key in params){
		Object.defineProperty(this, key, {
			get: function () {
				return params[key];
			},
			enumerable: false
		});
	}
}

var a = new A({
	'x': 'X',
	'y': 'Y',
	'z': 'Z'
});

console.log(a.x); // Z
console.log(a.y); // Z
console.log(a.z); // Z
```

```javascript
var F = function(){};
Object.prototype.a = function(){
  console.log('a');
};
Function.prototype.b = function(){
  console.log('b');
};
var f = new F();
var a = f.a;
var b = f.constructor.b;
```

### `Object.create()` Polyfill 简单实现
```javascript
if (typeof Object.create !== 'function') {
  Object.create = function (proto) {
    var F = function () {};
    F.prototype = proto;
    return new F();
  };
}
```
