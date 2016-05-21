## 浏览器兼容性问题
- HTML5支持
- CSS3支持
- ES5支持
- Web API支持（addEventListener）

## 兼容性视图
IE8+支持

## IE兼容
addEventListener    IE9+  
bind()              IE9+  
classList           IE10+  
className、activeElement、hasFocus    IE6+  
getElementsByClassName   IE9+  
querySelector      IE8+  
querySelectorAll   IE8+  
matchesSelector    实验阶段、可通过私有前缀使用，如webkitmatchesSelector，moz--，ms--等
(chrome、firefox、opera、safari支持matches()，IE9以上使用需添加ms前缀)
formdate IE10+，但是IE10，11不支持json的响应数据  

### IE 版本
2015年8月19日，Bootstrap 4.0 Alpha放弃对IE8的支持。  
2016年1月12日，微软放弃对IE8/IE9/IE10的支持。  
2016年1月14日，jQuery 3.0 Beta放弃对IE8的支持（提供IE8兼容库）。  
2016年4月13日，淘宝和天猫停止对IE6/IE7的支持。  

IE6，2001年发布（伴随Windows XP）  
IE7，2007年发布（伴随Windows Vista）  
IE8，2008年发布（支持Windows 7、Windows Vista和Windows XP），同年Chrome开始公测  
IE9，2011年发布（支持Windows 7和Windows Vista）  
IE10，2012年发布（伴随Windows 8，支持Windows 7）  
IE11，2013年发布（伴随Windows 8.1）  
Microsoft Edge，2015年发布（伴随Windows 10）  

### IE9
- 不支持 `transition` 和 `placeholder`
- 不支持 `transform`，支持 `-ms-transform`
- 不支持 `classList`，IE10和11部分支持

### IE8
不支持 `@media`

可能需要使用
- The HTML5 shiv
- Respond.js
- Rem unit polyfill

## Reference
> - [IE8+兼容经验小结](http://hustlzp.com/post/2014/01/ie8-compatibility)
> - [兼容性 根本原因](http://www.w3help.org/zh-cn/causes/)
> - [Can I use](http://caniuse.com/)
> - [IE compatibility changes by version](https://msdn.microsoft.com/en-us/library/dn467846(v=vs.85).aspx)
> - [浏览器市场份额 - 百度统计流量研究院](http://tongji.baidu.com/data/browser)
