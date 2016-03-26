# Linux常见文件目录如下：

```text
/
├── bin
├── boot
├── dev
├── etc
├── home
├── lib
├── lost+found
├── media
├── mnt
├── opt
├── proc
├── root
├── sbin
├── srv
├── sys
├── tmp
├── usr
└── var
```

# Debian下的文件目录结构

```text
/
├── bin           基础系统所需要的最基础的命令
├── boot          内核及引导系统程序
│   └── grub      引导配置文件,如menu.lst 或grub.cfg都在里面
├── dev           设备文件
├── emul         
│   └── ia32-linux
├── etc           系统配置文件
├── home          普通用户家目录
├── initrd.img   
├── lib            动态链接共享库
├── lib32          32位库文件
├── lib64 -> /lib  库文件
├── lost+found     文件碎片
├── media          挂载储存设备的挂载目录
├── mnt            挂载储存设备的挂载目录
├── opt            可选安装目录
├── proc           进程信息及内核信息的内存映射
├── root           root的家目录
├── sbin           系统管理的命令
├── selinux        安全服务
├── srv            服务启动之后需要提取的数据
├── sys            内核设备树
├── tmp            临时文件
├── usr            应用程序和文件
│   ├── bin        系统用户使用的应用程序
│   ├── games      游戏
│   ├── include    开发和编译应用程序所需要的头文件 
│   ├── lib        常用的动态链接库和软件包的配置文件
│   ├── lib32      常用的动态链接库和软件包的配置文件32位
│   ├── lib64 -> lib
│   ├── local      本地安装的程序
│   ├── sbin       超级用户使用的比较高级的管理程序和系统守护程序
│   ├── share      系统共用
│   └── src        内核源代码
├── var
│   ├── backups    备份
│   ├── cache      应用程序的缓存文件
│   ├── lib        系统正常运行时要改变的文件
│   ├── local      /usr/local 中安装的程序的可变数据
│   ├── lock       锁定文件
│   ├── log        系统日志
│   ├── mail       邮件日志相关
│   ├── opt        opt目录的变量数据
│   ├── run        保存到下次引导前有效的关于系统的信息文件
│   ├── spool      打印机、邮件、代理服务器等假脱机目录
│   └── tmp        比/tmp 允许的大或需要存在较长时间的临时文件
└── vmlinuz        可引导的、压缩的内核,"vm"代表"Virtual Memory"
```

# 详解
`/  `
    根目录。所有的文件和目录皆由此开始，只有root用户对此目录拥有写权限。  
`/bin`  
    即'binaries'，此目录存放二进制可执行文件。在单用户模式下Linux使用此目录的命令。
    此目录包含所有用户的常用命令，如ls、ping、cp等。  
`/boot`  
    此目录存放了Linux系统启动时的核心文件，如系统内核、引导程序Grub等。
`/dev`  
    即'devices'，此目录包含系统所有的外围设备文件，如CD-ROM，磁盘驱动器，声卡，内存等。  
`/etc`  
    此目录包含系统程序和应用软件的配置文件。  
`/home`  
    此目录包含所有普通用户的主目录。每个用户的主目录均在/home下以自己的用户名命名。  
`/lib`  
    即'libraries'，此目录里存放着系统最基本的共享链接库和内核模块。库文件通常以“ld”或“ld*.so”的形式命名。
`/lib64`  
    64位系统有这个目录，存放64位程序的库文件。  
`/lost+found`  
    这并不是Linux目录结构的组成部分，而是ext3文件系统用于保存丢失文件的地方。
    除了'/'分区上的这个目录外，在每个分区上均有一个lost+found目录。  
`/media`  
    可移动设备的挂载点，当前的操作系统通常会把U盘等设备自动挂载到该文件夹下。  
`/mnt`  
    即'mount'，此目录一般情况下为空，用于临时挂载文件系统。  
`/opt`  
    即'optional'，此目录用于安装系统默认软件以外的第三方软件包。  
`/proc`  
    即'process'，此目录是存在于内存中的虚拟文件系统。包含内核和进程的状态信息，可以直接查看。  
`/root`  
    root用户的主目录。  
`/sbin`  
    即'system binaries'，存放重要的系统执行文件。主要供系统管理员使用，以进行系统维护。  
    如fsck, reboot, shutdown, ifconfig等。  
`/srv`  
    即'service'，用于存放系统服务器的所有服务数据。

# 参考

> Linux文件结构 http://linuxtoy.org/archives/linux-file-structure.html  
> Linux目录架构详解 http://www.csdn.net/article/2012-04-20/2804821  
> FHS http://www.pathname.com/fhs/ 
