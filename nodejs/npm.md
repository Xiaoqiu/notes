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
