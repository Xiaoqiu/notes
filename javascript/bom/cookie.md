# Cookie

## 1. 基础知识
- 不同浏览器上 Cookie 的大小（4KB 左右）和数量有限制（原始规范中限定每个域名下不超过 20 个 Cookie）
- Cookie 最终是以文件形式存放在客户端计算机中（不安全，容易被修改）
- Cookie 每次都会被发送到服务器，会增加网络带宽的消耗
- Cookie 过期会被自动清除

## 2.1 服务器端创建 Cookie
Web 服务器通过发送 `Set-Cookie` 的 HTTP 消息头，来创建 Cookie。其格式如下：
```
Set-Cookie: <name>=<value>[; <Max-Age>=<age>][; expires=<date>][; domain=<domain_name>][; path=<some_path>][; secure][; HttpOnly]
```
创建后，Cookie 的值会在随后的每次请求中被发送到服务器。

### maxAge
`maxAge` 参数指定了 Cookie 多久后过期的相对时间。

### expires
- 省略 `expires` 参数，即默认情况下，Cookie 的生命周期仅限于当前会话，浏览器关闭后，Cookie 就被清除。
- 如果设置了过期时间，则到该时间后，Cookie 被清除。根据这一特性，可以将 Cookie 的过期时间设置为过去的时间点，来删除 Cookie。

### domain
`domain` 指定了 Cookie 将要被发送至哪个或哪些域中。
`domain` 的设置规则：
- 省略 `domain` 参数，则默认为当前域名
- `domain` 参数可以被设置为当前域名或者父域名，不能设置为其他域名（包括当前域名的子域名）

与 `domain` 的设置相对应，Cookie 的作用域只能是 `domain` 本身及其所有子域名。

```
Set-Cookie: name=kerr; domain=example.com
```

### path
`path` 参数指定了请求的资源 URL 中必须存在指定的路径时，才会发送 Cookie。首先需要 `domain` 符合。

### secure
默认情况下，通过 HTTPS 协议传输的 cookie 都会被自动添加上 secure 参数。

### HttpOnly
如果设置了 `HttpOnly` 参数，则不能通过 `documen.coookie` 访问该 Cookie。

## 2.2 服务器端修改 Cookie
要修改当前的 Cookie 值，需要发送另一个具有相同 cookie name，domain，path 的 Set-Cookie 消息头。
修改 Cookie 参数的任意一项都将创建一个完全不同的新 Cookie。

## 3. Web APIs
JavaScript 可以通过 `document.cookie` 来访问和修改 Cookie。  
Cookie 值如果包含中文等字符，存取操作时需要使用 `encodeURIComponent`/`decodeURIComponent` 进行编码/解码。

### 1. 获取当前页面所有的 Cookie 值
```javascript
var cookies = document.cookie; // 取出的 cookies 为 string 类型
console.log('cookies', cookies);
```

### 2. 存 Cookie 值
```javascript
document.cookie  = 'username=John';
```

### 3. 设置 Cookie 有效期
`expires` 值为UTC/GMT格式的日期型字符串。
```javascript
var expiresDate = new Date().toUTCString();
document.cookie  = 'username=John; expires=' + expiresDate;
```

### 4. 清除 Cookie
借助 Cookie 的有效期，将 `expires` 设置为过去的时间点。
```javascript
document.cookie  = 'username=John; expires=Thu, 01 Jan 1970 00:00:00 GMT';
```

# Session
Session 的运作通过 `session_id` 进行。`session_id` 通常存放在客户端的 Cookie 中。  
在 Express 中，默认是 `connect.sid` 字段。

```
Cookie:connect.sid=s%3ANi_C1c44YBdkpsZttRuBAAOP4jTZ0roP.cpuQL0mGAh14h5%2FSKL5MxEBjg52H%2Bb%2FFA2MYK33IVV4
```

## Session 的存放
session 的存放可以选择
- 内存
- Cookie
- Redis 或 Memcached 等缓存
- 数据库

## `express-session`
`express-session` 模块主要的方法就是 session(options)，其中 options 中包含可选参数，主要有：
- name: 设置 cookie 中，保存 session 的字段名称，默认为 connect.sid 。
- store: session 的存储方式，默认存放在内存中，也可以使用 redis，mongodb 等。express 生态中都有相应模块的支持。
- secret: 通过设置的 secret 字符串，来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改。
- cookie: 设置存放 session id 的 cookie 的相关选项，默认为
  `(default: { path: '/', httpOnly: true, secure: false, maxAge: null })``
- genid: 产生一个新的 session_id 时，所使用的函数， 默认使用 uid2 这个 npm 包。
- rolling: 每个请求都重新设置一个 cookie，默认为 false。
- resave: 即使 session 没有被修改，也保存 session 值，默认为 true。
> 原文: https://github.com/alsotang/node-lessons/tree/master/lesson16

## Reference
- [Cookie - HTTP State Management Mechanism](https://tools.ietf.org/html/rfc6265)
- [Browser Cookie Limits](http://browsercookielimits.squawky.net/)
- [HTTP cookies explained](https://www.nczonline.net/blog/2009/05/05/http-cookies-explained/)
- [JavaScript 操作 Cookie](http://www.cnblogs.com/Darren_code/archive/2011/11/24/Cookie.html)
- [cookie 和 session](https://github.com/alsotang/node-lessons/tree/master/lesson16)
- [express中session设置secret后整体流程是什么？](https://cnodejs.org/topic/55c37de8b98f51142b367aba)
- [详说 Cookie, LocalStorage 与 SessionStorage](http://jerryzou.com/posts/cookie-and-web-storage/)
- [跨终端跨域的存储方案](https://github.com/luics/storage/wiki/Storage)
- [Cookies](http://www.quirksmode.org/js/cookies.html)
