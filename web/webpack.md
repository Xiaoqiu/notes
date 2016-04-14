# install
```shell
npm install webpack -g
npm install css-loader style-loader
```

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

