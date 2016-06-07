# History object

## Properties
- length: 历史记录数目
- state:

## Methods
- go([ delta ]): 传0，刷新当前页面
- back(): 相当于go(-1)
- forward(): 相当于go(1)
- pushState(data, title [, url ]): 增加一条新的历史记录，修改地址栏URL，但不会打开URL
- replaceState(data, title [, url ]): 修改当前历史记录(history.length不会+1)和地址栏URL，不会打开URL

> pushState()/replaceState()中传入的URL必须与原页面同源，否则报错`Uncaught SecurityError`

## Events
- 历史记录变化会触发`popstate`事件，通过pushState()和replaceState()修改state不会
- hash变化会触发`hashchange`事件

## Standard
- [The History interface](https://html.spec.whatwg.org/multipage/browsers.html#the-history-interface)
