#安装配置Oh My Zsh

## 1. 安装`zsh`和`git`
```shell
sudo apt-get install zsh
sudo apt-get install git
```

## 2. 安装`Oh My Zsh`
```shell
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

## 3. 安装插件
### 3.1 下载
```shell
# zsh-autosuggestions
git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions

# zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting

# zsh-completions
git clone https://github.com/zsh-users/zsh-completions $ZSH_CUSTOM/plugins/zsh-completions
```

### 3.2 配置`.zshrc`
```shell
plugins=(git zsh-autosuggestions zsh-completions zsh-syntax-highlighting)
```

> Note that `zsh-syntax-highlighting` must be the last plugin sourced, so make it the last element of the $plugins array.

## 3.3 更新`.zshrc`
```shell
source ~/.zshrc
```

