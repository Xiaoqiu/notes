# ES3

# ES5
- [map](#map)
- [forEach](#forEach)


## map
```javascript
var numbers = [4, 9, 16, 25];

numbers.map(function (number) {
	console.log(number);
});

numbers.map(function (number, index) {
	console.log(index, number);
});

numbers.map(function (number) {
	return number * 2;
});

// ES6 arrow function
numbers.map((number) => number * 2)

var roots = numbers.map(Math.sqrt);
console.log(roots);
```

## forEach
```javascript
var numbers = [4, 9, 16, 25];

numbers.forEach(function (number) {
	console.log(number);
});

numbers.forEach(function (number, index) {
	console.log(index, number);
});

numbers.forEach(function (number) {
	return number * 2;
});
```
