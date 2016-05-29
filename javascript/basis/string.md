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
