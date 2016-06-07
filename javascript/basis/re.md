# RegExp

## Syntax
```javascript
var regex = /pattern/flags; // 使用字面量形式
var regex = new RegExp('pattern', 'flags'); // 使用构造函数
```

### Flags
- **i**: ignore case，不区分大小写模式
- **g**: global match，全局匹配模式
- **m**: multiline，多行模式

### Pattern
- `\d` 匹配0-9之间的任一数字，相当于`[0-9]`。
- `\D` 匹配所有0-9以外的字符，相当于`[^0-9]`。
- `\w` 匹配任意的字母、数字和下划线，相当于`[A-Za-z0-9_]`。
- `\W` 除所有字母、数字和下划线以外的字符，相当于`[^A-Za-z0-9_]`。
- `\s` 匹配空格（包括制表符、空格符、断行符等），相等于`[\t\r\n\v\f]`。
- `\S` 匹配非空格的字符，相当于`[^\t\r\n\v\f]`。
- `\b` 匹配词的边界。
- `\B` 匹配非词边界，即在词的内部。

### Methods
- test(): 返回true或者false
- exec(): 返回null或者数组

### Usage
1. 使用RegExp对象的test()方法
```javascript
var str = 'hello world!';
var regex = /^hello/;
var result = regex.test(str);
console.log(result); // true
```
2. 使用String对象的match()方法（返回null或者数组）
```javascript
var str = 'hello world!';
var regex = /^hello/;
var result = str.match(regex);
console.log(result); // ["hello"]
```
