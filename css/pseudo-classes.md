## 伪类(pseudo classes)
语法:
```css
selector:pseudo-class {
  property: value;
}
```

## 伪元素(pseudo elements)
语法:
```css
selector::pseudo-element {
  property: value;
}
```

```css
::before (:before)
element::before { style properties }  /* CSS3 syntax */
element:before  { style properties }  /* CSS2 obsolete syntax (only needed to support IE8) */
p::before { content: "Hello world!"; } /* inserts content before every p element */
```
