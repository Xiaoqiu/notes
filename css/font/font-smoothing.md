字体抗锯齿技术可以分为如下几类：

- 黑白渲染：现在已经绝迹。
- 灰度渲染：常用于Android和iOS等移动设备。
- 亚像素渲染：常见于Mac OS和MacType For Windows。
- ClearType：黑白渲染和亚像素渲染的折中。WinXP内置，默认关闭；Win7以上默认打开。

通常情况下 `-webkit-font-smoothing` 只会在 Mac OS X上才会有效果。  
字小的情况下 `subpixel-antialiased` 和 `antialiased` 有区别。

```css
-webkit-font-smoothing: none | antialiased | subpixel-antialiased
-moz-osx-font-smoothing: auto | inherit | grayscale
```

例子
```css
.none {
  /* 不平滑，字体具有锯齿锋利边缘，适用于小像素的文本 */
  -webkit-font-smoothing: none; /* 有锯齿 */
}

.subpixel-antialiased {
  /* 使用亚像素渲染 */
  -webkit-font-smoothing: subpixel-antialiased; /* 默认 */
}

.antialiased {
  /* 使用灰度渲染，适用于icon font */
  -webkit-font-smoothing: antialiased; /* 去除hint, 稍细 */
  -moz-osx-font-smoothing: grayscale;
}
``
