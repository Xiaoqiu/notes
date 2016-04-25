## 1. tel & mailto

```html
<a href="tel:12345678900">12345678900</a>     <!-- 电话 -->
<a href="mailto:abc@abc.com">abc@abc.com</a>  <!-- 邮件 -->
```
Chrome、Safari 中默认支持`a`标签的tel和mailto协议，在 WebView 中需要[额外修改](https://stackoverflow.com/questions/24697429/getting-neterr-unknown-url-scheme-while-calling-telephone-number-from-html-pag
)，否则无法识别：
```text
Webpage not available
The webpage at tel:12345678900 could not be loaded because:
net::ERR_UNKNOWN_URL_SCHEME
```
