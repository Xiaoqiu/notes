> An object is a collection of properties and has a single prototype object. -- from ECMAScript Standard

有这样一个 Object
```javascript
var obj = {
    "first": "first",
    "2": "2",
    "34": "34",
    "1": "1",
    "second": "second",
    "third": "third"
};
```
遍历输出其所有的property
```javascript
for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        console.log(prop);
    }
}
```
预计的输出结果：
```
first
2
34
1
second
third
```
实际输出结果：
```
1
2
34
first
second
third
```

Object的property并没有保留原来的顺序，数值型property被进行了重新排序。

 V8(Chrome, Node.js)以及 Opera, Safari, Firefox 等浏览器在遍历对象的property时, 对于数值型的property, 都会重新排序。

 解决办法是可以直接转成二维数组再操作。

## Reference
- https://stackoverflow.com/questions/1069666/sorting-javascript-object-by-property-value
- https://bugs.chromium.org/p/v8/issues/detail?id=164
- https://esdiscuss.org/topic/iteration-order-for-object
