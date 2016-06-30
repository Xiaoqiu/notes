 一个参数, 括号可以省略
```javascript
var funcA = factor => factor * factor;
```

 没有参数
```javascript
var funcB = () => 123;
```

 多个参数
```javascript
var funcC = (factor1, factor2) => factor1 * factor2;
```

 代码块超过一行, 使用大括号和return
```javascript
var funcD = (factor1, factor2) => {
    return factor1 * factor2;
};
```

 返回对象必须使用小括号包裹(大括号会被解释为代码块)
```javascript
var funcE = id => ({"id": id, "name": 'John No.'+ id});
```

- [［译］avaScript ES6箭头函数指南](https://github.com/DavidCai1993/my-blog/issues/13)
