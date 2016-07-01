
使用 `ng-init` 初始化数据
```html
<div ng-app ng-init="name='John'">
  <p>名字 : <input type="text" ng-model="name"></p>
  <h1>Hello {{name}}</h1>
</div>
```

使用 `ng-controller` 初始化数据
```html
<div ng-app="myApp" ng-controller="myCtrl">
  <p>名字 : <input type="text" ng-model="name"></p>
  <h1>Hello {{name}}</h1>
</div>
```

```javascript
var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
  $scope.name = "John";
});
```
