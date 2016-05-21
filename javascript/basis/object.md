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
 - Object.keys
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

## Other

### `Class.method` vs. `Class.prototype.method`
- `Class.method`: 静态方法
- `Class.prototype.method`: 实例方法

### `prototype`
所有的对象都继承了 `Object.prototype` 的方法和属性。

`Object.prototype.constructor` 指明了创建该对象的函数。

### `__proto__`
`Object.prototype.__proto__` 指向实例化该对象的构造函数的 `prototype`。
本身不属于ECMAScript规范，应该使用 `Object.getPrototypeOf` 方法代替。

```javascript
function A(name) {
  this.name = name;
}
var a = new A('John');
console.log(a.__proto__ === A.prototype); // true
```

## Reference
> - [深入理解javascript原型继承](https://github.com/norfish/blog/wiki/深入理解JavaScrip面向对象和原型继承)
> - [从本质认识JavaScript的原型继承和类继承](https://www.h5jun.com/post/inherits)
> - [理解JavaScript的原型链和继承](https://blog.oyanglul.us/javascript/understand-prototype.html)
> - [从__proto__和prototype来深入理解JS对象和原型链](https://github.com/creeperyang/blog/issues/9)
> - [理解 JavaScript 中的原型](https://github.com/huangtengfei/blog/issues/11)
> - [图解Javascript原型链](http://blog.rainy.im/2015/07/20/prototype-chain-in-js/)
> - [继承和原型链](https://github.com/fwon/blog/issues/8)
> - [理解js原型和原型链](http://blog.csdn.net/qq_21157805/article/details/50538805)
> - [Javascript继承-原型的陷阱](http://yanhaijing.com/javascript/2013/08/23/javascript-inheritance-how-to-shoot-yourself-in-the-foot-with-prototypes/)
> - [JavaScript 原型理解与创建对象应用](http://yujiangshui.com/javascript-prototype-and-create-object/)
> - [JavaScript 继承简单理解与实现](http://yujiangshui.com/javascript-inheritance/)
> - [javascript类的写法](http://hawx1993.github.io/2015/12/11/js-class/)
> - [JavaScript继承方式详解](http://hawx1993.github.io/2015/12/11/js-extends/)
> - [javascript的原型和继承](http://www.cnblogs.com/lvdabao/p/3502944.html)
