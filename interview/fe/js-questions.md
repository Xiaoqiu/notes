## 1. `1 + 2 + "3" + 4 + 5` 的结果？
"3345"。两个考点：表达式的执行顺序和`+`操作符。

## 2. JavaScript的基本类型
Undefined, Null, Boolean, Number, Symbol, String

## 3. 事件是如何在 DOM 中传递的？（描述JS中的事件流）
事件捕获（从window到具体元素逐级捕获） -> 目标 -> 事件冒泡（从具体元素逐级向上冒泡直到window）

## 4. 列出你知道的在不同页面间共享数据的方式

## 5. `9 * 2.013 === 18.117` 的值是多少？为什么？
false。JavaScript采用了IEEE-745浮点数表示法，可以精确表示1/2, 1/4, 1/8，但无法精确表示1/10, 1/100等。

## 6. `isNaN(Infinity)` 的结果？
false。

## 7. 请说明什么是闭包，使用闭包有什么注意事项？


## 8. 若某浏览器的数组对象不支持sort排序方法，手动实现一个sort方法。
要求：sort([5, 100, 6, 3, -12]) 返回 [-12, 3, 5, 6, 100]

## 9. 写一段代码，限制用户向textarea元素输入的字符数量不超过140个。

## 10. 事件委托的原理以及优缺点

## 11. 用代码实现事件委托，要求兼容浏览器

## 12. 用JS实现给数字添加千位分隔符（100000000 -> "100,000,000"）
(10000000000000).toLocaleString('en')
('10000000000000').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
('10000000000000').replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
str.replace(/\d{1,3}(?=(\d{3})+$)/g, function(s){
    return s+','
});

## 13. 如何实现类和继承？
```javascript
// 通过构造函数来模拟类
function Person(name) {
  this.name = name;
}

// 子类
function Man(name) {
  // 调用父类构造函数
  Person.call(this, name);
}

// 继承父类原型
Man.prototype = Object.create(Person);
// 构造函数指向自身
Man.prototype.constructor = Man;
```

## 14. Null和Undefined的区别？

## 15. isNaN()的作用

## 16. setTimeout和setInterval

## 17. 实现数组去重
```javascript
function unique(arr) {
  var hash = {};
  var res  = [];
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    var key  = typeof(item) + item;
    if (!hash[key]) {
      hash[key] = true;
      res.push(item);
    }
  }
  return res;
}
```

## 18. AMD CMD 模块化JS

## 19. 重绘与回流及相关性能

## 20. dom的操作，删除，移动，复制，插入，前插后插，指定插一类

## 21. 简述JavaScript延迟加载的方式

## 22. promise的实现

## 23. 实现自定义事件（bind和trigger方法）

## 24. 事件如何派发也就是事件广播（dispatchEvent）？
`dispatchEvent`方法


## 25. 数组拍平
```javascript
function flatten(arr) {
	var result = arr.join().split(',');
	result = result.map(function (element) {
		return parseInt(element ,10);
	});
	return result;
}

var arr = [1, [2, [3, [4]], 5]];
console.log(flatten(arr)); // [1, 2, 3, 4, 5]
```

## 26. 实现 clone() 方法，实现对象（包含数组）深拷贝
```javascript
function clone(obj) {
  var isArray     = Object.prototype.toString.call(obj) === "[object Array]";
  var isPrimitive = obj === null || typeof obj !== 'object';
  var copy;
  if (isPrimitive) {
    return obj;
  }
  if (isArray) {
    return obj.slice(0);
  }
  copy = {};
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        copy[prop] = clone(obj[prop]);
    }
  }
  return copy;
}
```

## 28. JS如何实现多态

## 29. top、offsetTop、clientTop、scrollTop的区别
- [几个比较难记/易混的DOM接口](https://github.com/renaesop/blog/issues/3)

## 30. 阅读过哪些JS库源代码

## 31. 使用 RequireJS 循环引用

## 32. 实现 trim() 方法，清除字符串前后的空格
```javascript
function trim(str) {
	return str.replace(/^\s+/, "").replace(/\s+$/, "");
}
var str = trim("   test string   ");
console.log(str);
```
