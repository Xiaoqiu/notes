# throttle(函数节流) and debounce(函数去抖)

## 概念介绍

## 问题场景
1. 在IE/Safari/Chrome等浏览器上，调整窗口大小过程中，会触发多次`resize`事件
2. 用户点击按钮重复提交Ajax请求
3. 输入框输入时自动提示

```javascript
// 只有最后一次生效
var timeoutId;
window.onresize = function () {
  if(timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(function() {
    // 调整停止后的操作
  }, 100);
};
```

```javascript
// 只有第一次生效
var timeoutId;
window.onresize = function () {
  if(!timeoutId){
    timeoutId = setTimeout(function() {
      timeoutId = null;
      clearTimeout(timeoutId);
      // 调整停止后的操作
    }, 100);
  }
};
```

## Reference
- [怎样防止重复发送 Ajax 请求？](https://www.zhihu.com/question/19805411)
- [浅谈 Underscore.js 中 _.throttle 和 _.debounce 的差异](https://blog.coding.net/blog/the-difference-between-throttle-and-debounce-in-underscorejs)
- [浅谈javascript的函数节流](http://www.alloyteam.com/2012/11/javascript-throttle/)
- [再谈JAVASCRIPT函数节流](http://www.cnphp6.com/archives/120105)
- [JavaScript函数节流与函数去抖](http://www.cnblogs.com/friskfly/p/3175077.html)
- [Javascript函数节流](http://www.cnblogs.com/dolphinX/p/3403821.html)
- [函数节流与去抖](https://github.com/hahnzhu/read-code-per-day/issues/5)
- [Debounced Resize() jQuery Plugin](https://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler/)
- [The Difference Between Throttling and Debouncing](https://css-tricks.com/the-difference-between-throttling-and-debouncing/)
- [Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/), David Corbacho
- [_.throttle - lodash](https://lodash.com/docs#throttle)
