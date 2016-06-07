# WebP
只有Chrome、Opera和Android原生支持，iOS不支持

## Usage:
```shell
cwebp [options] -q quality input.png -o output.webp
```
where quality is between 0 (poor) to 100 (very good).
Typical value is around 80.

示例
```shell
cwebp -q 50 -lossless Q1-3.png -o Q1-3.webp
```

## Reference
- [WebP 探寻之路](http://isux.tencent.com/introduction-of-webp.html)
- [Optimizing content efficiency](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization)
