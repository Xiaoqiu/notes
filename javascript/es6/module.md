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
暂时都不支持，需要使用Babel转译。  

Node.js 对 ES6 的支持情况: [ES6 in Node.js](https://nodejs.org/en/docs/es6/)

## Issues
使用`--harmony_modules`参数来执行代码
```shell
node --harmony_modules math-demo.js
```
报｀SyntaxError: Unexpected token import｀错误，原来该特性还在开发中……
`shipping`为默认启用的特性, `staged`为需要使用`--harmony`参数开启的特性, `in progress`表示正在开发中
```shell
➜  ~ node --v8-options | grep 'harmony'     
  --es_staging (enable all completed harmony features)
  --harmony (enable all completed harmony features)
  --harmony_shipping (enable all shipped harmony fetaures)
  --harmony_modules (enable "harmony modules" (in progress))
  --harmony_regexps (enable "harmony regular expression extensions" (in progress))
  --harmony_proxies (enable "harmony proxies" (in progress))
  --harmony_sloppy_function (enable "harmony sloppy function block scoping" (in progress))
  --harmony_sloppy_let (enable "harmony let in sloppy mode" (in progress))
  --harmony_unicode_regexps (enable "harmony unicode regexps" (in progress))
  --harmony_reflect (enable "harmony Reflect API" (in progress))
  --harmony_destructuring (enable "harmony destructuring" (in progress))
  --harmony_default_parameters (enable "harmony default parameters" (in progress))
  --harmony_sharedarraybuffer (enable "harmony sharedarraybuffer" (in progress))
  --harmony_atomics (enable "harmony atomics" (in progress))
  --harmony_simd (enable "harmony simd" (in progress))
  --harmony_array_includes (enable "harmony Array.prototype.includes")
  --harmony_tostring (enable "harmony toString")
  --harmony_concat_spreadable (enable "harmony isConcatSpreadable")
  --harmony_rest_parameters (enable "harmony rest parameters")
  --harmony_sloppy (enable "harmony features in sloppy mode")
  --harmony_arrow_functions (enable "harmony arrow functions")
  --harmony_new_target (enable "harmony new.target")
  --harmony_object_observe (enable "harmony Object.observe")
  --harmony_spreadcalls (enable "harmony spread-calls")
  --harmony_spread_arrays (enable "harmony spread in array literals")
  --harmony_object (enable "harmony Object methods")
```
