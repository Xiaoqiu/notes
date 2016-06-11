# HTTP缓存
## Expires
资源过期时间

## Cache-Control
可以通过修改资源的Header定义不同的缓存策略。  
- `no-cache` / `no-store`
- `public` / `private`
- `max-age`
- `must-revalidate`

默认值为 `private`

详见[HTTP/1.1 规范](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9)


一个例子
```text
cache-control:must_revalidate, public, max-age=3600
```

## ETag
服务器验证ETag令牌是否修改，如果没有修改则返回`304 Not Modified`。

## 防止缓存
在资源的文件名中加入版本号或者指纹/hash


Last-Modified
