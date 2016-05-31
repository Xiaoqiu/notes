# String

## ES1
 - str.valueOf(): 返回String对象的基本类型值
 - str.toLowerCase(): 转换成小写
 - str.toUpperCase(): 转换成大写
 - str.substring(indexStart[, indexEnd]): 返回字符串子串(index>=0)
 - str.charAt(index): 返回指定字符
 - str.charCodeAt(index): 返回指定字符的UTF-16代码
 - str.indexOf(searchValue[, fromIndex]): 返回指定字符串在str中第一次出现的索引值
 - str.lastIndexOf(searchValue[, fromIndex]): 从后往前查询, 返回指定字符串第一次出现的索引值

## ES3
- str.concat(string2, string3[, ..., stringN]): 返回拼接后的新字符串
- str.split([separator[, limit]]): 按照给定规则进行字符串分割，返回一个数组，包含分割后的各个成员
- str.substr(start[, length]): 返回指定长度的子串
- str.slice(beginSlice[, endSlice]): 提取原字符串的一部分作为新字符串返回(slice可以为负)
- str.toString(): 和valueOf()方法相同, 返回String对象的基本类型值
- str.toLocaleLowerCase(): 转换成小写
- str.toLocaleUpperCase(): 转换成大写
- str.match(regexp): 返回一个数组/null，成员是所有匹配的子字符串
- str.search(regexp): 按照给定的正则表达式进行搜索，返回一个整数，表示匹配开始的位置
- str.replace(regexp|substr, newSubStr|function): 按照给定的正则表达式进行替换，返回替换后的字符串

## ES5
- str.trim(): 移除字符串里的空格

## ES6
- str.codePointAt(pos): 返回指定位置字符的Unicode code point
- str.includes(searchString[, position]): 查明字符串str是否包含指定字符串
- str.startsWith(searchString[, position]): 查明字符串str是否以指定字符串作为开始
- str.endsWith(searchString[, position]): 查明字符串str是否以指定字符串作为结束
- str.repeat(count):

```javascript
var englishString = 'Brave new world';
var chineseString = '天地玄幻，宇宙洪荒。';
var emojiString = '😂'; // U+1F602

console.log(englishString.charAt(0)); // "B"
console.log(chineseString.charAt(0)); // "天"
console.log(emojiString.charAt(0)); // "天"

console.log(englishString.charCodeAt(0)); // 66
console.log(chineseString.charCodeAt(0)); // 22825
console.log(emojiString.charCodeAt(0)); // 55357

console.log(englishString.codePointAt(0)); // 66
console.log(chineseString.codePointAt(0)); // 22825
console.log(emojiString.codePointAt(0)); // 128514

console.log(englishString.concat(', another world', ', etc.')); // "Brave new world, another world, etc."

var str = 'To be, or not to be, that is the question.';
console.log(str.endsWith('question.')); // true
console.log(str.endsWith('the')); // false
console.log(str.endsWith('the', 32)); // true

'Blue Whale'.indexOf('Whale'); // returns  5
'Blue Whale'.indexOf('White'); // returns  -1
'Blue Whale'.indexOf('Whale', 0); // returns  5
'Blue Whale'.indexOf('Whale', 5); // returns  5

'Jingle bells, Jingle bells, Jingle all the way'.lastIndexOf('Jingle'); // returns 28
'Jingle bells, Jingle bells, Jingle all the way'.lastIndexOf('White'); // returns  -1
'Jingle bells, Jingle bells, Jingle all the way'.lastIndexOf('Jingle', 0); // returns  0
'Jingle bells, Jingle bells, Jingle all the way'.lastIndexOf('Jingle', 16); // returns  14

var hint = 'For more information, see Chapter 3.4.5.1';
var re = /see (chapter \d+(\.\d)*)/i;
var found = hint.match(re);
console.log(found); // [ 'see Chapter 3.4.5.1', 'Chapter 3.4.5.1', '.1', index: 22, input: 'For more information, see Chapter 3.4.5.1' ]
console.log(''.match(re)); // null

var sentence = 'Twas the night before Xmas...';
var newSentence = sentence.replace(/xmas/i, 'Christmas');
console.log(newSentence);  // Twas the night before Christmas...
```
