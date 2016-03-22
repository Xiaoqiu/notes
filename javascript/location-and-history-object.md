# Location object

## properties
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

## methods
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

# History object

## properties
- length: 历史记录数目
- state: 

## methods
- go([ delta ]): 传0，刷新当前页面
- back(): 相当于go(-1)
- forward(): 相当于go(1)
- pushState(data, title [, url ]): 增加一条新的历史记录，修改地址栏URL，但不会打开URL
- replaceState(data, title [, url ]): 修改当前历史记录(history.length不会+1)和地址栏URL，不会打开URL

> pushState()/replaceState()中传入的URL必须与原页面同源，否则报错`Uncaught SecurityError`
> 历史记录变化会触发`popstate`事件，通过pushState()和replaceState()修改state不会
> hash变化会触发`hashchange`事件

