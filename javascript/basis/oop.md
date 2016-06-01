
## OOP特点
- 封装
- 继承
- 多态

JavaScript是如何实现OOP的？
基于原型

## 类的实现
```javascript
// 通过构造函数模拟类
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var person = new Person('John', 23); //通过new来新建实例
```

## 继承的实现
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function() {
  console.log("Hi, I'm " + this.name);
}

function Student(name, className) {
  Person.call(this, name); // 调用父类的构造函数
  this.className = className;
}

Student.prototype = Object.create(Person.prototype); // 继承父类的原型
Student.prototype.constructor = Student; // 将构造函数属性指向自身

// 重写原来的sayHi方法
Student.prototype.sayHi = function() {
	console.log("Hi, I'm " + this.name + " from " + this.className);
}

Student.prototype.sayBye = function() {
	console.log("Bye bye");
}

var jay = new Student('Jay', 'Class 2, Grade 3');
jay.sayHi();
jay.sayBye();
```

原型模式，借助构造函数模式，混合模式，寄生模式，寄生混合模式

原型链
构造函数
组合方式

## Reference
> - [Javascript 面向对象编程（一）：封装](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html)
> - [Javascript 面向对象编程（二）：构造函数的继承](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html)
> - [Javascript 面向对象编程（三）：非构造函数的继承](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance_continued.html)
> - [Javascript 继承机制的设计思想](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)
> - [Javascript定义类（class）的三种方法](http://www.ruanyifeng.com/blog/2012/07/three_ways_to_define_a_javascript_class.html)
