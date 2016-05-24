# this
this指当前对象，也就是函数当前所在的运行环境

## this的指向

### 全局环境下
在全局环境下，或者在普通函数中，this指向全局对象，在浏览器中是window，在Nodejs中是global。  
严格模式中，this为undefined。

### 在对象中，this指向对象本身

```javascript
var obj = {
  name: 'John',
  say: function() {
    console.log(this.name);
  }
};
obj.say();
```

### 在构造函数中，this指向实例对象

```javascript
var Person = function() {
  this.name = 'John';
}

var person = new Person();
console.log(person.name);
```

## 修改this的指向
call/apply方法可以修改this指向，bind方法可以绑定this的指向。

## 测试
```javascript
var foo = 1;
function main() {
	console.log(foo);
	var foo = 2;
	console.log(this.foo);
	this.foo = 3;
}

main(); // undefined 1
new main(); // undefined undefined
```
知识点：声明提升，this，普通函数和构造函数


## Reference
> - [快速理解JavaScript中this的用法与陷阱](https://segmentfault.com/a/1190000004580525)
> - [Javascript的this用法](http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html)
> - [JavaScript学习总结——this对象](https://segmentfault.com/a/1190000004938787)
