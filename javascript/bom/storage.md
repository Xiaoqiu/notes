# Web Storage
## 1. 基础知识
- 分为 `sessionStorage` 和 `localStorage`
 - `sessionStorage`: 仅在当前会话下有效，关闭页面或浏览器后被清除
 - `localStorage`: 除非被清除，否则永久保存
- 大小一般为 5MB
- 仅在客户端（即浏览器）中保存，不参与和服务器的通信

## 2. Standard
- [Web storage](https://html.spec.whatwg.org/multipage/webstorage.html)

## 3. Methods
- localStorage.setItem('colorSetting', '#a4509b');
- localStorage.getItem('colorSetting');
- localStorage.removeItem('colorSetting');
- localStorage.clear();

## 4. 应用场景
- Cookie: 保存用户登录信息
- localStorage: 缓存数据，如保存购物车信息
- sessionStorage: 缓存临时数据，如保存内容较多的表单内容

## Example
```javascript
function storageAvailable(type) {
    try {
        var storage = window[type],
            x       = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return false;
    }
}

if (storageAvailable('localStorage')) {
    console.info('localStorage is supported');

    localStorage.colorSetting = '#a4509b';
    localStorage['colorSetting'] = '#a4509b';
    localStorage.setItem('colorSetting', '#a4509b');

    localStorage.getItem('colorSetting');
    localStorage.removeItem('colorSetting');
    localStorage.clear();
} else {
    console.warn('localStorage is not supported');
}
```

## Issues
1. Uncaught SecurityError: Failed to read the 'localStorage' property from 'Window': Access is denied for this document.
问题出现的原因是浏览器设置了“Block sites from setting any data(阻止第三方cookie和网站数据)”


## Reference
> - https://stackoverflow.com/questions/14555347/html5-localstorage-error-with-safari-quota-exceeded-err-dom-exception-22-an
> - [IOS下使用Storage时的一个坑](http://shiqianmiao.github.io/javascript/2014/07/16/ios_safari_private_mode/)
> - [store.js](https://github.com/marcuswestin/store.js)
