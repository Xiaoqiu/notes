# DOM

## Node节点
- parentNode
- childNodes
- firstNode
- previousSibling
- nextSibling

方法
- cloneNode()
- normalize()

## document
### 文档节点
- `document`: 文档根节点
- `document.documentElement`: <html>的引用
- `document.doctype`: <!DOCTYPE html>的引用
- `document.head`: <head>的引用
- `document.body`: <body>的引用
- `document.title`: <title>的引用

### 文档信息
- `document.URL`: URL
- `document.domain`: 域名
- `document.referrer`: 来源页面的URL，包含在请求的HTTP Header里

### 文档方法
#### 1）创建新节点
- `createElement()`: 创建元素
- `createTextNode()`: 创建文本节点
- `createComment()`: 创建注释
- `createDocumentFragment()`: 创建文档片段

#### 2）操作节点
- `appendChild()`: 添加
- `replaceChild()`: 替换
- `removeChild()`: 移除
- `insertBefore()`: 插入

#### 3）文档写入
- `document.write()`: 向文档写入内容
- `document.writeln()`: 向文档写入内容
- `document.open()`: 打开文档输出流
- `document.close()`: 关闭文档输出流

#### 4）查找
- `document.getElementById()`: 通过元素Id
- `document.getElementsByTagName()`: 通过标签名称
- `document.getElementsByName()`: 通过元素的Name属性的值
- `document.getElementByClassName()`: 通过类名

#### 5）焦点
- `document.activeElement`
- `document.hasFocus()`

## element
### attributes
- `element.getAttribute()`
- `element.setAttribute()`
- `element.removeAttribute()`

### selector
- `element.querySelector()`
- `element.querySelectorAll()`

### classList
- `classList.add()`
- `classList.contains()`
- `classList.remove()`
- `classList.toggle()`
