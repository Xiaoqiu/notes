# 变量类型
- primitive value (原始类型)
- reference value (引用类型)
 - primitive wrapper value (基本包装类型)

## 5种原始类型 -> 按值访问
Undefined, Null, Boolean, Number, String

## 引用类型 -> 按引用访问
Object, Array, Date, RegExp, Function, 基本包装类型(Boolean, Number, String)

```javascript
// 原始类型
var num1 = 18;
var num2 = num1; // num2与num1相互独立

// 引用类型
var obj1 = new Object();
var obj2 = obj1; // obj2与obj1指向同一个对象

// 基本包装类型
var str = 'hello';
var len = str.length; //会临时创建一个String对象
```

# 类型检测
- typeof: 适合检测原始类型和function, null无效(object, 直接使用===判断)
- instanceof: 适合检测引用类型, 也就是通过构造函数创建的对象
- Object.prototype.toString.call(): 适用于数组
- Object.constructor: null, undefined无效, 并且不可靠, 会被覆盖

```javascript
typeof 'hello' === 'string' // true
new Object() instanceof Object // true
Object.prototype.toString.call('hello') === '[object String]' // true
'hello'.constructor ==== '[object String]' // true
```

> https://stackoverflow.com/questions/13266616/primitive-value-vs-reference-value

