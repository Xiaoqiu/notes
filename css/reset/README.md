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

input {
  -webkit-appearance: textfield;
  background-color: white;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  -webkit-rtl-ordering: logical;
  -webkit-user-select: text;
  cursor: auto;
  padding: 1px;
  border-width: 2px;
  border-style: inset;
  border-color: initial;
}

textarea {
  -webkit-appearance: textarea;
  background-color: white;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  -webkit-rtl-ordering: logical;
  -webkit-user-select: text;
  flex-direction: column;
  resize: auto;
  cursor: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  border-width: 1px;
  border-style: solid;
  border-color: initial;
  padding: 2px;
}
```

```css
body,p,h1,h2,h3,h4,h5,h6,ul,ol,dl,dd{margin:0;}
ul,ol{padding:0;}

input, textarea {
  outline: none;
}
```
