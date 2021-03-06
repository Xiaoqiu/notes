# jQuery代码规范与最佳实践

> 原文地址：[http://lab.abhinayrathore.com/jquery-standards/](http://lab.abhinayrathore.com/jquery-standards/)

以下书写jQuery代码的基本规范和最佳实践，这些不包括原生JS规范与最佳实践。如有问题或建议请移步[原作者博客](http://web3o.blogspot.com/2014/03/jquery-coding-standards-and-best.html)留言讨论。

## 加载jQuery

1 尽量使用CDN加载。[使用CDN的优势](http://www.sitepoint.com/7-reasons-to-use-a-cdn/)
```
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/jquery-1.11.0.min.js" type="text/javascript"><\/script>')</script>
```
[这里](http://lab.abhinayrathore.com/jquery-standards/?utm_source=javascriptweekly&utm_medium=email#jQueryCND)有一些流行的CDN列表。
2 使用本地同版本的jQuery库作备用。[更多信息](http://css-tricks.com/snippets/jquery/fallback-for-cdn-hosted-jquery/)
3 像第一条那样的，使用不带协议头的URL路径（去掉```http:```或者```https```）
4 如果有条件，将所有JS文件放在页面底部。[更多信息](http://developer.yahoo.com/blogs/ydn/high-performance-sites-rule-6-move-scripts-bottom-7200.html)还有[HTML5 模版](https://github.com/h5bp/html5-boilerplate/blob/master/index.html)
5 使用什么版本的jQuery？
  * 如需支持IE6/7/8则不要选择2.x版本
  * 针对新的web应用，不考虑兼容性等，则优先使用最新版本
  * 当从CDN加载jQuery时，总是写全版本号（例如：1.11.0 而不是1.11或只写1）
  * 不要加载多个不同版本jQuery

6 如果在同时使用其他如Prototype，MooTools，Zepto等一些同样在使用```$```符号的库时，不要使用```$```去调用jQuery方法，而是只使用```jQuery```。可以通过调用```$.noConflict()```将```$```的使用权交给其他库。
7 如果要检测更高级的浏览器特性，建议使用[Modernizr](http://modernizr.com/)。

## jQuery变量

1 所有使用或缓存jQuery对象的变量应该以```$```开头
2 始终将jQuery选择器返回的对象缓存到本地变量中以复用。

```javascript
  var $myDiv = $("#myDiv");
  $myDiv.click(function(){....});
```

3 使用[峰驼式](http://en.wikipedia.org/wiki/CamelCase)命名变量

## 选择器

1 ID选择器可用时就使用ID选择,它在内部使用```document.getElementById()```。
2 当使用类/伪类选择器时，总是给选择器附上元素类型来避免扫描整个DOM树。

```javascript
  // BAD 在整个DOM树中扫描"products"类名
var $products = $(".products");

// GOOD 只在DIV元素中扫描"products"类名
var $products = $("div.products");
```

3 在ID > 子节点层级选择器中使用```find()```方法。因为前半部分选择器没使用到Sizzle选择器引擎来查找元素。[更多信息](http://learn.jquery.com/performance/optimize-selectors/)

```javascript
  // BAD, Sizzle选择器引擎查找层级
  var $productIds = $("#products div.id");

  // GOOD, 只有div.id走Sizzle选择器引擎
  var $productIds = $("#products").find("div.id");
```

4 选择器后半部分比前半部分明确。[更多信息](http://learn.jquery.com/performance/optimize-selectors/)

```javascript
// 未优化
$("div.data .gonzalez");

// 优化
$(".data td.gonzalez");
```

5 避免冗余选择器。[更多信息](http://learn.jquery.com/performance/optimize-selectors/)

```javascript
$(".data table.attendees td.gonzalez");

// Better: 有必要时要去掉中间不必要的内容
$(".data td.gonzalez");
```

6 给选择器添加上下文。[更多信息](http://learn.jquery.com/performance/optimize-selectors/)

```javascript
// 要扫描整个DOM树寻找
$('.class');

// 只在#class-container里扫描
$('.class', '#class-container');
```

7 避免使用通配符选择器。[更多信息](http://learn.jquery.com/performance/optimize-selectors/)

```javascript
$('div.container > *'); // BAD
$('div.container').children(); // BETTER
```

8 避免使用隐式通配选择器。当省略下面的input时，会隐式的使用通配符选择器。[更多信息](http://learn.jquery.com/performance/optimize-selectors/)

```javascript
$('div.someclass :radio'); // BAD
$('div.someclass input:radio'); // GOOD
```

9 ID选择器使用的是```document.getElementById()```，ID选择器无需嵌套ID。

```javascript
$('#outer #inner'); // BAD
$('div#inner'); // BAD
$('.outer-container #inner'); // BAD
$('#inner'); // GOOD
```

## DOM操作
1 始终先detach现有DOM元素后进行操作，随后将其attach到DOM中。

```javascript
var $myList = $("#list-container > ul").detach();
//...针对$myList的许多DOM操作
$myList.appendTo("#list-container");
```

2 使用字符串连接或者```array.join()```而不是```.append()```方法。[更多信息](http://learn.jquery.com/performance/append-outside-loop/) [性能对比](http://jsperf.com/jquery-append-vs-string-concat)

```javascript
// BAD
var $myList = $("#list");
for(var i = 0; i < 10000; i++){
    $myList.append("<li>"+i+"</li>");
}

// GOOD
var $myList = $("#list");
var list = "";
for(var i = 0; i < 10000; i++){
    list += "<li>"+i+"</li>";
}
$myList.html(list);

// EVEN FASTER
var array = [];
for(var i = 0; i < 10000; i++){
    array[i] = "<li>"+i+"</li>";
}
$myList.html(array.join(''));
```

3 不操作未知元素。[更多信息](http://learn.jquery.com/performance/dont-act-on-absent-elements/)

```javascript
// BAD: 这个函数内部要先执行3个函数，才发现选择器选择到的可能是空内容
$("#nosuchthing").slideUp();

// GOOD
var $mySelection = $("#nosuchthing");
if ($mySelection.length) {
    $mySelection.slideUp();
}
```

## 事件

1 每个页面只使用一个Document Ready函数。利于调试。
2 不要使用匿名函数绑定事件。匿名函数不利于调试、维护、测试和复用。[更多信息](http://learn.jquery.com/code-organization/beware-anonymous-functions/)

```javascript
$("#myLink").on("click", function(){...}); // BAD

// GOOD
function myLinkClickHandler(){...}
$("#myLink").on("click", myLinkClickHandler);
```

3 Document ready函数不应该是匿名函数。匿名函数不能复用也无法对其测试。

```javascript
$(function(){ .. }); // BAD: 不容易复用也不利于测试

// GOOD
$(initPage); // or $(document).ready(initPage);
function initPage(){
  // Document ready里可以初始化变量和调用其他初始化函数
}
```

4 Document ready函数应该放在外部文件里，在其他初始化设置之后，在行内JS里调用这些函数。
````
<script src="my-document-ready.js"></script>
<script>
  // 任何其他需要设置的全局变量
  $(document).ready(initPage); // or $(initPage);
</script>
```
5 不要在HTML文件里添加行为（行内JS），这是调试的噩梦。始终使用jQuery绑定事件后面会很容易去解绑事件。
```
<a id="myLink" href="#" onclick="myEventHandler();">my link</a> <!-- BAD -->
```

```javascript
$("#myLink").on("click", myEventHandler); // GOOD
```

6 如有需要，对事件使用自定义[命名空间](http://api.jquery.com/event.namespace/)。这有利于去解绑某DOM元素上特定的事件而不会影响到该DOM元素上的其他事件。

```javascript
$("#myLink").on("click.mySpecialClick", myEventHandler); // GOOD
// 后面会很容易的解绑这个特定的点击事件
$("#myLink").unbind("click.mySpecialClick");
```

## Ajax

1 避免使用```.getJSON()```和```.get()```，只使用```$.ajax()```，前两者都是在内部使用的后者。
2 不要在```https```的网站上使用```http```请求。侧重无模式的url（在URL上去掉http/https）。
3 不要把请求参数放在URL里，而是放在data对象里去。

```javascript
// 不可读
$.ajax({
    url: "something.php?param1=test1&param2=test2",
    ....
});

// 可读
$.ajax({
    url: "something.php",
    data: { param1: test1, param2: test2 }
});
```

4 明确设置数据的类型```dataType```，这样很容易知道当前正在处理什么样的数据。（见下面的Ajax模版例子）
5 对Ajax加载的DOM元素绑定事件时尽量使用事件代理。事件代理的优势是对于Ajax后来添加到DOM的元素也能响应事件。[更多信息](http://api.jquery.com/on/#direct-and-delegated-events)

```javascript
$("#parent-container").on("click", "a", delegatedClickHandlerForAjax);
```

6 使用Promise

```javascript
$.ajax({ ... }).then(successHandler, failureHandler);

// OR
var jqxhr = $.ajax({ ... });
jqxhr.done(successHandler);
jqxhr.fail(failureHandler);
```

7 Ajax模版代码：

```javascript
var jqxhr = $.ajax({
  url: url,
  type: "GET",      // 默认值GET，可根据需要配置
  cache: true,      // 默认值true, dataType是'script'或'jsonp'时为false，可根据需要配置
  data: {},         // 请求参数对象
  dataType: "json", // 设置数据类型
  jsonp: "callback",// 只在操作JSONP时设置此项
  statusCode: {     // 针对特定错误码的回调处理函数
    404: handler404,
    500: handler500
  }
});
jqxhr.done(successHandler);
jqxhr.fail(failureHandler);
```

## 效果和动画
1 采用统一的动画实现方式。
2 不要过度使用动画效果，除非追求用户体验。
  * 尽量使用简单的show/hide/toggle/slideUp/slideDown方法来显示隐藏元素。
  * 尽量使用预定义的动画时间间隔：```slow```,```fast```或```400```

## 插件

1 始终选择有良好维护、优秀文档、良好测试和社区支持的插件。
2 细心检查该插件与正在使用的jQuery版本的兼容性。
3 任何通用的组件都应该抽取成jQuery插件。[这里](http://stenders.github.io/template/jquery.plugin.js)有jQuery插件的模版代码。

## 链式写法

1 尽量使用链式写法而不是用变量缓存或者多次调用选择器方法。

```javascript
$("#myDiv").addClass("error").show();
```

2 当链式写法超过三次或者因为事件绑定变得复杂后，使用换行和缩进保持代码可读性。

```javascript
$("#myLink")
  .addClass("bold")
  .on("click", myClickHandler)
  .on("mouseover", myMouseOverHandler)
  .show();
```

3 对于更长的链式调用，可接受用变量缓存一个中间对象。

## 其他原则

1 参数尽量使用对象字面量

```javascript
$myLink.attr("href", "#").attr("title", "my link").attr("rel", "external"); // BAD
// GOOD
$myList.attr({
    href: "#",
    title: "my link",
    rel: "external"
});
```

2 不要把CSS混进jQuery

```javascript
$("#mydiv").css({'color':red, 'font-weight':'bold'}); // BAD

.error { color: red; font-weight: bold; } /* GOOD */
$("#mydiv").addClass("error"); // GOOD
```

3 不要使用遭弃用的方法。要一直看清楚哪些方法在某个新版本中被弃用了，[这里](http://api.jquery.com/category/deprecated/)有被弃用的方法的列表。
4 需要时可使用原生JS方法。下面两个例子的性能对比见[这里](http://jsperf.com/document-getelementbyid-vs-jquery/3)

```javascript
$("#myId"); // 还是慢了些
document.getElementById("myId");
```

## 其他资源：
[jQuery Performance](http://learn.jquery.com/performance/)
[jQuery Learn](http://learn.jquery.com)
[jQuery API Docs](http://api.jquery.com/)
[jQuery Coding Standards and Best Practice](http://www.jameswiseman.com/blog/2010/04/20/jquery-standards-and-best-practice/)
[jQuery Plugin Boilerplate](http://stefangabos.ro/jquery/jquery-plugin-boilerplate-revisited/)
