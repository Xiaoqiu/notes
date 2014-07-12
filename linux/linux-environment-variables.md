#Linux环境变量
##系统环境变量
`/etc/environment`是一个可以影响整个系统（而不仅仅是某个特定用户）环境变量设置的文件。另外的一种替代方案是在`/etc/profile.d`目录为特殊目的创建文件。

**/etc/environment**
该文件专门用来设置系统环境变量。它并非脚本文件，而是由赋值表达式构成，每行一句表达式。
```
FOO=bar
```
**注意: 变量扩展在/etc/environment中无法工作。**

**/etc/profile.d/*.sh**
每当桌面会话载入时，无论何时进入Bash登录Shell（例如，通过console或者ssh登录），`/etc/profile.d`目录下，扩展名为.sh的脚本文件都会被显示管理器执行。
例如，你可以创建`/etc/profile.d/myenvvars.sh`，并如下设置变量：
```
export JAVA_HOME=/usr/lib/jvm/jdk1.7.0
export PATH=$PATH:$JAVA_HOME/bin
```
**Other files**
虽然`/etc/profile`经常被建议用来设置系统环境变量，它是基础文件包的一个配置文件，所以不适合直接编辑。使用`/etc/profile.d`目录下的文件来代替上面的`/etc/profile`。（`/etc/profile.d`目录下的文件可由`/etc/profile`重新读取执行。）

`/etc/default/locale`专门用来设置系统的区域环境变量。它可以在你使用语言支持来设置语言或者系统的区域格式时，由安装程序写入。在桌面系统中一般没有理由要手动编辑该文件。

Shell配置文件`/etc/bash.bashrc`有时被建议用来设置系统环境变量。尽管对从Shell中启动的程序而言，它可能会在Bash Shell中起作用，但该文件中设置的变量，在默认情况下对从桌面图形环境里启动的程序是无效的。

 >参考：[EnvironmentVariables](https://help.ubuntu.com/community/EnvironmentVariables)
