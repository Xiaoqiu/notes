# 作用域(Scope)和作用域链(Scope chain)
- 在ES6之前，JavaScript没有块级作用域，而只有函数作用域。
- 使用 `var` 声明的变量会被自动添加到最接近的执行环境中。
- 查询变量时，会沿着作用域链向上逐级查询，从局部环境一直追溯到全局环境，如果没有则该变量未声明。

# Reference
> - [理解 JavaScript 作用域和作用域链](http://www.cnblogs.com/lhb25/archive/2011/09/06/javascript-scope-chain.html)
