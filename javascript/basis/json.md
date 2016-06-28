# JSON
JSON标准见[ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf)

## 1. 形式
- null
- boolean
- number
- string
- array
- object

> - 字符串必须使用双引号（""）括起来
> - `undefined` 不是合法的 JSON 值

## 2. 方法
- JSON.stringify(value, replacer, space);
- JSON.parse(jsonString, reviver);

### JSON.parse()
```javascript
console.log(JSON.parse('{}'));              // {}
console.log(JSON.parse('true'));            // true
console.log(JSON.parse('"foo"'));           // "foo"
console.log(JSON.parse('[1, 5, "false"]')); // [1, 5, "false"]
console.log(JSON.parse('null'));            // null
console.log(JSON.parse('[]'));              // []
console.log(JSON.parse('[1, 2, 3, 4,]'));   // SyntaxError
```

## 3. 例子
```javascript
// 对象字面量的属性名，如果是合法标识符，可以不加引号
var book = {
        title: 'Pride and Prejudice',
        author: ['Jane Austen'],
        edition: 2,
        year: null,
        series: {
            title: 'Pride and Prejudice',
            author: ['Jane Austen'],
            edition: 2,
            year: null,
        }
    };

    var jsonStr = JSON.stringify(book, null, 4);
    console.log(jsonStr);

    var jsonObj = JSON.parse(jsonStr);
    console.log(jsonObj);

    // replacer可以是array
    console.log(JSON.stringify(book, ["title"], 4));

    // 也可以是function
    console.log(JSON.stringify(book, function (key, value) {
        if(key==='series'){
            return undefined;
        } else {
            return value;
        }
    }, 4));
```
