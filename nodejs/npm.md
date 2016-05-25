# NPM

## 创建 package.json
```shell
npm init
```
如果想使用默认的 package.json 内容，则加上 `--yes` 或者 `-y` 参数。
```shell
npm init --yes
```

## 设置默认的 npm 配置
```shell
npm set init.author.email "keqingrong1992@gmail.com"
npm set init.author.name "keqingrong"
npm set init.license "MIT"
```

## 安装依赖包
- `dependencies`: 在最终产品中需要使用的依赖
- `devDependencies`: 在开发和测试中需要使用的依赖
```shell
npm install <package_name> --save
npm install <package_name> --save-dev
```
## 更新依赖包
```shell
npm update # 在 package.json 同目录运行，更新本地依赖
npm outdated -g --depth=0 # 找出需要更新的依赖包
npm install -g <package_name> # 更新全局安装的指定依赖包
npm update -g # 更新所有需要更新的依赖包
```

## 列出安装的所有依赖包
```shell
npm list --depth=0 # 列出项目中安装的所有依赖包
npm list -g --depth=0 # 列出全局安装的所有依赖包
```

## 运行脚本
```shell
npm run-script <command> [-- <args>...]
```
package.json 示例
```json
"scripts": {
  "start": "node --harmony ./bin/www",
  "development-start": "NODE_ENV=development node --harmony ./bin/www",
  "production-start": "NODE_ENV=production node --harmony ./bin/www"
}
```
运行执行开发环境脚本
```shell
npm run-script development-start
```
