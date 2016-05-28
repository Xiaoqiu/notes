```javascript
var a = {n: 1}
var b = a;
a.x = a = {n: 2};

console.log(a.x); // undefined
console.log(b.x); // {n: 2}
```

这段代码涉及到的JS知识点  
- 从右往左运算
- `.` 操作符的优先级高于 `=`
- 对象的指针

`a.x` 的值是 `undefined` ，而不是预料中的 `{n: 2}`，原因在于：  
执行 `a.x = a = {n: 2};` 时，`a` 和 `a.x` 指向 `{n: 2}`，
而再次执行 `a.x` 时，对 `a` 对象重新取值，`{n: 2}.x=undefined`。

![js-pointer.png]

## Reference
> - [javascript 连等赋值问题](https://segmentfault.com/q/1010000002637728)
> - [写了10年Javascript未必全了解的连续赋值运算](http://yanhaijing.com/javascript/2012/04/05/javascript-continuous-assignment-operator/)
