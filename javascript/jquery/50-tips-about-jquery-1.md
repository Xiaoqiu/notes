# 50个jQuery学习必备小技巧（上）

本文为大家总结了50个学习jQuery的小技巧，用于提高开发效率，也欢迎大家指正补充。

#### 1. 如何修改jQuery默认编码（例如默认UTF-8改成改GB2312）：
```javascript
$.ajaxSetup({
    ajaxSettings:{ contentType:"application/x-www-form-urlencoded;chartset=GB2312"}
});
```

#### 2. 解决jQuery, prototype共存，$全局变量冲突问题：
```html
<script src="prototype.js"></script>
<script src="http://blogbeta.blueidea.com/jquery.js"></script>
<script type="text/javascript">
      jQuery.noConflict();
</script>
```
注意：一定要先引入prototype.js 再引入jquery.js，先后顺序不可错。

#### 3. jQuery 判断元素上是否绑定了事件
```javascript
//jQuery event封装支持判断元素上是否绑定了事件，此方法只适用于jQuery绑定的事件
var $events = $("#foo").data("events");
if( $events && $events["click"] ){
　　//your code
}
```

#### 4. 如何使用jQuery来切换样式表
```javascript
//找出你希望切换的媒体类型（media-type），然后把href设置成新的样式表。
$('link[media='screen']').attr('href', 'alternative.css');
```

#### 5. 如何使用一个可点击的链接来替换页面中任何的URL
```javascript
$.fn.replaceUrl = function() {
　　var regexp = /((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
　　return this.each(function() {
　　　　$(this).html(
　　　　　　$(this).html().replace(regexp,'<a href="$1">$1</a>')
　　　　);
　　});
}
//用法　
$('p').replaceUrl();
```

#### 6. 如何检查cookie是否启用
```javascript
var dt = new Date();
dt.setSeconds(dt.getSeconds() + 60);
document.cookie = "cookietest=1; expires=" + dt.toGMTString();
var cookiesEnabled = document.cookie.indexOf("cookietest=") != -1;
if(!cookiesEnabled) {
　　//没有启用cookie
}
```

#### 7. 如何让cookie过期
```javascript
var date = new Date();
date.setTime(date.getTime() + (x * 60 * 1000));
$.cookie('example', 'foo', { expires: date });
```

#### 8. 如何使用jQuery来为事件指定命名空间
```javascript
//事件可以这样绑定命名空间
$('input').bind('blur.validation', function(e){
　　// ...
});
//data方法也接受命名空间
$('input').data('validation.isValid', true);
```

#### 9. 如何检查图像是否已经被完全加载进来
```javascript
$('#theImage').attr('src', 'image.jpg').load(function() {
　　alert('This Image Has Been Loaded');
});
```

#### 10.如何规范化写jQuery插件：
```javascript
(function($){
    $.fn.extend({
        pluginOne: function(){
            return this.each(function(){
                // my code
            });
        },
        pluginTwo: function(){
            return this.each(function(){
                // my code
            });
        }
    });
})(jQuery);
```

#### 11. 如何扩展String对象的方法
```javascript
$.extend(String.prototype, {
        isPositiveInteger:function(){
            return (new RegExp(/^[1-9]\d*$/).test(this));
        },
        isInteger:function(){
            return (new RegExp(/^\d+$/).test(this));
        },
        isNumber: function(value, element) {
            return (new RegExp(/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/).test(this));
        },
        trim:function(){
            return this.replace(/(^\s*)|(\s*$)|\r|\n/g, "");
        },
        trans:function() {
            return this.replace(/</g, '<').replace(/>/g,'>').replace(/"/g, '"');
        },
        replaceAll:function(os, ns) {
            return this.replace(new RegExp(os,"gm"),ns);
        },
        skipChar:function(ch) {
            if (!this || this.length===0) {return '';}
            if (this.charAt(0)===ch) {return this.substring(1).skipChar(ch);}
            return this;
        },
        isValidPwd:function() {
            return (new RegExp(/^([_]|[a-zA-Z0-9]){6,32}$/).test(this));
        },
        isValidMail:function(){
            return(new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(this.trim()));
        },
        isSpaces:function() {
            for(var i=0; i<this.length; i+=1) {
                var ch = this.charAt(i);
                if (ch!=' '&& ch!="\n" && ch!="\t" && ch!="\r") {return false;}
            }
            return true;
        },
        isPhone:function() {
            return (new RegExp(/(^([0-9]{3,4}[-])?\d{3,8}(-\d{1,6})?$)|(^\([0-9]{3,4}\)\d{3,8}(\(\d{1,6}\))?$)|(^\d{3,8}$)/).test(this));
        },
        isUrl:function(){
            return (new RegExp(/^[a-zA-z]+:\/\/([a-zA-Z0-9\-\.]+)([-\w .\/?%&=:]*)$/).test(this));
        },
        isExternalUrl:function(){
            return this.isUrl() && this.indexOf("://"+document.domain) == -1;
        }
    });
```

#### 12. 如何获得鼠标垫光标位置x和y
```javascript
$(document).ready(function() {
　　$(document).mousemove(function(e){
　　　　$(’#XY’).html(”X Axis : ” + e.pageX + ” | Y Axis ” + e.pageY);
　　});
});
```

#### 13. 如何基于一些输入文本来过滤一个元素列表
```javascript
//如果元素的值和输入的文本相匹配的话,该元素将被返回
$('.someClass').filter(function() {
　　return $(this).attr('value') == $('input#someId').val();
})
```

#### 14. 如何切换页面上的所有复选框
```javascript
var tog = false;
// 或者为true，如果它们在加载时为被选中状态的话
$('a').click(function() {
　　$("input[type=checkbox]").attr("checked",!tog);
　　tog = !tog;
});
```

#### 15. 如何限制选择范围（基于优化目的）
```javascript
//尽可能使用标签名来作为类名的前缀，
//这样jQuery就不需要花费更多的时间来搜索
//你想要的元素。还要记住的一点是，
//针对于你的页面上的元素的操作越具体化，
//就越能降低执行和搜索的时间。
var in_stock = $('#shopping_cart_items input.is_in_stock');
```
```html
<ul id="shopping_cart_items">
　　<li><input type="radio" value="Item-X" name="item" /> Item X</li>
　　<li><input type="radio" value="Item-Y" name="item" /> Item Y</li>
　　<li><input type="radio" value="Item-Z" name="item" /> Item Z</li>
</ul>
```

#### 16. 如何正确地使用toggleClass
```javascript
//切换（toggle）类允许你根据某个类的
//是否存在来添加或是删除该类。
//这种情况下有些开发者使用：
a.hasClass('blueButton') ? a.removeClass('blueButton') : a.addClass('blueButton');
//toggleClass允许你使用下面的语句来很容易地做到这一点
a.toggleClass('blueButton');
```

#### 17. 如何设置IE特有的功能
```javascript
if ($.browser.msie) {
// Internet Explorer就是个虐待狂
}
```

#### 18. 如何验证某个元素是否为空
```javascript
// 方法一
if (! $('#keks').html()) {
//什么都没有找到;
}
 
// 方法二
if ($('#keks').is(":empty")) {
//什么都没有找到;
};
```

#### 19. 如何从一个未排序的集合中找出某个元素的索引号
```javascript
$("ul > li").click(function () {
　　var index = $(this).prevAll().length;    //prevAll([expr]): 查找当前元素之前所有的同辈元素});
```

#### 20. 如何把函数绑定到事件上
```javascript
//方法一
$('#foo').click(function(event) {
　　alert('User clicked on "foo."');
}); 
 
//方法二, 支持动态传参
$('#foo').bind('click', {test1:"abc", test2:"123"}, function(event) {
　　alert('User clicked on "foo."' + event.data.test1 + event.data.test2 );
});
```

#### 21. 如何追加或是添加html到元素中
```javascript
$('#lal').append('sometext');
```

#### 22. 在创建元素时，如何使用对象字面量（literal）来定义属性
```javascript
var e = $("", { href: "#", class: "a-class another-class", title: "..." });
```

#### 23. 如何使用多个属性来进行过滤
```javascript
//在使用许多相类似的有着不同类型的input元素时，
//这种基于精确度的方法很有用
var elements = $('#someid input[type=sometype][value=somevalue]').get();
```

#### 24. 如何使用jQuery来预加载图像
```javascript
jQuery.preloadImages = function() {
　　for(var i = 0; i < arguments.length; i++) {
　　　　$("<img />").attr('src', arguments[i]);
　　}
};
//用法
$.preloadImages('image1.gif', '/path/to/image2.png', 'some/image3.jpg');
```

#### 25. 如何为任何与选择器相匹配的元素设置事件处理程序
```javascript
$('button.someClass').live('click', someFunction);
//注意，在jQuery 1.4.2中，delegate和undelegate选项
//被引入代替live，因为它们提供了更好的上下文支持
//例如，就table来说，以前你会用
$("table").each(function(){
　　$("td", this).live("hover", function(){
　　　　$(this).toggleClass("hover");
　　});
});
//现在用
$("table").delegate("td", "hover", function(){
　　$(this).toggleClass("hover");
});
```


