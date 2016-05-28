# Closures

闭包是引用了自由变量的函数。它由两部分构成：函数，以及创建该函数的环境。环境由闭包创建时在作用域中的任何局部变量组成。

创建闭包时，常常会使用到匿名函数和立即调用函数，它们是完全不同的三个概念。

使用闭包的缺点：空间浪费，内存泄漏，性能消耗

## 普通函数和闭包

```javascript
function normal() {
  var _innerVal = 42;
  return _innerVal;
}

console.log(normal()); // normal()执行完以后，_innerVal会被回收

function withClosure() {
  var _innerVal = 42;
  return function () {
    return _innerVal;
  }
}

var func = withClosure();
console.log(func()); // withClosure()执行完后，依然可以访问到_innerVal，而不是返回undefined，说明_innerVal没有被回收
```

使用闭包可以保留变量

## 闭包的使用场景

### 用闭包模拟私有方法
```javascript
var Counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }   
})();
```

## 使用闭包常见的坑
### 1. 在for循环中使用setTimeout或者绑定事件
猜猜下面的代码打印结果是什么
```javascript
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```
预期结果是打印 0 1 2 3 4，实际上会打印五个5。

这是因为在5次循环后，setTimeout()内部函数执行访问的是同一个i的引用。

修改一下，在每次调用setTimeout()时传入i
```javascript
for (var i = 0; i < 5; i++) {
  setTimeout(function (i) {
    console.log(i); // 0 1 2 3 4
  }(i), 1000);
}
```

或者使用立即调用函数
```javascript
for (var i = 0; i < 5; i++) {
  (function (index) {
    setTimeout(function () {
      console.log(index); // 0 1 2 3 4
    }, 1000);
  })(i);
}
```

## Reference
> - [Closure (computer programming)](https://en.wikipedia.org/wiki/Closure_(computer_programming)), Wikipedia
> - [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures), MDN
> - [Secrets of Javascript Closures](http://www.kryogenix.org/code/browser/secrets-of-javascript-closures/secrets_of_javascript_closures.pdf),Stuart Langridge
> - [ECMA-262-3 in detail. Chapter 6. Closures.](http://dmitrysoshnikov.com/ecmascript/chapter-6-closures/), Dmitry Soshnikov
> - [Javascript Closures](http://jibbering.com/faq/notes/closures/), Jim Ley
> - [学习Javascript闭包（Closure）](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html), 阮一峰
> - [闭包里的自由变量](http://zhuanlan.zhihu.com/browsnet/20658538), 李引证
> - [深入理解javascript原型和闭包（14）——从【自由变量】到【作用域链】](http://www.cnblogs.com/wangfupeng1988/p/3992795.html)
> - [Javascript闭包篇](http://wlog.cn/javascript/javascript-closures.html)
> - [javascript闭包学习总结](http://cuckoosnest.iteye.com/blog/470121)
> - [理解Javascript的闭包](http://coolshell.cn/articles/6731.html), CoolShell
> - [详解js闭包](https://segmentfault.com/a/1190000000652891)
> - [闭包的概念、形式与应用](https://www.ibm.com/developerworks/cn/linux/l-cn-closure/)
> - [详解JavaScript中的函数与闭包](http://www.cnblogs.com/lwzz/archive/2013/04/14/2953117.html)

## Questions
> - [为什么javascript closure(闭包)要叫闭包？](https://www.zhihu.com/question/35177512)
> - [到底什么是闭包？](https://www.zhihu.com/question/34210214)
> - [JavaScript 里的闭包是什么？应用场景有哪些？](https://www.zhihu.com/question/19554716)
> - [怎么更好的理解JS闭包，希望举个例子、还有应用场景？](https://www.zhihu.com/question/31383111)
> - [函数内定义函数产生闭包时, 被保存的是内部函数的用到的自由变量还是内部函数定义时的环境?](https://www.zhihu.com/question/24828761)
> - [How do JavaScript closures work?](https://stackoverflow.com/questions/111102/how-do-javascript-closures-work)
