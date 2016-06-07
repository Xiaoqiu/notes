# 字符串的两种拼接效率比较

```javascript
var i;
var array   = [];
var count     = 10000;
var result1 = '', result2 = '';

console.time('+=');
for (i = 0; i < count; i++) {
  result1 += 'abcdefghijk';
}
console.timeEnd('+=');

console.time('array push');
for (i = 0; i < count; i++) {
  array.push('abcdefghijk');
}
result2 = array.join('');
console.timeEnd('array push');
```
测试结果
Node 中 array push 快  
+=: 3.445ms  
array push: 1.827ms  

Chrome 中 += 快  
+=: 0.911ms  
array push: 2.785ms  

Safari 中 array push 快  
+=: 11.605ms  
array push: 9.388ms  

Firefox 中 += 快  
+=: 12.14ms  
array push: 13.89ms  


通常情况下, array push 要比 += 快，除了 Chrome 加了黑魔法，被特别优化过。

在腾讯的artTemplate模版引擎中，低版本的IE使用array push拼接，其余使用+=。
```javascript
//artTemplate/src/compile.js
var isNewEngine = ''.trim;
var replaces    = isNewEngine
  ? ["$out='';", "$out+=", ";", "$out"]
  : ["$out=[];", "$out.push(", ");", "$out.join('')"];
```
