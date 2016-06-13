## 清除浮动

- Method 1: using an empty element

```css
.clear {
  clear: both;
}
```

- Method 2: using the overflow property

```css
.clearfix {
  overflow: auto;
  zoom: 1; /* IE 6/7 */
}
```

- Method 3-1: using the CSS pseudo-elements

```css
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
}

.clearfix {
  zoom: 1;
}
```

- Method 3-2

```css
.clearfix:after {
   content: " "; /* Older browser do not support empty content */
   display: block;
   height: 0;
   clear: both;
   visibility: hidden;
}
```

- Method 3-3

```css
.clearfix:after {
    content: "\200B";
    display: block;
    height: 0;
    clear: both;
}

.clearfix {
  zoom: 1;
}
```

- Method 4: or just need to support IE 8 and up

```css
.clearfix:after {
    content: "";
    display: table;
    clear: both;
}
```

## Reference
- [那些年我们一起清除过的浮动](http://www.iyunlu.com/view/css-xhtml/55.html)
- [clearfix改良及overflow:hidden详解](http://www.iyunlu.com/view/css-xhtml/56.html)
- [对overflow与zoom”清除浮动”的一些认识](http://www.zhangxinxu.com/wordpress/2010/01/对overflow与zoom清除浮动的一些认识/)
- https://css-tricks.com/snippets/html/
