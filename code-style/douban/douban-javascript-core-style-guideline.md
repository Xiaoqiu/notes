Douban Javascript Core Style Guideline
===================

> 原地址：https://docs.google.com/document/pub?id=17ICSeE4Qd04-1U-pphmKCAmfgJGEVjqDellbu4oAiqU

1. Javascript代码应符合Douban-JSLint检验标准
-------------------
 * 1-1. 语句必须都有分号结尾，除了for, function, if, switch, try, while
 * 1-2. 只有长语句可以考虑断行，如：
 
```javascript
TEMPL_SONGLIST.replace('{TABLE}', da['results'])
  .replace('{PREV_NUM}', prev)
  .replace('{NEXT_NUM}', next)
  .replace('{CURRENT_NUM}', current)
  .replace('{TOTAL_NUM}', da.page_total);
```

为了避免和JSLint的检验机制冲突，“.”或“＋”这类操作符放在行尾，上面代码应改为：

```javascript
TEMPL_SONGLIST.replace('{TABLE}', da['results']).
  replace('{PREV_NUM}', prev).
  replace('{NEXT_NUM}', next).
  replace('{CURRENT_NUM}', current).
  replace('{TOTAL_NUM}', da.page_total);
```

 * 1-3. 避免额外的逗号。如：var arr = [1,2,3,];
 * 1-4. 所有的循环体和判断体都需要用"{}"括起来。如：
 
错：

```javascript
if (condition)
  statement;
```

或

```javascript
if (condition) statement;
```

对:

```javascript
if (condition) {
  statement;
}
```

或

```javascript
if (condition) { statement; }
```

 * 1-5. for-in循环体中必须用hasOwnProperty方法检查成员是否为自身成员。避免来自原型链上的污染。
 * 1-6. 变量声明。变量声明应放在function的最上面。避免使用未声明的变量。
 
错：

```javascript
if (n > 0) {
  var isvalid = true;
} 
```

对：

```javascript
var isvalid;
if (n > 0) {
  isvalid = true;
} 
```

 * 1-7. 不要使用with, void, eval。
 * 1-8. 使用严格的条件判断符。用===代替==，用!==代替!=。
 * 1-9. 下面类型的对象不建议用new构造：new Number, new String, new Boolean, new Object(用{}代替), new Array(用[]代替)。
 * 1-10. 引用对象成员用obj.prop1代替obj[“prop1”]，除非属性名是变量。
 
> 注：Douban-JSLint是定制过的JSLint  

> 注：如果模块代码中，使用其它全局变量想跳过JSLint的检查，可以在该文件中加入/*global*/声明，如： /*global alert: true, console: true, top: true, setTimeout: true */

2. Javascript命名规则
-------------------
 * 2-1. 构造器的首字母大写。如：
 
```javascript
function Dialog (config) {
  statement;
}

var dlg = new Dialog({...});
```

 * 2-2. 对象的属性或方法名采用小驼峰式(lower camel-case)，如"init", "bindEvent", "updatePosition"：
 
```javascript
Dialog.prototype = {
  init: function () {},
  bindEvent: function () {},
  updatePosition: function () {}
  ...
};
```
 * 2-3. 私有变量名用下划线开头。如："_current", "_defaultConfig"
 * 2-4. 常量名全部大写，单词间用下划线分隔。如：“CSS_BTN_CLOSE”, "TXT_LOADING"
 * 2-5. 变量名的前缀：

| Prefix            | Element                     | Example                          |
| ----------------- | --------------------------- | -------------------------------- |
| n                 | integer                     | nVariableName                    |
| i,j,k,m,n, etc. * | integer as counter/iterator | (for i=0; i<=oArray.length; i++) |
| s                 | string                      | sVariableName                    |
| o                 | object                      | oObjectName                      |
| is, can, has      | boolean                     | [Boolean name]ConditionName      |
| event method      | event attachment            | [event type]_MethodName          |
| get               | accessor method             | getMethodName                    |
| set               | accessor method             | setMethodName                    |

> Note: Only a counter/iterator should use a single-letter designation.

3. 代码格式化要求
-------------------
 * 3-1. 语句中的必要空格和缩进
 * 3-1-1. 用来包含语句的"()"前后需要跟空格，诸如： if / for / while / switch ( statements ) { … } 等
 * 3-1-2. "="前后需要跟空格
 * 3-1-3. 数组成员间的","后面需要跟空格
 
不好：

```javascript
for (t in selected) { if (!hash[t]) deselect(t) }
```

好：

```javascript
for ( t in selected ) { 
  if ( !hash[t] ) {
    deselect(t); 
  }
}
```

 * 3-2. 长语句采用断行:
 
不好：

```javascript
TEMPL_SONGLIST.replace('{TABLE}', da['results']).replace('{PREV_NUM}', prev).replace('{NEXT_NUM}', next).replace('{CURRENT_NUM}', current).replace('{TOTAL_NUM}', da.page_total);
```

好：

```javascript
TEMPL_SONGLIST.replace('{TABLE}', da['results']).
  replace('{PREV_NUM}', prev).
  replace('{NEXT_NUM}', next).
  replace('{CURRENT_NUM}', current).
  replace('{TOTAL_NUM}', da.page_total);
```

 * 3-3. 格式化对象参数：

不好：

```javascript
embedSWF(id, { url: '/swf/player30792.swf?url=' + el.href, width: 261, height: 30, params: { wmode:'transparent' }, attributes: { id: "player-sample" + i, name: "player-sample" + i }});
```

好：

```javascript
embedSWF(id, {
  url: '/swf/player30792.swf?url=' + el.href, 
  width: 261,
  height: 30,
  params: { wmode:'transparent' },
  attributes: {
    id: "player-sample" + i,
    name: "player-sample" + i
  }
});
```

相关工具
-------------------
 * [Douban-JSLint](https://github.com/kejun/Douban-JSLint)
 * [Closure Linter](https://developers.google.com/closure/)
 
相关推荐
-------------------
 * [ouglas Crockford: Code Conventions for the JavaScript Programming Language](http://javascript.crockford.com/code.html)
 * [Google JavaScript Style Guide](https://google.github.io/styleguide/javascriptguide.xml)
 * [JQuery Core Style Guidelines](https://contribute.jquery.org/style-guide/js/)
 
更新记录：
-------------------
> 2011/2/25 - 添加Douban-JSLint

> 2010/11/17 - 发布


