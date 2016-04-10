# Module

## 1. export
### 1.1 导出变量
```javascript
// 导出单个变量
export var foo = 'foo';
export var bar = 'bar';

// 导出一组变量
var foo = 'foo';
var bar = 'bar';

export {foo, bar};
```
### 1.2 导出函数
```javascript
// 导出函数
export function func () {
  return true;
};

// 导出一组函数
function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

export {add, multiply};

// 重命名
function addTwoNum(x, y) {
    return x + y;
}

function multiplyTwoNum(x, y) {
    return x * y;
}

export {
  addTwoNum as add, // 导出时将addTwoNum重命名为add
  addTwoNum as concat, // 当然，可以重命名多个不同名字
  multiplyTwoNum as multiply
};
```

## 2. import
### 2.1 导入模块
```javascript
import {add, multiply} from './math';

var sum = add(1, 2);
var product = multiply(2, 3);

// 导入时同样可以使用as关键字重命名变量
import {addTwoNum as add} from './math';

// 加载所有变量/函数
import * as math from './math';
var sum = math.add(1, 2);
var product = math.multiply(2, 3);
```

## 3. module
### 3.1 导入模块
```javascript
// 加载所有变量/函数，相当于 import * as math from './math';
module math from './math';
var sum = math.add(1, 2);
var product = math.multiply(2, 3);
```
