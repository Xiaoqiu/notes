## 1. 浏览器渲染页面的过程


## 2. 浏览器兼容问题
- 盒模型
- IE的 `Quirks Mode` 和 `Standards Mode`
- 不同IE版本对HTML5、Web API的支持程度不同

## 3. 盒模型
- 盒模型（margin-border-padding-content）
 - W3C标准盒模型：width = contentWidth
 - IE盒模型：width = contentWidth + paddingWidth + borderWidth
- CSS3中的`box-sizing: border-box;`说明还是IE盒模型更符合大多数人的需求。

## 4. 跨域
- CORS
- JSONP

window.postMessage

## 5. 浏览器缓存
- 离线缓存 localStorage
