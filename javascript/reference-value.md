## 对引用类型值的操作
```javascript
var arr = [1, 2, 3, 4, 5];
var newArr = arr;

var delArr = newArr.splice(2, 2);
console.log(delArr); // [3, 4]
console.log(newArr); // [1, 2, 5]
console.log(arr); // [1, 2, 5], 删除newArr中的项目, 同时也会修改原数组arr

newArr = [3, 4, 5];
console.log(newArr); // [3, 4, 5]
console.log(arr); // [1, 2, 5], 但如果对newArr进行复制操作, 则不会影响到原数组arr
```
