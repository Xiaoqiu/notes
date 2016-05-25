# Babel.js

## 1. Install Babel CLI
```shell
$ npm install -g babel-cli
```

## 2. Create `.babelrc` configuration file
Enable ES2015 plugins
```json
{
  "presets": ["es2015"]
}
```

## 3. Run Babel CLI
```shell
babel src --watch --out-dir build
```

## Issues
1. 对于Nodejs中暂不支持的部分ES6特性，使用Babel转译完成，运行时可能需要 `babel-polyfill`。
