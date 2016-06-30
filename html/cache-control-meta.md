HTTP 1.0 中的缓存控制：`Pragma`, `Expires`(Pragma的优先级大于Expires)
```html
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="expires" content="-1">
```

HTTP 1.1 中的缓存控制：`Cache-Control`, `Last-Modified`, `ETag`
HTML meta 标签与HTTP头中的 `Cache-Control` 对应
```html
<meta http-equiv="Cache-control" content="public">
<meta http-equiv="Cache-control" content="private">
<meta http-equiv="Cache-control" content="no-cache">
<meta http-equiv="Cache-control" content="no-store">
```

public: 可以被缓存在公众共享缓存
private: 只可以被缓存在私人缓存里面
no-cache: 不缓存
no-store: 缓存但不存档

> **禁止百度移动搜索对网页进行转码的方法**
> 如果站长不希望自己的站点被转码、依然希望手机端用户浏览PC页该如何操作呢？
> 可以使用 `no-transform` 协议，`no-transform` 协议为如下两种形式：
> 第一种，HTTP Response中显式声明 `Cache-control` 为 `no-transform`。
> 第二种，meta标签中显式声明 `Cache-control` 为 `no-transform`，格式为：
> <head>
>  <meta http-equiv="Cache-Control" content="no-transform">
> </head>
> http://zhanzhang.baidu.com/college/courseinfo?id=156&page=4#h2_article_title1


http header vs html meta

单对浏览器来说，这两者的效果应该是相同的。不同之处在这两者对CDN等中间代理的影响不同，html中的meta标签的http-equiv属性只影响浏览器，而响应头中的相关属性除了影响浏览器，也可能会影响到这些中间代理处理缓存的方式。

- [HTTP caching](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching)
- [Caching Tutorial](https://www.mnot.net/cache_docs/)
- [翻译：web制作、开发人员需知的Web缓存知识](http://www.zhangxinxu.com/wordpress/2013/05/caching-tutorial-for-web-authors-and-webmasters/)
- [浅谈浏览器http的缓存机制](http://www.cnblogs.com/vajoy/p/5341664.html)
- [浏览器缓存机制](http://www.cnblogs.com/skynet/archive/2012/11/28/2792503.html)
- [非HTTP协议定义的缓存机制](http://www.cnblogs.com/zichi/p/4685822.html)
- [浅谈Web缓存](http://www.alloyteam.com/2016/03/discussion-on-web-caching/)
