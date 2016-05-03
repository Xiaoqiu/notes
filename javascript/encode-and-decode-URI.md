
```javascript
escape('https://www.google.com/');
unescape('https%3A//www.google.com/');
```

```javascript
encodeURI('https://www.google.com/webhp=?q=哈哈');
decodeURI('https://www.google.com/webhp=?q=%E5%93%88%E5%93%88')
```

```javascript
encodeURIComponent('哈哈');
decodeURLComponent('%E5%93%88%E5%93%88');
```

`encodeURIComponent()`会对- _ . ! ~ * ' ( )等标点进行转码, `encodeURI()`不会
