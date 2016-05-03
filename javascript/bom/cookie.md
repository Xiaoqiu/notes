# Cookie

## 服务器端创建 Cookie
Web 服务器通过发送 `Set-Cookie` 的 HTTP 消息头，来创建 Cookie。其格式如下：
```
Set-Cookie: value[; expires=date][; domain=domain][; path=path][; secure]
```
创建后，Cookie 的值会在随后的每次请求中被发送到服务器。

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

## 修改 Cookie
要修改当前的 Cookie 值，需要发送另一个具有相同 cookie name，domain，path 的 Set-Cookie 消息头。
修改 Cookie 参数的任意一项都将创建一个完全不同的新 Cookie。

```
Cookie:connect.sid=s%3ANi_C1c44YBdkpsZttRuBAAOP4jTZ0roP.cpuQL0mGAh14h5%2FSKL5MxEBjg52H%2Bb%2FFA2MYK33IVV4
```

- 不同浏览器上 Cookie 大小（4KB 左右）和数量的限制（原始规范中限定每个域名下不超过 20 个 Cookie）
- 读、写 Cookie
- Cookie 过期会被自动清除
- 会被发送到服务器，增加网络带宽的消耗
- 不够安全

# Session
- connect.sid

## Reference
- [JavaScript 操作 Cookie](http://www.cnblogs.com/Darren_code/archive/2011/11/24/Cookie.html)
- [express中session设置secret后整体流程是什么？](https://cnodejs.org/topic/55c37de8b98f51142b367aba)
- [Browser Cookie Limits](http://browsercookielimits.squawky.net/)
- [cookie 和 session](https://github.com/alsotang/node-lessons/tree/master/lesson16)
- [详说 Cookie, LocalStorage 与 SessionStorage](http://jerryzou.com/posts/cookie-and-web-storage/)

# Web Storage
分为 `sessionStorage` 和 `localStorage`。


## Standard
- [Web storage](https://html.spec.whatwg.org/multipage/webstorage.html)

## Methods
- localStorage.setItem('colorSetting', '#a4509b');
- localStorage.getItem('colorSetting');
- localStorage.removeItem('colorSetting');
- localStorage.clear();
