# `new` 操作符

## 使用 `new` 操作符，创建实例的过程
1. 创建一个空对象
2. 将空对象的 `__proto__` 指向构造函数的 `prototype` 对象
3. 修改构造函数的 `this` 指向，替换成新建的对象
4. 返回新建的对象或者构造函数中指定的对象(如果返回值是基本类型，会被舍弃)

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

## ECMAScript 5.1 规范中的描述
```
When the [[Construct]] internal method for a Function object F is called with a possibly empty list of arguments, the following steps are taken:

1. Let obj be a newly created native ECMAScript object.
2. Set all the internal methods of obj as specified in 8.12.
3. Set the [[Class]] internal property of obj to "Object".
4. Set the [[Extensible]] internal property of obj to true.
5. Let proto be the value of calling the [[Get]] internal property of F with argument "prototype".
6. If Type(proto) is Object, set the [[Prototype]] internal property of obj to proto.
7. If Type(proto) is not Object, set the [[Prototype]] internal property of obj to the standard built-in Object prototype object as described in 15.2.4.
8. Let result be the result of calling the [[Call]] internal property of F, providing obj as the this value and providing the argument list passed into [[Construct]] as args.
9. If Type(result) is Object then return result.
10. Return obj.
```

## 使用 `new` 操作符的注意点
1. 执行构造函数时，可以省略括号
```javascript
var app = new App();
var app = new App;
```

2. 忘记使用new操作符，构造函数中的变量变成全局变量
- 解决方法1: 在构造函数内部使用严格模式 `"use strict"`。
- 解决方法2: 在构造函数内部使用 `instanceof` 判断 `this` 是否是函数的实例。

## Reference
> - [new operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
> - [13.2.2 Construct](http://www.ecma-international.org/ecma-262/5.1/#sec-13.2.2)
> - [javascript中，new操作符的工作原理是什么?](https://www.zhihu.com/question/36440948)
> - [JS中使用new操作符,函数里面到底发生了什么?](http://zhenghaoju700.blog.163.com/blog/static/13585951820146271446717/)
> - [JS中new到底发生了什么](http://warjiang.github.io/devcat/2016/05/12/JS中new到底发生了什么/)
