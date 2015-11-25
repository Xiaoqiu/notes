#Compress PNGs
- 使用tinypng.com，压缩效果超过pngquant（有gulp-tinypng，申请API每月免费压缩500张，需要联网上传）
- 使用gulp

在gulp中， 
imagemin 780KB -> 586KB  
pngquant 780KB -> 336KB  
所以如果需要压缩PNG图片，使用imagemin+pngquant。

#Use WebP
同等清晰度下WebP比PNG更小，不过只有Chrome/Opera和Android原生支持，Safari和iOS默认不支持。
