# 异步编程
## 实现方法
- 回调函数
- 事件监听
- 发布/订阅 ( 或者观察者模式 )
- ES6 Promise
- ES6 Generator
- ES7 async/await

## Generator 函数
### 语法
```javascript
function* name([param[, param[, ... param]]]) {
   statements
}
```

### iterator 协议
iterator 必须实现 next() 方法, 返回值包括2个property: done (boolean) 和 value


### yield & yield*
- The yield keyword is used to pause and resume a generator function
- The yield* expression is used to delegate to another generator or iterable object.


## Promise 对象
### 3种状态
- pending: 待处理, 初始状态
- fulfilled: 成功处理状态
- rejected: 拒绝 ( 失败 ) 状态

### 方法
- Promise.prototype.then()
- Promise.prototype.catch()
- Promise.resolve(value)
- Promise.reject(reason)
- Promise.all(iterable)
- Promise.race(iterable)
