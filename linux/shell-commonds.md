# 1. 查看当前使用的shell
```shell
ps |grep $$ |awk '{print $4}'  #显示当前使用的shell
echo $SHELL  #显示用户默认的shell，但不一定是当前使用的shell
cat /etc/shells  ＃查看当前发行版可以使用的shell
shopt login_shell  # 查看是否是login shell（在zsh中无法使用）
```
