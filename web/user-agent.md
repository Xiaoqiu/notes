#Something about User-Agent
##1. Distinguish between Safari and Chrome
- Chrome's User-Agent
```
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2549.0 Safari/537.36
```
- Safari's User-Agent
```
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.7 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.7
```
由于Chrome的User-Agent包含字符串`Safari`，所以只有`Safari`而没有`Chrome`字样的浏览器才是真Safari。
``` javascript
var ua = navigator.userAgent;
var isSafari = (ua.indexOf('Safari') !== -1) && (ua.indexOf('Chrome') === -1);
```

##2. Distinguish other devices
``` javascript
var ua = navigator.userAgent;
var isMobile = ua.indexOf('Mobile') !== -1;
var isWeChat = ua.indexOf('MicroMessenger') !== -1;  // 无法判断WinPhone版微信
var isiPhone = ua.indexOf('iPhone') !== -1;
var isAndroid = ua.indexOf('Android') !== -1;
```

##P.S.
也可以使用正则表达式判断设备种类，不过字符串操作要比正则表达式效率更高。
``` javascript
/(iP(hone|ad))/i.test(navigator.userAgent)
```

判断微信
```javascript
function isWechat() {
    return navigator.userAgent.indexOf('MicroMessenger') !==-1 || typeof navigator.wxuserAgent !== 'undefined';
}

// 需要延迟判断
setTimeout(function() {
  if(isWechat()) {
    //
  } else {
     //
  }
}, 2000);
```
