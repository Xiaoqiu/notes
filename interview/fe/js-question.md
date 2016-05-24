## 1. `1 + 2 + "3" + 4 + 5` 的结果？
"3345"。两个考点：表达式的执行顺序和`+`操作符。答案为。

## 2. JavaScript的基本类型
Undefined, Null, Boolean, Number, Symbol, String

## 3. 事件是如何在 DOM 中传递的？

## 4. 列出你知道的在不同页面间共享数据的方式

## 5. `9 * 2.013 === 18.117` 的值是多少？为什么？
false。JavaScript采用了IEEE-745浮点数表示法，可以精确表示1/2, 1/4, 1/8，但无法精确表示1/10, 1/100等。

## 6. `isNaN(Infinity)` 的结果？
false。

## 7. 请说明什么是闭包，使用闭包有什么注意事项？


## 8. 若某浏览器的数组对象不支持sort排序方法，手动实现一个sort方法。
要求：sort([5, 100, 6, 3, -12]) 返回 [-12, 3, 5, 6, 100]
```javascript
function sort(arr) {
  var len = arr.length;
  if (len <= 1) {
      return arr;
  }
  var pivotIndex = Math.floor(len / 2);
  var pivot = arr[pivotIndex];
  var left  = [];
  var right = [];
  for (var i = 0; i < len; i++) {
      if (i !== pivotIndex) {
          if (arr[i] < pivot) {
              left.push(arr[i]);
          } else {
              right.push(arr[i]);
          }
      }
  }
  return (quickSort(left)).concat(pivot, quickSort(right));
}
```
