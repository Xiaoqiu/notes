#Linux Shell配置
##login shell与non-login shell
###举例说明二者含义
- **login shell**：由tty1~tty6登录，需要输入帐号密码才能使用的shell；
- **non-login shell**：以X-window形式登录后，不需要再输入帐号密码启动的shell；在原本的bash中启动新的bash shell。

###二者读取的配置文件不同
- `/etc/profile`(login shell 才会读)，会读取执行`/etc/inputrc`、`/etc/profile.d/*.sh`、`/etc/sysconfig/i18n`
- `~/.bash_profile`(login shell 才会读)，会读取执行`~/.bash_login`、`~/.profile`
- `~/.bashrc`(non-login shell 会读)，会读取执行`/etc/bashrc`

###二者读取顺序
####login shell配置文件读取顺序如下：
- `/etc/profile`
- `/etc/profile.d/*.sh`| `/etc/inputrc`| etc.
- `~/.bash_profile`
- `~/.bash_login`
- `~/.profile`

####non-login shell配置文件读取顺序如下：
- `~/.bashrc`
- `/etc/bashrc`

###其他配置文件
- `/etc/man.config`
- `~/.bash_history`
- `~/.bash_logout`(executed by bash when login shell exits)
- `~/.bash_aliases`

###其他shell
`/bin/bash`(对应`~/.bashrc`, `~/.bash_profile`)  
`/bin/zsh`(对应`~/.zshrc`, `~/.zprofile` )   
`/bin/tcsh`(对应`~/.tcshrc`)  

##环境变量
###系统环境变量
`/etc/profile` (不推荐对其直接修改)  
`/etc/environment` | `/etc/profile.d/*.sh` (推荐使用)  

##用户环境变量
`~/.bash_profile`(User specific environment and startup programs, 较推荐使用)  
`~/.profile`(This file is not read by bash, if ~/.bash_profile or ~/.bash_login exists )  
`~/.bashrc`(Source global definitions, 不推荐使用，只对Bash Shell有效)  
