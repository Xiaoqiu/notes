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

## 谈谈你在过去的项目中遇到的最大的挑战。可以从以下方面进行描述：用到了哪些新技术？挑战点在哪里？过程中和结果的收获是什么？

你对前端职业发展有何看法？
前端和后端程序员应该如何合作？
讲几个你在项目中解决的让你印象最深的问题（难、匪夷所思、解决方案有趣都可以）
在JavaScript面向对象方面，你有什么体会和实践？
谈谈JavaScript中的闭包，以及你的实践。
说说 http://m.taobao.com 前端做的最烂的地方，以及你的改进。
谈几个有趣的html标签，以及它们的语义。
讲一讲CSS的position/float/display都有哪些取值，它们相互叠加时的行为都是什么？
说几个你觉得有趣的CSS3选择器，以及他们有趣的用法。
自己问自己一道代表你水平的面试题，然后回答。