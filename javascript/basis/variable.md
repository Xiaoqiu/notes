# JavaScript 变量类型

## 一、变量类型
- primitive value (原始类型)
- reference value (引用类型)
 - primitive wrapper value (基本包装类型)

### 5种原始类型 -> 按值访问
Undefined, Null, Boolean, Number, String, Symbol (ES6)

### 引用类型 -> 按引用访问
Object, Array, Date, RegExp, Function, Error; 基本包装类型 (Boolean, Number, String); Map, Set (ES6)

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

## 二、类型检测
- `typeof`: 适合检测原始类型 (undefined, boolean, number, string, symbol)和function; 其余如null (历史遗留问题, 可直接使用===判断)、[]都是object
- `instanceof`: 适合检测引用类型, 判断一个对象是否为某个构造函数的实例 (如果是多个构造函数的实例, 都返回true), 不能跨iframe
- `obj.constructor`: null, undefined无效, 不能跨iframe, 且constructor易被修改
- `Object.prototype.toString.call()`: 基本能检测出所有的类型, (Array, Boolean, Date, Error, Function, Math, Number, Object, RegExp, String, Null...), IE6下undefined, null均为Object

```javascript
typeof 'hello' === 'string' // true
typeof NaN === 'number' // true
new Object() instanceof Object // true
Object.prototype.toString.call('hello') === '[object String]' // true
'hello'.constructor ==== '[object String]' // true
```

> - [Primitive value vs Reference value](https://stackoverflow.com/questions/13266616/primitive-value-vs-reference-value)
> - [JavaScript中“基本类型”之争](http://www.cnblogs.com/snandy/archive/2013/01/02/2841899.html)
