## 1. 浏览器渲染页面的过程


## 2. 浏览器兼容问题
- 盒模型
- IE的 `Quirks Mode` 和 `Standards Mode`
- 不同IE版本对HTML5、Web API的支持程度不同

## 3. 盒模型
- 盒模型（margin-border-padding-content）
 - W3C标准盒模型：width = contentWidth
 - IE盒模型：width = contentWidth + paddingWidth + borderWidth
- CSS3中的`box-sizing: border-box;`说明还是IE盒模型更符合大多数人的需求。

## 4. 跨域
- CORS
- JSONP
- iframe
 - document.domain(跨子域)
 - window.name
- window.postMessage

## 5. 浏览器缓存
- 离线缓存 localStorage

## 6. px, em, rem区别

## 7. JSONP的原理、实现、安全性(使用token)

## 8. tap事件的实现
[指尖上的事件－touch事件的封装](http://stylechen.com/touch.html)
[移动端页面touch会穿透，这是bug么？](https://segmentfault.com/q/1010000000691822)
[也来说说touch事件与点击穿透问题](https://segmentfault.com/a/1190000003848737)
[fastclick与zepto的 tap事件关于在手机上click事件的300ms延迟的区别](http://www.cnblogs.com/lilyimage/p/3740668.html)
