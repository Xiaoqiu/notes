# function

## `Function` 构造函数
语法：
```javascript
new Function ([arg1[, arg2[, ...argN]],] functionBody)
```

示例：
```javascript
var adder = new Function('a', 'b', 'return a + b');
adder(2, 6);
```

## 函数语句
语法如下：

```javascript
function functionName(arg1, arg2, ...argN) {
  // statements
}
```

有两个注意点：  
1. 声明一个函数时，函数名不可以省略。  
2. 由于声明提升（hoisting），函数可以在声明之前调用，同时也意味着不可以在后面直接加()调用。

```javascript
hoisted(); // "the function is hoisted"

function hoisted() {
  console.log("the function is hoisted");
}
```

## 函数表达式
语法和函数声明一样，区别在于函数名可以省略（此时称为匿名函数）。

```javascript
// 有名函数，不存在声明提升
var anotherName = function functionName() {
  // statements
}

anotherName(); // 只能通过变量 anotherName 进行调用
functionName(); // ReferenceError: functionName is not defined

// 匿名函数
var anonymousFunction = function() {
  // statements
}
```

### IIFE
IIFE (Immediately Invoked Function Expression) ，即立即调用函数表达式。

> 在JavaScript中，表达式语句不得以 function 或者 { 开头。

所以要构造IIFE，只需要引导解释器此处的function是一个表达式，而不是声明。
```javascript
(function() { })();
(function() { }}());

~function() {}();
!function() {}();
+function() {}();
-function() {}();

void function() {}();

var f = function() {}();
```

## `arguments` property
实参 `arguments` 对象是调用函数时传入的参数，是一个类数组对象。
`arguments` 对象的 `callee` 属性指向函数本身，严格模式下禁止使用。

JavaScript中本身是没有重载的，通过 `arguments` 可以模拟的功能。
```javascript
function add() {
    switch (arguments.length) {
        case 0:
            return 0;
            break;
        case 1:
            return arguments[0];
            break;
        case 2:
            return arguments[0] + arguments[1];
            break;
        default:
            return 0;
    }
}

console.log(add());
console.log(add(1));
console.log(add(1, 2));
```

## `Function` 的实例方法
- ES1
 - Function.prototype.call()
 - Function.prototype.toString()
- ES3
 - Function.prototype.apply()
- ES5
 - Function.prototype.bind()

## Reference
> - [Immediately-Invoked Function Expression (IIFE)](http://benalman.com/news/2010/11/immediately-invoked-function-expression/), Ben Alman
> - [JavaScript 匿名函数有哪几种执行方式?](https://www.zhihu.com/question/20249179)
