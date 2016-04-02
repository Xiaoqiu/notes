## 一、对引用类型值的操作
```javascript
var arr = [1, 2, 3, 4, 5];
var newArr = arr;

var delArr = newArr.splice(2, 2);
console.log(delArr); // [3, 4]
console.log(newArr); // [1, 2, 5]
console.log(arr); // [1, 2, 5], 删除newArr中的元素, 同时也会修改原数组arr

newArr = [3, 4, 5];
console.log(newArr); // [3, 4, 5]
console.log(arr); // [1, 2, 5], 但如果对newArr进行赋值操作, 则不会影响到原数组arr
```

## 二、复制引用类型值
基本方法: 使用for ... in 循环遍历并赋值

### 2.1 复制数组
可以借助slice(), concat()等方法
```javascript
var arr = [1, 2, 3, 4, 5];
var newArr = arr.slice(0); // slice(start,end): 返回数组中指定的元素
console.log(newArr); // [1, 2, 3, 4, 5]
```

### 2.2 复制对象
```javascript
var obj = {
    name: 'foo',
    desc: {
      color: 'red'
    }
};
var newObj = {};
for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        newObj[prop] = obj[prop];
    }
}
console.log(newObj); // { name: 'foo', desc: { color: 'red' } }
newObj['desc'].color = 'green';
console.log(newObj); // { name: 'foo', desc: { color: 'green' } }, 修改第二层属性的值, 同时也会修改原对象
```
上面的复制操作只能复制最外层属性值, 内部属性的值依然会指向原对象, 即`浅拷贝`.




