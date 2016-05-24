常用的行内元素有：span、a、b、img、strong、em、input、label、select、textarea等。
常用的块级元素有：div、h1-h6、hr、p、ul、ol、li、table、form等

行内元素设置mrgin-top/margin-bottom和width/height无效。
行内元素设置 padding-top 和 padding-bottom 不会影响元素的行高位置(不会下移)

设置 display: inline-block; 在行内显示，又能设置宽高

对于input这种替换元素，margin和padding各方向均有作用，
对于span，a等这些不可替换元素，mrgin-top/margin-bottom无效。
