# `script` 元素

## W3C标准中对async和defer属性的阐述
- 默认情况: 浏览器解析到script标签时, 会造成阻塞, 直到脚本下载、执行(内联脚本不需要下载, 直接执行)完成, 继续HTML的解析（[效果](http://keqingrong.github.io/practice/js-load/01-script.html)）
- `async`: 异步下载脚本, 只有执行时会阻塞HTML的解析（[效果](http://keqingrong.github.io/practice/js-load/02-script-async.html)）
- `defer`: 异步下载脚本, HTML解析完成后, 执行脚本（[效果](http://keqingrong.github.io/practice/js-load/03-script-defer.html)）

## 兼容性
- `async`: IE10+支持, IE9及以下不支持
- `defer`: IE10+支持, IE9及以下版本实现与标准不同(不能保证多个脚本的执行顺序)
