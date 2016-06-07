# "user agent stylesheet"
不同的浏览器设置了不同的缺省CSS规则，优先级低于网页指定的CSS样式（display默认值为inline）。

```css
div {
  display: block;
}

body {
  display: block;
  margin: 8px;
}
```

```css
body,p,h1,h2,h3,h4,h5,h6,ul,ol,dl,dd{margin:0;}
ul,ol{padding:0;}
```
