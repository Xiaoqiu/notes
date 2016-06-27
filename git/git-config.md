## `gitconfig` 文件所在目录
- `/etc/gitconfig` 文件：系统中对所有用户都普遍适用的配置。若使用 git config 时用 --system 选项，读写的就是这个文件。
- `~/.gitconfig` 文件：用户目录下的配置文件只适用于该用户。若使用 git config 时用 --global 选项，读写的就是这个文件。在Windows系统上用户主目录为 `%HOMEDRIVE%%HOMEPATH%` 即本机的 `C:\Users\Kerr`

## 配置Git用户信息
```shell
git config --global user.name "keqingrong"
git config --global user.email "keqingrong1992@gmail.com"
```

## 配置默认编辑器
```shell
git config --global core.editor vim
```

## 配置差异分析工具
```shell
git config --global merge.tool vimdiff
```

## 查看配置信息
```shell
git config --list # 遇到重复的配置定义时，Git使用的是最后面的设置
git config user.name # 单独显示某项设置
```
