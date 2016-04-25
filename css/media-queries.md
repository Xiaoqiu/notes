# Media Queries（媒体查询）

## Standard
- [Media Queries](https://www.w3.org/TR/css3-mediaqueries/)
- [Media Queries Level 4](https://drafts.csswg.org/mediaqueries-4/)

## Reference
- [Use CSS media queries for responsiveness
](https://developers.google.com/web/fundamentals/design-and-ui/responsive/fundamentals/use-media-queries)
- [Media Queries for Standard Devices](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)

## Syntax
```css
@media not|only mediatype and (media feature) {
    CSS-Code;
}
```
或者
```html
<link rel="stylesheet" media="mediatype and|not|only (media feature)" href="style.css">
```

### MediaType
- `all`: Used for all media type devices
- `screen`: Used for computer screens, tablets, smart-phones etc.
- `print`: Used for printers
- `speech`: Used for screenreaders that "reads" the page out loud

## Examples
```css
/* 移动设备且屏幕宽度400px以内有效 */
@media screen and (max-device-width: 400px) {

}

/* 移动设备且窗口宽度400px以内有效 */
@media screen and (max-width: 400px) {

}
```
