# Apache
```shell
apachectl -v  #显示Mac自带的Apache版本
sudo apachectl start  #启动Apache
sudo apachectl stop   #关闭Apache
```

# 卸载Apache
```shell
sudo rm /usr/sbin/apachectl
sudo rm /usr/sbin/httpd
sudo rm -r /etc/apache2/
```

Apache默认根目录 "/Library/WebServer/Documents/"

Apache的安装目录在：/etc/apache2/，etc默认是隐藏的。有2种方式查看：

在Finder中，选择"前往文件夹"，输入"/etc"
或者在terminal 输入 "open /etc"

sudo vim /etc/apache2/httpd.conf
