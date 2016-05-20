# `new` 操作符

## 使用 `new` 操作符，创建实例的过程
1. 创建一个空对象
2. 将空对象的 `__proto__` 指向构造函数的 `prototype` 对象
3. 修改构造函数的 `this` 指向，替换成新建的空对象
4. 返回`this`引用的对象或者其他返回值

第4步的判断过程
如果构造函数没有return，则默认返回this引用的对象。
如果构造函数有return， 1)返回值是基本类型，则舍弃返回值，返回this引用的对象；2)返回值是引用类型，则返回该返回值。

## 创建实例的过程的代码解释
```javascript
function Foo(){}

// with new operator
var foo = new Foo(arg1, arg2);

// what does the new operator do
function _new(Foo, arg1, arg2) {
  var obj = {};
  obj.__proto__ = Foo.prototype;
  var result = Foo.call(obj, arg1, arg2),
  return result && typeof result === 'object' ? result : obj;
}

var foo = _new(Foo, arg1, arg2);
```

## 使用 `new` 操作符的注意点
1. 执行构造函数时，可以省略括号
```javascript
var app = new App();
var app = new App;
```

2. 忘记使用new操作符，构造函数中的变量变成全局变量
解决方法1: 在构造函数内部使用严格模式 "use strict"。
解决方法2: 在构造函数内部使用instanceof判断this是否是函数的实例。


## Reference
> - [new operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
> - [13.2.2 Construct](http://www.ecma-international.org/ecma-262/5.1/#sec-13.2.2)
> - [javascript中，new操作符的工作原理是什么?](https://www.zhihu.com/question/36440948)
> - [JS中使用new操作符,函数里面到底发生了什么?](http://zhenghaoju700.blog.163.com/blog/static/13585951820146271446717/)
> - [JS中new到底发生了什么](http://warjiang.github.io/devcat/2016/05/12/JS中new到底发生了什么/)
