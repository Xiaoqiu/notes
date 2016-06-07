```javascript
console.time("$('a b')");
for (var i = 0;i<100000;i++){
  $('#list .item');
}
console.timeEnd("$('a b')");

console.time("$('a').find('b')");
for (var i = 0;i<100000;i++){
  $('#list').find('.item')
}
console.timeEnd("$('a').find('b')");
```

`$('a').find('b')` 会比 `$('a b')` 效率更高

jQuery的find()方法会调用浏览器原生的API方法（getElementById，getElementByName，getElementByTagName等）
