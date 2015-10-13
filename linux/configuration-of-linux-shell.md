#Linux Shell配置
##login shell与non-login shell
###举例说明二者含义
- **login shell**：登录系统时启动的shell，例如通过gnome、ssh或者tty1~tty6方式登录，需要输入帐号密码才能使用，打开bash时可以加`--login`参数使其行为上是login shell；
- **non-login shell**：以图形界面形式登录后，不需要再输入帐号密码启动的shell；在原本的bash中启动新的bash shell属于non-login shell。

###二者读取的配置文件不同
- `/etc/profile`(login shell 才会读)，会读取执行`/etc/inputrc`、`/etc/profile.d/*.sh`、`/etc/sysconfig/i18n`
- `~/.bash_profile`(login shell 才会读)，会读取执行`~/.bash_login`、`~/.profile`
- `~/.bashrc`(non-login shell 才会读)，会读取执行`/etc/bashrc`

###二者读取顺序
####login shell配置文件读取顺序如下：
- `/etc/profile`
- `/etc/profile.d/*.sh`| `/etc/inputrc`| etc.
- `~/.bash_profile`(bash找到~/.bash_profile文件后不会再读取~/.profile文件)
- `~/.bash_login`
- `~/.profile`

####non-login shell配置文件读取顺序如下：
- `~/.bashrc`
- `/etc/bashrc`
 
####一些配置
为了使`~/.bashrc`文件在login shell中也生效，可以在`~/.bash_profile`中加入以下配置：
``` shell
[ -f "$HOME/.profile" ] && source "$HOME/.profile"
[ -f "$HOME/.bashrc" ] && source "$HOME/.bashrc"
```
这样的明确指定，可以保证文件读取顺序为`~/.bash_profile`、`~/.profile`、`~/.bashrc`

###其他配置文件
- `/etc/man.config`
- `~/.bash_history`
- `~/.bash_logout`(只有当bash以login shell方式打开，在退出时执行)
- `~/.bash_aliases`

###其他shell
`/bin/bash`(对应`~/.bashrc`, `~/.bash_profile`)  
`/bin/zsh`(对应`~/.zshrc`, `~/.zprofile` )   
`/bin/tcsh`(对应`~/.tcshrc`)  

####注意事项
- 无论是`~/.bash_profile`还是`~/.bashrc`都只是bash独有的，只在bash shell中生效，而`~/.profile`在其他shell中同样有效。
- 在Mac OS X中打开Terminal，默认的bash是以login shell的形式运行的，所以应该使用`~/.bash_profile`而不是`~/.bashrc`（这两个文件默认都不存在，需要自己手动创建，默认只有一个`~/.bash_history`文件）。从Terminal当前的shell打开bash时，由于是non-login shell，所以只会载入`~/.bashrc`，而不会载入`~/.bash_profile`文件。

##环境变量
###系统环境变量
`/etc/profile` (不推荐对其直接修改)  
`/etc/environment` | `/etc/profile.d/*.sh` (推荐使用)  

##用户环境变量
`~/.bash_profile`(User specific environment and startup programs, 较推荐使用)  
`~/.profile`(This file is not read by bash, if ~/.bash_profile or ~/.bash_login exists )  
`~/.bashrc`(Source global definitions, 不推荐使用，只对Bash Shell有效)  
