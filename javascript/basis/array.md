# Array

## ES1
- 转换
 - [join](#reverse)
- 排序
 - [reverse](#reverse)
 - [sort](#sort)

## ES3
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

## ES5
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

## ES6
- 类方法
 - [Array.from](#Array.from)
 - [Array.of](#Array.of)
- 原型方法
 - [copyWithin]()
 - [fill]()
 - [find]()
 - [findIndex]()
 - [includes]()
 - [entries]()
 - [keys]()
 - [values]()

## forEach
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

## map
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

// ES6 arrow function
numbers.map((number) => number * 2)

var roots = numbers.map(Math.sqrt);
console.log(roots);
```

## Reference
> - [Array - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
> - [Array.of Function - MSDN](https://msdn.microsoft.com/en-us/library/dn858232(v=vs.94).aspx)
> - [ES5中新增的Array方法详细说明](http://www.zhangxinxu.com/wordpress/2013/04/es5新增数组方法/), 张鑫旭
