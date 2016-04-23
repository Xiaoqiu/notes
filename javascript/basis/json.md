# JSON

## 1. 形式
- null
- boolean
- number
- string
- array
- object

> 字符串必须使用双引号（""）括起来

## 2. 方法
- JSON.stringify(value, replacer, space);
- JSON.parse(jsonString, reviver);

## 3. 例子
```javascript
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
