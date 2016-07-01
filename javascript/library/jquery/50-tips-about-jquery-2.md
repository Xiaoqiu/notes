# 50个jQuery学习必备小技巧（下）

#### 1. 如何使用jQuery来代替一个元素
```javascript
$('#thatdiv').replaceWith('fnuh');
```

#### 2. 如何找到一个已经被选中的option元素
```javascript
$('#someElement').find('option:selected');
```

#### 3. 如何隐藏一个包含了某个值文本的元素
```javascript
$("p.value:contains('thetextvalue')").hide();
```

#### 4. 如何创建嵌套的过滤器
```javascript
//允许你减少集合中的匹配元素的过滤器，
//只剩下那些与给定的选择器匹配的部分。在这种情况下，
//查询删除了任何没（:not）有（:has）
//包含class为“selected”（.selected）的子节点。
.filter(":not(:has(.selected))")
```

#### 5. 如何检测各种浏览器
- 检测Safari ```(if( $.browser.safari))```
- 检测IE6及之后版本 ```(if ($.browser.msie && $.browser.version > 6 ))```
- 检测IE6及之前版本 ```(if ($.browser.msie && $.browser.version <= 6 ))```
- 检测FireFox 2及之后版本 ```(if ($.browser.mozilla && $.browser.version >= ’1.8′ ))```

#### 6. 任何使用has()来检查某个元素是否包含某个类或是元素
```javascript
//jQuery 1.4.*包含了对这一has方法的支持。
//该方法找出某个元素是否包含了其他另一个元素类或是
//其他任何的你正在查找并要在其之上进行操作的东东。
$("input").has(".email").addClass("email_icon");
```

#### 7. 如何禁用右键单击上下文菜单
```javascript
$(document).bind('contextmenu',function(e){
　　return false;
});
```

#### 8. 如何定义一个定制的选择器
```javascript
$.expr[':'].mycustomselector = function(element, index, meta, stack){
// element- 一个DOM元素
// index – 栈中的当前循环索引
// meta – 有关选择器的元数据
// stack – 要循环的所有元素的栈
// 如果包含了当前元素就返回true
// 如果不包含当前元素就返回false };
// 定制选择器的用法：
$('.someClasses:test').doSomething();
```

#### 9. 如何检查某个元素是否存在
```javascript
f ($('#someDiv').length) {
//万岁！！！它存在……
}
```

#### 10. 如何使用jQuery来检测右键和左键的鼠标单击两种情况
```javascript
$("#someelement").live('click', function(e) {
    if( (!$.browser.msie && e.button == 0) || ($.browser.msie && e.button == 1) ) {
        alert("Left Mouse Button Clicked");
    } else if(e.button == 2) {
        alert("Right Mouse Button Clicked");
    }
});
```

#### 11. 如何替换串中的词
```javascript
var el = $('#id');
el.html(el.html().replace(/word/ig, ''));
```

#### 12. 如何在一段时间之后自动隐藏或关闭元素（支持1.4版本）
```javascript
//这是1.3.2中我们使用setTimeout来实现的方式
setTimeout(function() {
$('.mydiv').hide('blind', {}, 500)
}, 5000);
//而这是在1.4中可以使用delay()这一功能来实现的方式（这很像是休眠）
$(".mydiv").delay(5000).hide('blind', {}, 500);
```

#### 13. 如何把已创建的元素动态地添加到DOM中
```javascript
var newDiv = $('<div></div>');
newDiv.attr('id','myNewDiv').appendTo('body');
```

#### 14. 如何限制“Text-Area”域中的字符的个数
```javascript
jQuery.fn.maxLength = function(max){
    return this.each(function(){
        var type = this.tagName.toLowerCase();
        var inputType = this.type? this.type.toLowerCase() : null;
        if(type == "input" && inputType == "text" || inputType == "password"){
            //Apply the standard maxLength
            this.maxLength = max;
        } else if(type == "textarea"){
            this.onkeypress = function(e){
                var ob = e || event;
                var keyCode = ob.keyCode;
                var hasSelection = document.selection? document.selection.createRange().text.length > 0 : this.selectionStart != this.selectionEnd;
                return !(this.value.length >= max && (keyCode > 50 || keyCode == 32 || keyCode == 0 || keyCode == 13) && !ob.ctrlKey && !ob.altKey && !hasSelection);
            };
            this.onkeyup = function(){
                if(this.value.length > max){
                    this.value = this.value.substring(0,max);
                }
            };
        }
    });
};
//用法
$('#mytextarea').maxLength(500);
```

#### 15. 如何jQuery注册和禁用jQuery全局事件
```javascript
//jQuery注册ajax全局事件ajaxStart，ajaxStop：
$(document).ajaxStart(function(){
    $("#background,#progressBar").show();
}).ajaxStop(function(){
    $("#background,#progressBar").hide();
});
//ajax请求禁用全局事件：$.ajax() 有个参数global (默认: true) 是否触发全局 AJAX 事件.设置为 false 将不会触发全局 AJAX 事件，如 ajaxStart 或 ajaxStop 可用于控制不同的 Ajax 事件
```

#### 16. 如何在jQuery中克隆一个元素
```javascript
var cloned = $('#somediv').clone();
```

#### 17. 在jQuery中如何测试某个元素是否可见
```javascript
if($(element).is(':visible')) {
　　//该元素是可见的
}
```

#### 18. 如何把一个元素放在屏幕的中心位置
```javascript
jQuery.fn.center = function () {
　　return this.each(function(){
　　　　$(this).css({
　　　　　　position:'absolute',
　　　　　　top, ( $(window).height() - this.height() ) / 2 + $(window).scrollTop() + 'px',
　　　　　　left, ( $(window).width() - this.width() ) / 2 + $(window).scrollLeft() + 'px'
　　　　});
　　});
}
//这样来使用上面的函数：
$(element).center();
```

#### 19. 如何把有着某个特定名称的所有元素的值都放到一个数组中
```javascript
var arrInputValues = new Array();
$("input[name='xxx']").each(function(){
　　arrInputValues.push($(this).val());
});
```

#### 20. 如何从元素中除去HTML
```javascript
(function($) {
$.fn.stripHtml = function() {
　　var regexp = /<("[^"]*"|'[^']*'|[^'">])*>/gi;
　　this.each(function() {
　　　　$(this).html( $(this).html().replace(regexp,'') );
　　});
　　return $(this);
}
})(jQuery);
//用法：
$('p').stripHtml();
```

#### 21. 如何使用closest来取得父元素
```javascript
$('#searchBox').closest('div');
```

#### 22. 如何使用Firebug和Firefox来记录jQuery事件日志
```javascript
// 允许链式日志记录
jQuery.log = jQuery.fn.log = function (msg) {
　　if (console){
　　　　console.log("%s: %o", msg, this);
　　}
　　return this;
};
// 用法：
$('#someDiv').hide().log('div hidden').addClass('someClass');
```

#### 23. 如何强制在弹出窗口中打开链接
```javascript
$('a.popup').live('click', function(){
　　var newwindow = window.open($(this).attr('href'),'','height=200,width=150');
　　if (window.focus) {
　　　　newwindow.focus();
　　}
　　return false;
});
```

#### 24. 如何强制在新的选项卡中打开链接
```javascript
$('a.newTab').live('click', function(){
　　var newwindow=window.open(this.href);
　　$(this).target = "_blank";
　　return false;
});
```

#### 25. 在jQuery中如何使用.siblings()来选择同辈元素
```javascript
// 不这样做
$('#nav li').click(function(){
　　$('#nav li').removeClass('active');
　　$(this).addClass('active');
});
//替代做法是
$('#nav li').click(function(){
　　$(this).addClass('active').siblings().removeClass('active');
})
```
