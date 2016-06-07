# Location object

## Properties
e.g.: https://www.google.com/webhp?hl=zh-CN&safe=off#newwindow=1&safe=off&hl=zh-CN&q=hash

- hash: "#newwindow=1&safe=off&hl=zh-CN&q=hash"
- host: "www.google.com"
- hostname: "www.google.com"
- href: "https://www.google.com/webhp?hl=zh-CN&safe=off#newwindow=1&safe=off&hl=zh-CN&q=hash"
- origin: "https://www.google.com"
- pathname: "/webhp"
- port: ""
- protocol: "https:"
- search: "?hl=zh-CN&safe=off"

## Methods
- assign(url)
- replace(url)
- reload()

e.g.
```javascript
location.assign("https://www.google.com"); // 打开URL
location.href = "https://www.google.com"; // 隐式调用assign()
```
> hash, search, hostname, pathname, port 的修改都会打开新的URL，对于hash而言会修改锚(history.length会+1)
> - location.assign() 可以返回之前的URL
> - location.replace() 不可以返回之前的URL
> - location.reload() 不加参数，可能会读取缓存，加上true，强制从服务器更新

## Standard
- [The Location interface](https://html.spec.whatwg.org/multipage/browsers.html#the-location-interface)
