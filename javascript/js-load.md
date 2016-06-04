# JavaScript 延迟加载的方式

1. 将script放在body最后
2. 使用script的defer属性
3. 在window的load事件触发后，动态增加script节点
4. 使用Ajax加载脚本，动态增加script节点（会有下载两次的问题）

```Javascript
function loadJS(url){
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
```

## Reference
> - [Javascript 装载和执行](http://coolshell.cn/articles/9749.html)
> - [浏览器阻塞探究](https://github.com/ericdum/mujiang.info/issues/2)
> - [网站优化之异步加载JavaScript](https://github.com/vino24/blog/issues/31)
> - [JavaScript 的性能优化：加载和执行](https://www.ibm.com/developerworks/cn/web/1308_caiys_jsload/)
> - [4.12.1 The script element](https://html.spec.whatwg.org/multipage/scripting.html#the-script-element), WHATWG
