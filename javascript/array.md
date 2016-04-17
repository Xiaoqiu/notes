# ES3

# ES5
- [map](#map)
- [forEach](#foreach)


## map
```javascript
数组映射，会返回一个新的数组
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

console.log(newNumbers);
```
