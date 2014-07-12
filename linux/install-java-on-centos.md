#通过yum命令在CentOS上安装JDK
##1. 查找可获得的Java包
	yum search java | grep -i --color jdk
运行结果  
![运行结果](https://raw.githubusercontent.com/keqingrong/study-notes/master/linux/images/01.png)  
java-1.7.0-openjdk.x86_64 : OpenJDK Runtime Environment
java-1.7.0-openjdk-devel.x86_64 : OpenJDK Development Environment

##2. 安装JRE和JDK
    yum -y install java-1.7.0-openjdk.x86_64
    yum -y install java-1.7.0-openjdk-devel.x86_64

**注意：**CentOS上JDK默认安装路径为 `/usr/lib/jvm/`

安装jre后的目录
java-1.7.0-openjdk-1.7.0.55.x86_64
jre
jre-1.7.0
jre-1.7.0-openjdk.x86_64
jre-openjdk

安装jdk后的目录
java
java-1.7.0
java-1.7.0-openjdk.x86_64
java-1.7.0-openjdk-1.7.0.55.x86_64
java-openjdk
jre
jre-1.7.0
jre-1.7.0-openjdk.x86_64
jre-openjdk

##3. 配置Java环境变量
    vi /etc/environment
    #写入JAVA_HOME、CLASSPATH
    JAVA_HOME=/usr/lib/jvm/open-jdk
    CLASSPATH=.:$JAVA_HOME/lib:$JAVA_HOME/jre/lib
    PATH=$PATH:$JAVA_HOME/bin
    source /etc/environment
    echo $JAVA_HOME
    java -version

##4. 卸载JDK
查看当前系统的JDK `rpm -qa | grep jdk` ，卸载OpenJDK
    
    yum -y remove java java-1.7.0-openjdk-devel.x86_64

##5. 安装OracleJDK
    rpm -ivh jdk-7u60-linux-x64.rpm
**注意：**OracleJDK默认安装路径为 `/usr/java/`
##6. 修改Java环境变量
    vi /etc/environment
    JAVA_HOME=/usr/java/jdk1.7.0_60
    source /etc/environment
    echo $JAVA_HOME
    java -version

运行yum命令时出现如下错误：

    Error: Cannot find a valid baseurl for repo: base

解决方法：

    cat /etc/resolv.conf | grep names
    vi /etc/resolv.conf
    nameserver 114.114.114.114
    nameserver 8.8.8.8
    
或者出现yum lock的问题：

    Existing lock var run yum pid: another copy is running as pid:xxxx. 
    Another app is currently holding the yum lock; waiting for it to exit...
    
解决方法1：

    ps -ef | grep yum   #查看已有的yum进程
    kill <pid>          #kill对应的进程

解决方法2（由于"yum update"正在运行的缘故）：

    service yum-updatesd stop   #停止yum的自动更新服务
    <your own yum commands>     #输入需要执行的yum命令
    service yum-updatesd start  #执行完后重新启动yum-updatesd服务

解决方法3：

    rm -rf /var/run/yum.pid
    service yum-updatesd start
