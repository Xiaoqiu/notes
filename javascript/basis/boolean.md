JavaScript中假值包括:
- `false`
- `0` / `-0`
- `NaN`
- `null` / `undefined`
- `""`（空字符串）

这些值会被转换为`false`，其余包括对象会被转换为`true`。

```javascript
/*
* If value is omitted or is 0, -0, null, false, NaN, undefined, or the
* empty string (""), the object has an initial value of false. All other
* values, including any object or the string "false", create an object
* with an initial value of true.
*/

var x = Boolean(expression);     // preferred
var x = new Boolean(expression); // don't use

console.log(Boolean()); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean('')); // false
console.log(Boolean('a')); // true
console.log(Boolean('false')); // true
console.log(Boolean(false)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(Infinity)); // true
console.log(Boolean(-1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean([]); // true
console.log(Boolean({})); // true

var text = '';

if(text){
	console.log(true);
}

/*
 *  new Boolean(false) 是 Boolean 对象，判断为 true
 *  Boolean(false) 是 Boolean 类型的值，为 false
 */
var x = new Boolean(false);
var y = Boolean(false);

if (x) {
	console.log(true);
}
if (y) {
	console.log(true);
}

```
