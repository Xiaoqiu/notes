## 1. 列举所有让块元素水平方向排列的方法

## 2. 如何让背景图片不随页面一起滚动？

## 3. 能否按优先级列举CSS选择器类型？

## 4. 简述盒子模型

## 5. 简述CSS的两种加载方式：link和@import的区别
- 使用 `link` 标签引入的CSS文件，浏览器会并行下载
- 使用 `@import` 语法引入的CSS文件，会在页面所有资源加载完毕后下载
- CSS优先级与下载顺序无关

## 6. css的position属性有哪些取值，它们的行为是什么？
position属性常用的取值static、relative以及absolute和它们的基本行为是每个前端都应该掌握的。这包括relative和absolute的定位原点

## 7. 圣杯布局和双飞翼布局的原理是什么？区别是什么？

## 8. 外边距重叠
根据 BFC 的定义，两个元素只有在同一 BFC 内，才有可能发生垂直外边距的重叠，包括相邻元素、嵌套元素。要解决 margin 重叠问题，只要让它们不在同一个 BFC 内就行。对于相邻元素，只要给它们加上 BFC 的外壳，就能使它们的 margin 不重叠；对于嵌套元素，只要让父级元素触发 BFC，就能使父级 margin 和当前元素的 margin 不重叠。

触发父元素的block formatting context即可，触发的方法：
1. float不为none
2. overflow不为visible
3. display设为‘table-cell’, ‘table-caption’, 或‘inline-block’
4. position既不是static也不是relative
5. zoom:1, IE的hasLayout特性会建立一个新的block formatting context

[外边距叠加collapsing-margin](http://www.smallni.com/collapsing-margin/)
[CSS概念 - 可视化格式模型（一） 盒模型与外边距叠加](http://www.cnblogs.com/blackwood/archive/2013/07/03/3169023.html)

## 9. IE6下margin双倍边距BUG

## 10. 如何处理手机屏幕尺寸问题

## 11. 列出三种让元素垂直居中的方法（父元素高度固定）
