# Events

## 1. Event Flow（事件流）
- Event Bubbling（事件冒泡）：由 IE 开发团队提出（IE 8及以下版本只支持事件冒泡）。元素上触发的事件会沿 DOM 树向上传播，在每一级节点上都会发生，一直冒泡到 window 对象。
- Event Capturing（事件捕获）：由 Netscape 开发团队提出。捕获过程与冒泡相反，window 对象最先捕获到元素上的事件。
- DOM Event Flow（DOM 事件流）：规定事件流包括：事件捕获阶段，目标阶段和事件冒泡阶段。

## 2. Event types & Event handlers
每个事件都有对应的事件处理程序，比如`click`事件对应的handler是`onclick`。

```html
<!DOCTYPE html>
<html lang="zh-Hans">
<head>
    <meta charset="UTF-8">
    <title>Events</title>
</head>
<body>
<button id="btn">Click</button>
<script>
    var btnEl = document.getElementById('btn');
    
    // 元素的 event handler 只有一个会生效
    btnEl.onclick = function () {
        console.log('click (from event handler)');
    };
    
    // 删除元素的evet handler
    // btnEl.onclick = null;

    // 元素上可以有多个 event listener
    btnEl.addEventListener('click', function () {
        console.log('click (from event listener)');
    }, false);

    btnEl.addEventListener('click', function () {
        console.log('click (from another event listener)');
    }, false);

    // removeEventListener 要生效, 必须传入与 addEventListener 相同的参数, 
    // 包括 handler 必须是同一个函数（意味着匿名函数不能移除）
    btnEl.removeEventListener('click', function () {
        console.log('click (from another event listener)');
    }, false)

</script>
</body>
</html>
```

> IE 9+ 支持`addEventListener`和`removeEventListener`，IE 6/7/8 不支持，但实现了两个类似的方法`attachEvent`和`detachEvent`。
> 需要注意的是`attachEvent()`第一个参数是EventHandler的名称，不是事件类型。

```javascript
btnEl.attachEvent('onclick', function () {
    console.log('click again');
});

btnEl.attachEvent('onclick', function () {
    console.log('click');
});
```


