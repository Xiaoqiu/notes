## W3C盒模型
```css
/*盒子需要占据的位置为*/
width  = margin + border + padding + content.width;
hright = margin + border + padding + content.height;
/*盒子的实际大小为*/
width  = border + padding + content.width;
hright = border + padding + content.height;
```

## IE6之前的浏览器或者 quirks mode（混杂模式）下的盒模型
```css
/*盒子需要占据的位置为*/
width  = margin + content.width;
hright = margin + content.height;
/*盒子的实际大小为*/
width  = content.width;
hright = content.height;
```
