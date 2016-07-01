# 指令
AngularJS 指令是扩展的 HTML 属性，带有前缀 `ng-`
- `ng-app` 指令初始化一个 AngularJS 应用程序
- `ng-init` 指令初始化应用程序数据
- `ng-model` 指令把元素值（比如输入域的值）绑定到应用程序
- `ng-repeat` 指令遍历元素（对象或数组）

## 自定义指令
### 定义
```javascript
app.directive("myDirective", function() {
    return {
        template : "<h1>自定义指令</h1>"
    };
});
```

### 使用方式
4种：元素、属性、类名、注释
```html
<my-directive></my-directive>
<div my-directive></div>
<div class="my-directive"></div>
<!-- directive: my-directive -->
```

### 限制指令的使用方式
设置 `restrict` 属性，默认为 `EA`
- `E` 只限元素名使用
- `A` 只限属性使用
- `C` 只限类名使用
- `M` 只限注释使用

```javascript
app.directive("myDirective", function() {
    return {
        restrict : "A",
        template : "<h1>自定义指令</h1>"
    };
});
```

使用类名或者注释的方式使用指令，必须设置 `restrict`属性，注释还必须设置 `replace` 值 为 `true`
