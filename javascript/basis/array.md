# Array

## 方法

### ES1
- 转换
 - [join](#join)
- 排序
 - [reverse](#reverse)
 - [sort](#sort)

### ES3
- 栈操作
 - [push](#push)
 - [pop](#pop)
- 队列操作
 - [shift](#shift)
 - [unshift](#unshift)
- 数组操作
 - [contat](#contat)
 - [slice](#slice) 浅拷贝原数组中的一部分创建新数组
 - [splice](#splice) 向数组中删除已有元素或者增加新元素

### ES5
- 类方法
 - [Array.isArray]()
- 位置
 - [indexOf](#indexOf)
 - [lastIndexOf](#lastIndexOf)
- 迭代
 - [forEach](#foreach) 遍历
 - [map](#map) 映射
 - [filter]()
 - [every]()
 - [some]()
- 归并
 - [reduce]()
 - [reduceRight]()

### ES6
- 类方法
 - [Array.from](#Array.from)
 - [Array.of](#Array.of)
- 原型方法
 - [copyWithin]()
 - [fill]()
 - [find]()
 - [findIndex]()
 - [includes]()
 - [entries](#entries)
 - [keys]()
 - [values]()

#### join
```javascript
// 多维数组
var arr = [1, [2, [3, [4]], 5]];
console.log(arr.join()); // "1,2,3,4,5"
```

#### reverse
```javascript
var arr = ['one', 'two', 'three'];
arr.reverse();
console.log(arr); // ['three', 'two', 'one']
```

#### sort
```javascript
var items = [{date: '2015-12-16T04:00:09.000Z'},
              {date: '2016-01-01T04:00:09.000Z'},
              {date: '2015-11-13T04:00:09.000Z'},
              {date: '2014-11-16T04:00:09.000Z'},
              {date: '2015-11-29T04:00:09.000Z'},
              {date: '2015-11-30T04:00:09.000Z'}];
items.sort(function (a, b) {
  if (a.date > b.date) {
    return 1;
  }
  if (a.date < b.date) {
    return -1;
  }
  return 0;
});
console.log(items);
```

#### forEach
用于遍历数组，没有返回值
```javascript
var numbers = [4, 9, 16, 25];

numbers.forEach(function (number) {
	console.log(number);
});

numbers.forEach(function (number, index) {
	console.log(index, number);
});

var newNumbers = numbers.forEach(function (number) {
	return number * 2;
});

console.log(newNumbers); // undefined
```

#### map
数组映射，会返回一个新的数组
```javascript
var numbers = [4, 9, 16, 25];

numbers.map(function (number) {
	console.log(number);
});

numbers.map(function (number, index) {
	console.log(index, number);
});

var newNumbers = numbers.map(function (number) {
	return number * 2;
});

console.log(newNumbers); // [8, 19, 32, 50]

var stringArray = ['1', '2', '3', '4'];
var numArray = stringArray.map(el){
  return parseInt(el);
};
// stringArray.map(parseInt); // [1, NaN, NaN]
// stringArray.map((s)=>(parseInt(el)); // [1, 2, 3, 4]

// ES6 arrow function
numbers.map((number) => number * 2)

var roots = numbers.map(Math.sqrt);
console.log(roots);
```

#### contat
```javascript
var num1 = [1, 2, 3];
var num2 = 4;
var num3 = [5, 6, 7];
var nums = num1.concat(num2, num3);
console.log(nums); // [1, 2, 3, 4, 5, 6, 7]
```

#### splice
```javascript
var numbers = [4, 9, 16, 25];
var startIndex = 0;
var deleteCount = 1;
var removed = numbers.splice(startIndex, deleteCount, 1, 2, 3, 4);
console.log(removed); // [4]
console.log(numbers); // [1, 2, 3, 4, 9, 16, 25]
```

#### entries
```javascript
var arr = ['a', 'b', 'c'];
var eArr = arr.entries();

console.log(eArr.next().value); // [0, 'a']
console.log(eArr.next().value); // [1, 'b']
console.log(eArr.next().value); // [2, 'c']
```

## 判断数组类型

### 1.
```javascript
variable.constructor === Array
```

### 2.
```javascript
variable instanceof Array
```

### 3.
```javascript
Array.isArray(variable)
```

### 4.
```javascript
Object.prototype.toString.call(variable) === '[object Array]'
```

## Reference
> - [Array - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
> - [Array.of Function - MSDN](https://msdn.microsoft.com/en-us/library/dn858232(v=vs.94).aspx)
> - [ES5中新增的Array方法详细说明](http://www.zhangxinxu.com/wordpress/2013/04/es5新增数组方法/), 张鑫旭
> - [JavaScript学习笔记：ES6数组方法](http://www.w3cplus.com/javascript/es6-array-methods.html)
> - [如何形象地解释 JavaScript 中 map、foreach、reduce 间的区别？](https://www.zhihu.com/question/24927450)
