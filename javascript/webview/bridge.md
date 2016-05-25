## for iOS
### JavaScript -> Native
在 JavaScript 将信息发给 Native:
```Objective-C
window.webkit.messageHandlers.<name>.postMessage();
```

### Native -> JavaScript
类似JSONP

## for Android
### JavaScript -> Native
1. addJavascriptInterface/@JavascriptInterface (JS调用Java方法)
2. 自定义URL 
3. JsAlert
4. 搭建本地HTTP服务器

### Native -> JavaScript
