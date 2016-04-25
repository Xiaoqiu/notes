# Array

- ES3
 - [slice 浅拷贝原数组中的一部分创建新数组](#slice)
 - [splice 向数组中删除已有元素或者增加新元素](#splice)
- ES5
 - [forEach 遍历](#foreach)
 - [map 映射](#map)
 - [reduce ]()
 - [filter]()
 - [every]()
 - [some]()
- ES6
 - [Array.from()](#Array.from())
 - [Array.of()](#Array.of())

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