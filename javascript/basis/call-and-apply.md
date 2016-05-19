## Usage
改变函数执行时的上下文(context)，即改变this的指向。

## Examples

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
事件绑定

## Syntax
```javascript
fun.call(thisArg[, arg1[, arg2[, ...]]]) // an argument list
fun.apply(thisArg, [argsArray]) // an array of arguments
```
