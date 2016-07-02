## Ionic

安装, 需要 Node.js 环境
```shell
npm install -g cordova ionic
npm install -g ios-deploy # for iOS
```

创建新项目
```shell
ionic start myApp blank
ionic start tabsApp tabs
ionic start sidemenuApp sidemenu
```

在浏览器中预览
```shell
ionic serve
```

在iOS/Android模拟器上运行
```shell
cd myApp
ionic platform add ios android # 添加平台
ionic build ios
ionic emulate ios
```

在iOS/Android设备上运行
```shell
ionic run ios
```

更新 cordova 和 ionic
```shell
npm update -g cordova ionic
```

更新项目中的js库
```shell
ionic lib update
```
