# Media Queries（媒体查询）
媒体类型 + 查询条件

## 1. Standard
- [Media Queries](https://www.w3.org/TR/css3-mediaqueries/)
- [Media Queries Level 4](https://drafts.csswg.org/mediaqueries-4/)

## 2. Reference
- [Use CSS media queries for responsiveness
](https://developers.google.com/web/fundamentals/design-and-ui/responsive/fundamentals/use-media-queries)
- [Media Queries for Standard Devices](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
- [@media - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)

## 3. Syntax
```css
@media not|only mediatype and (media feature) {
    CSS-Code;
}
```

或者
```html
/* 不符合规则的CSS文件依然会下载，只是不生效 */
<link rel="stylesheet" media="mediatype and|not|only (media feature)" href="style.css">
```

### 3.1 Media type
- `all`: Used for all media type devices
- `screen`: Used for computer screens, tablets, smart-phones etc.
- `print`: Used for printers
- `speech`: Used for screenreaders that "reads" the page out loud

## 3.2 Media feature
- width | min-width | max-width
- height | min-height | max-height
- device-width | min-device-width | max-device-width
- device-height | min-device-height | max-device-height
- aspect-ratio | min-aspect-ratio | max-aspect-ratio
- device-aspect-ratio | min-device-aspect-ratio | max-device-aspect-ratio
- color | min-color | max-color
- color-index | min-color-index | max-color-index
- monochrome | min-monochrome | max-monochrome
- resolution | min-resolution | max-resolution
- scan | grid

## 4. Examples
```css
/* 移动设备且屏幕宽度400px以内有效 */
@media screen and (max-device-width: 400px) {

}

/* 移动设备或者阅读器且窗口宽度400px以内有效 */
@media screen, print and (max-width: 400px) {

}
```
