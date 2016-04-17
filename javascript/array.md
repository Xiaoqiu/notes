# ES3

# ES5
- [map](#map)


## map
```javascript
var numbers = [4, 9, 16, 25];

numbers.map(function (number) {
	console.log(number);
});

numbers.map(function (number, index) {
	console.log(index, number);
});

var roots = numbers.map(Math.sqrt);
console.log(roots);
```
