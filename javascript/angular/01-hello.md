
HTML，也就是 `template`，AngularJS 在启动时会使用 `compiler` 对其进行编译，渲染DOM。

1. `directive`

- `ng-app` 属性关联了自动初始化应用的指令
- `ng-model` 属性存储和更新绑定值

2. `{{ expression | filter }}`

- `expression` 是一段类似于 JavaScript 的代码，允许 AngularJS 读写变量（这些变量不是全局的）
- `filter` 可以对 `expression` 的值进行格式化
