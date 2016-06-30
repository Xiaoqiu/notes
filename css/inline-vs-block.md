# block-level vs. inline
## [块级(block-level)元素](https://developer.mozilla.org/en/docs/Web/HTML/Block-level_elements)
- 一个块级元素会新开始一行并且尽可能撑满容器。
- 常用的块级元素: div, h1-h6, p, form, ul, li, table 和 HTML5中的header, footer, section等

## [行内(inline)元素](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elemente)
- 一个行内元素可以在段落中包裹一些文字而不会打乱段落的布局。
- 常用的行内元素: span, a, img, input, label, select, textarea等


行内元素设置 `margin-top` / `margin-bottom` 和 `width` / `height` 无效。
行内元素设置 `padding-top` 和 `padding-bottom` 不会影响元素的行高位置(不会下移)

设置 display: inline-block; 在行内显示，又能设置宽高

对于input这种替换元素，margin和padding各方向均有作用，
对于span，a等这些不可替换元素，margin-top/margin-bottom无效。

置换和非置换元素


- [置换和非置换元素](http://blog.doyoe.com/2015/03/15/css/置换和非置换元素/)
