## Usage
改变函数执行时的上下文(context)，即改变this的指向。

## Examples

借用其他对象的方法
### Example 1
类型检测
```javascript
var date = new Date();
// 修改Object.prototype.toString函数执行时的上下文
Object.prototype.toString.call(date); // "[object Date]"
```

### Example 2
操作类数组对象
```javascript
var arrayLikeObj = {
	0: 'a',
	1: 'b',
	2: 'c',
	length: 3
};

// arrayLikeObj.push('d'); // 报错: arrayLikeObj.push is not a function
// 修改Array.prototype.push函数执行时的上下文
Array.prototype.push.call(arrayLikeObj, 'd');
console.log(arrayLikeObj); // {0: "a", 1: "b", 2: "c", 3: "d", length: 4}
```

### Example 3
求数组中最大值/最小值
```javascript
var array = [1, 67, 23, 5, 16, -7, 53, 12];
var max = Math.max.apply(null, array); // 67
var min = Math.min.apply(null, array); // -7
```

### Example 4
字符串逆序
```javascript
var str = 'abcdefg';
var reverse = Array.prototype.reverse.call(str.split('')).join(''); // "gfedcba"
```

### Example 5
```javascript
// var Hachi =
var Dog = {};
Dog.prototype.bark = function(){

}

var Akita = {};
Akita.__prpto__ =
```

事件绑定
怎么利用call、apply来求一个数组中最大或者最小值
如何利用call、apply来做继承
apply、call、bind的区别和主要应用场景

## Syntax
```javascript
fun.call(thisArg[, arg1[, arg2[, ...]]]) // an argument list
fun.apply(thisArg, [argsArray]) // an array of arguments
```

## Reference
> - [JavaScript 中使用 Call 或 Apply 扩展的好处是什么？](https://www.v2ex.com/t/252790)
> - [深入浅出 妙用Javascript中apply、call、bind](http://www.cnblogs.com/coco1s/p/4833199.html)
> - [深入浅出 妙用Javascript中apply、call、bind](https://github.com/chokcoco/apply-call-bind/tree/master)
> - [js中call、apply、bind那些事](http://qianlongo.github.io/2016/04/26/js中call、apply、bind那些事/)
> - [理解js中call,apply,caller,callee的区别](http://xuyuan923.github.io/2015/01/24/理解js中call,apply,bind,caller,callee的区别/)
> - [快速理解JavaScript中apply()和call()的用法和用途](https://segmentfault.com/a/1190000004581945)
> - [JS核心系列：浅谈 call apply 与 bind](http://www.cnblogs.com/onepixel/p/5143863.html)
