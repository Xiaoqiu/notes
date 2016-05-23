# box-sizing

默认值，width和height属性不受padding和border影响。  
实际页面中元素的实际宽度是4者相加的结果。
```css
box-sizing: content-box;
```

width和height属性包括了padding和border。  
padding和border的改变不会对实际宽度造成影响。
```css
box-sizing: border-box;
```

Demo见[JSFiddle](https://jsfiddle.net/keqingrong/sqky3wwa/)
