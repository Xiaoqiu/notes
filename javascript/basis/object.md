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
 - Object.assign
 - Object.create
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
