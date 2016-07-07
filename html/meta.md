IE兼容模式
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
```
> 注:
> `IE=edge`: 使用IE最高级别模式，IE10及以下版本有效，IE11默认开启。
> `chrome=1`: 如果IE安装了Google Chrome Frame插件，则启用Chrome内核。2014年1月，Chrome Frame已经停止支持。

实际上只要这样即可
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```
https://blog.chromium.org/2013/06/retiring-chrome-frame.html
https://www.google.com/chromeframe
https://www.chromium.org/developers/how-tos/chrome-frame-getting-started

Google Chrome Frame is an early-stage open source plug-in that seamlessly brings Google Chrome's open web technologies and speedy JavaScript engine to Internet Explorer. With Google Chrome Frame, you can start using open web technologies - like the HTML5 canvas tag - right away, even technologies that aren't yet supported in Internet Explorer 6, 7, 8, and 9. You can also take advantage of JavaScript performance improvements to make your apps faster and more responsive.


What's new in this version:

Version 18.0.1025.142 brings improvements to Canvas2D and WebGL functionality. This release brings better GPU-acceleration and also includes a software resterizer called SwiftShader.

https://github.com/paddingme/Learning-JavaScript/issues/23\
https://github.com/hoosin/lite/blob/master/knowledge/part1/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%A8%A1%E5%BC%8F/%E5%AE%9A%E4%B9%89IE%E6%96%87%E6%A1%A3%E5%85%BC%E5%AE%B9%E6%80%A7.md
https://github.com/iamjoel/be-grace-front-end-developer/blob/master/coding-style/html-style.md
http://xifengxx.github.io/2015/12/13/%E5%89%8D%E7%AB%AF%E7%9F%A5%E8%AF%86%E4%B9%8B%E6%9F%A5%E6%BC%8F%E8%A1%A5%E7%BC%BA-HTML%E5%A4%B4%E9%83%A8head%E6%A0%87%E7%AD%BE/
http://dafeizizhu.github.io/2013/07/04/html-meta-tag/

https://gaohaoyang.github.io/2015/06/17/web-app/
http://huwenhua.github.io/2015/06/16/CSS3-always/
http://comee.github.io/2015/09/23/Something-About-HTML/
https://github.com/guihailiuli/ife-learn/issues/4
https://github.com/foryuki/moon/issues/1
https://github.com/Lagou-Frontend/Code-Guide
http://nomospace.com/category/frontend/
https://github.com/sk-blog/note
https://github.com/jsonxu/F2E-Blog/issues/12
https://github.com/ekongx/meta
https://github.com/front-end-basis/html
http://zhijianshusheng.github.io/2016/01/13/HTMLbase/
https://gui-che.github.io/2015/09/17/js-older-ie-js/

动画（transitions）
边框图片（border-image）
盒模型（box-sizing）
变换（transformations）
弹性盒模型
字体
优雅降级
Modernizr
Google Chrome Frame

360等双核浏览器，优先使用webkit内核渲染
```html
<meta name="renderer" content="webkit">
```

禁止百度转码
```html
<meta http-equiv="Cache-Control" content="no-transform">
```

禁止Google翻译
```html
<meta name="google" value="notranslate">
```

取消浏览器对页面中电话号码和email的自动识别
```html
<meta name="format-detection" content="telephone=no, email=no">
```

AppStore Smart bar
```html
<meta name="apple-itunes-app" content="app-id=1044488983">
```

iOS WebApp
```html
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="Title">
```

Chrome地址栏颜色
```html
<meta name="theme-color" content="#2196F3">
```

Viewport缩放
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```

SEO
```html
<meta name="keywords" content="">
<meta name="description" content="">
<meta name="author" content="">
```
Robots协议
```html
<meta name="robots" content="all">
```

网页缓存
```html
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="expires" content="0">
```

- [HTML head 头标签](http://fex.baidu.com/blog/2014/10/html-head-tags/)
