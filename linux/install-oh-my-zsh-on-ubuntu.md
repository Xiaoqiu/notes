#Installing Oh My Zsh

## 1. Install `zsh` and `git`
```shell
sudo apt-get install zsh
sudo apt-get install git
```

## 2. Install `Oh My Zsh`
```shell
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

## 3. Install plugins
### 3.1 Download
```shell
# zsh-autosuggestions
git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions

# zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting

# zsh-completions
git clone https://github.com/zsh-users/zsh-completions $ZSH_CUSTOM/plugins/zsh-completions
```

### 3.2 Modify `.zshrc`
```shell
plugins=([plugins...] zsh-autosuggestions zsh-completions zsh-syntax-highlighting)
```

> Note that `zsh-syntax-highlighting` must be the last plugin sourced, so make it the last element of the $plugins array.

## 3.3 Source `.zshrc`
```shell
source ~/.zshrc
```

