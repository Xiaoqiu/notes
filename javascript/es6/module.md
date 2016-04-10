# Module

## 1. export 语句
```javascript
// 语法
export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // also var
export let name1 = …, name2 = …, …, nameN; // also var, const

export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
```

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

## 2. import 语句
```javascript
// 语法
import defaultMember from "module-name";
import * as name from "module-name";
import { member } from "module-name";
import { member as alias } from "module-name";
import { member1 , member2 } from "module-name";
import { member1 , member2 as alias2 , [...] } from "module-name";
import defaultMember, { member [ , [...] ] } from "module-name";
import defaultMember, * as name from "module-name";
import "module-name";
```

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

## 3. module 语句
### 3.1 导入模块
```javascript
// 加载所有变量/函数，相当于 import * as math from './math';
module math from './math';
var sum = math.add(1, 2);
var product = math.multiply(2, 3);
```

## 浏览器和Node的支持情况
暂无，需要使用Babel转译。  

Node.js对ES6的支持情况: https://nodejs.org/en/docs/es6/ 
