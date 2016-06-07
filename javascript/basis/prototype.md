
```javascript
function A(name) {
    this.name = name;
}

console.dir(A); // 只有函数才有prototype属性
var a = new A('John');  // 所有的对象都有__proto__属性
console.dir(a);

// __proto__ 是原型
// prototype 是函数默认的一个属性,它指向一个对象,这个对象的constructor属性指向函数本身

var o = new Object(); // 对象有__proto__属性
console.dir(o);

var f = function () {}; // 函数有prototype属性
console.dir(f);

console.dir(A);
console.dir(A.prototype); // Object
console.log(A.prototype.__proto__); // Object

console.dir(A.__proto__); // function
console.dir(A.__proto__.__proto__); // Object
console.dir(A.__proto__.__proto__.__proto__); // null

console.log(A.prototype.__proto__ === A.__proto__.__proto__); // true
console.log(Object.prototype.__proto__ === null); // true, Object原型的值为null
console.log(Object.getPrototypeOf(A)); // 等同于A.__proto__

console.dir(a.__proto__); // Object
console.dir(a.__proto__.__proto__); //  Object
console.log(a.__proto__ === A.prototype); // true
console.log(a.__proto__.__proto__ === A.__proto__.__proto__); // true
```


## Reference
> - [继承与原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
> - [深入理解javascript原型继承](https://github.com/norfish/blog/issues/2)
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
> - [JavaScript的实例化与继承：请停止使用new关键字](http://www.infoq.com/cn/articles/javascript-instantiation-and-inheritance)
> - [JavaScript实现继承的几种方式](http://www.raychase.net/149)
> - [JavaScript 中继承实现方式归纳](https://github.com/classicemi/blog/issues/10)
> - [javascript oo实现](http://purplebamboo.github.io/2014/07/13/javascript-oo-class/)
> - [谈谈javascript中的prototype与继承](http://www.cnblogs.com/lwzz/archive/2013/03/03/2941743.html)
