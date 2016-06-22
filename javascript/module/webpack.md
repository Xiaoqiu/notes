# install
```shell
npm install webpack -g
npm install webpack --save-dev
```

## loaders
- css-loader # css打包
- style-loader  # 样式输出
- url-loader # 解析url，小图片会被解析为data-url
- babel-loader
- sass-loader

## plugins
- CommonsChunkPlugin
- UglifyJsPlugin
- LimitChunkCountPlugin

# use
```shell
# run
webpack ./entry.js bundle.js

# run with loaders
webpack ./entry.js bundle.js --module-bind 'css=style!css'
```
# use webpack.config.js
```javascript
module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
```

# use webpack-dev-server
```shell
npm install webpack-dev-server -g
```

## Reference
> - [Webpack 中文指南](https://zhaoda.gitbooks.io/webpack/content/)
