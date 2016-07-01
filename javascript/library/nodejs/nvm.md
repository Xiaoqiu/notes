# NVM

## 安装 nvm
```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash
```

## 使用
```shell
nvm help                    # 显示帮助信息
nvm install [version]       # 安装指定版本的node.js
nvm uninstall [version]     # 卸载指定版本的node.js
nvm use [version]           # 使用指定版本的node.js
nvm ls                      # 显示所有已安装的版本
```

## 常用示例
```shell
nvm current
nvm ls-remote              # 查看所有可以安装的版本
nvm install node           # 安装最新稳定版本node.js
nvm install 4.0.0          # 安装4.0.0版本node.js
nvm use 4.0.0              # 使用4.0.0版本的node.js
nvm use system             # 使用系统默认的node.js

nvm install iojs           # 安装最新版本 io.js
nvm install iojs-v1.0.2    # 安装1.0.2版本的 io.js
nvm use iojs-v3.3.0        # 使用3.3.0版本的 io.js
nvm uninstall iojs-v3.3.0  # 卸载3.3.0版本的 io.js

nvm alias default v5.10.1  # 修改系统node默认版本为5.10.1
```
