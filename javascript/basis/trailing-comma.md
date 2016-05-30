在ES5中Array和Object字面量允许末尾逗号，ES3不允许（包括IE8及更低版本浏览器）。

### 数组
末尾的逗号会被忽略
```javascript
var arr = [1, 2,];
console.log(arr); // [1, 2]
```

非末尾的逗号会创建新项
```javascript
var arr1 = [, 1, , 2];
var arr2 = [,,,];
console.log(arr1); // [undefined, 1, undefined, 2]
console.log(arr2); // [undefined, undefined, undefined]
```

### 对象字面量
末尾的逗号会被忽略
```javascript
var obj = {
  name: 'John',
  age: 20,
};
console.log(obj); // {name: "John", age: 20}
```
