# Linux学习笔记一：Linux常用命令

1.用户
  1.1 基本概念
      用户ID为32bit，从0开始，为了和旧式系统兼容，限制在60000以下
      用户分3种：root用户（ID=0）、系统用户（1~499）、普通用户（500-）
      id命令  显示当前用户的信息
      whoami  显示当前用户
      who     显示有哪些用户已经登录系统
      w       显示有哪些用户已经登录并且在干什么
  1.2 管理常用命令
      useradd/adduser [option] [username]  用户帐号添加（例：useradd kerr 将执行：                           
                                           1.在/etc/passwd中添加用户信息；
                                           2.若使用psaawd命令创建密码，则密码加密保存在/etc/shadow中；
                                           3.为用户新建一个home目录/home/kerr；
                                           4.将/etc/skell中文件复制到新建用户的home目录
                                           5.建立一个与用户名称相同的组，新建用户默认属于这个组）
      usermod [option] [username]  用户帐号修改
      userdel (-r) [username]  用户帐号删除（加-r选项会在删除用户帐号同时删去其在/home目录下的目录及文件）
      passwd [option] [username]  用户口令管理
  1.3 相关文件
      /etc/passwd  保存用户信息
      /etc/shadow  保存用户密码（加密的）
      /etc/group   保存组信息
  1.4 用户
      su - 切换到root用户并使用一个新的运行环境
      sudo 使用管理员用户身份运行命令
2.用户组
  2.1 基本概念
      每个组都有一个组ID，组信息保存在/etc/group中；每个用户拥有一个主组，同时还可以拥有最多31个附属组
  2.2 管理常用命令
      groupadd [option] [groupname]  用户组添加
      groupmod [option] [groupname]  用户组修改
      groupdel [option] [groupname]  用户组删除
3.文件
  3.1 树状文件系统结构

  3.2 文件名称
      文件的名称大小写敏感，名称最多为225个字符
      touch命令可以创建一个空白文件
      以“.”开头的文件为隐藏文件
  3.3 ls [option] [file | directory]  文件清单（list）
         -a 显示所有文件（包括隐藏文件） -l 显示详细信息
         -R 递归显示子目录结构 -ld 显示目录和链接信息
  3.4 cd 切换目录 “..”上级目录，“.”当前目录，“~”用户主目录，“-”上一个工作目录，无参数时进入home目录
  3.5 cp 复制文件、目录 （-r 递归复制整个目录树，-v 显示详细信息）
  3.6 mv 移动、重命名文件或目录  例：mv 文件 目标目录（如果指定文件名，则可以重命名文件）
  3.7 rm 删除文件、目录（-i 交互式，-r 递归删除，-f 强制删除，没有警告提示，需谨慎）
  3.8 mkdir 创建一个目录
  3.9 rmdir 删除一个空目录（rm -r/-f 可以删除非空的目录）
  3.10 pwd 显示当前目录的路径
4.日期时间相关命令
  4.1 date  查看、设置系统时间（格式化显示时间：+%Y--%m--%d）
  4.2 hwclock(clock)  查看、设置硬件时钟
  4.3 cal  查看日历
  4.4 uptime  查看系统运行时间
5.输出、查看命令
  5.1 echo  显示输入内容
  5.2 cat  显示文件内容
  5.3 head  显示文件的头几行（默认10行，-n 指定显示的行数）
  5.4 tail  显示文件的末尾几行（默认10行，-n 指定显示行数，-f 追踪显示文件更新）
  5.5 more  翻页显示文件内容（只能向下翻页）
  5.6 less  翻页显示文件内容（上下翻页）
6.查看硬件信息
  6.1 lspci  查看PCI设备（-v 查看详细信息）
  6.2 lsusb  查看USB设备
  6.3 lsmod  查看加载的模块
7.关机、重启命令
  7.1 shutdown [-t sec] [option] [time] [warning-message] （-h 关机，-r 重启，例：
                                                          shutdown -h now 立即关机
                                                          shutdown -r now
                                                          shutdown -h 23:00
                                                          shutdown –h +10 十分钟后关机）
  7.2 poweroff  立即关机
  7.3 reboot  立即重启
8.归档、压缩
  8.1 zip [option] [file.zip] [file | directory]  压缩文件(例：zip -r test.zip ./* ，
                                                           -r 表示递归压缩子目录下所有文件)
  8.2 uzip [option] [directory] [file.zip]  解压文件（例：uzip -o -d /home/john test.zip，
                                                     -o 表示不提示的情况下覆盖，-d 表示指定目录）
  8.3 gzip [option] [file.zip] 压缩/解压缩文件（-c 保留原文件，-d 将压缩文件解压，
                                              注： gzip不能压缩目录，要用tar先打包再压缩）
  8.4 tar [option] [file | directory]  文件归档（例：tar -cvf demo.tar /home/john/demo
                                                    tar -xvf demo.tar
                                                    tar -cvzf demo.tar.gz /home/john/demo）
9.文件查找
  9.1 locate [keyword] 快速查找文件、文件夹（需要索引建立数据库，在 Ubuntu 中这个数据库文件
                                           位于 /var/cache/locate/locatedb，由系统自动更新，
                                           可通过updatedb命令手动更新）
  9.2 find [path] [expression]  高级查找文件、文件夹（find支持多种查找条件：-name，-perm，-user，
                                                    -group，-type，-size等。
                                                    例：find . -name *py*
                                                        find / -name *.conf
                                                        find / -perm 777
                                                        find . -name "t*" -exec ls -l {} \;）
10.Vim编辑器
11.磁盘相关
  11.1 基本概念
       cylinder（柱面） sector（扇区） head（磁头）
  11.2 MBR分区（Master Boot Record）
       主分区：最多只能创建4个主分区
       扩展分区：一个扩展分区会占用一个主分区位置，扩展分区不能直接使用
       逻辑分区：Linux最多支持63个IDE分区和15个SCSI分区
       /dev/sda ————| /dev/sda1
                    | /dev/sda2
                    | /dev/sda3
                    | /dev/sda4 ————| /dev/sda5
                                    | /dev/sda6
                                    | /dev/sda7
                                    |  ...
  11.3 GPT分区（GUID Partition Table）
  11.4 fdisk    分区命令（基于MBR，GPT无效，运行需要root权限）
                fdisk -l 列出所有安装的磁盘及其分区信息
                fdisk /dev/sda 对目标磁盘进行分区操作（分区后需要使用parprobe命令使内核
                                                    更新新分区信息，否则需要重启才能识别新分区）
                /proc/partitions文件也可以用来查看分区信息
  11.5 文件系统
       常见文件系统有：fat32 NTFS ext3 ext4 xfs HFS等
       文件系统之间的区别：日志、支持的分区的大小、支持的单个文件大小、性能等
  11.6 mke2fs  创建文件系统（例：mke2fs -t ext4 /dev/sda3）
  11.7 mkfs    也用于创建文件系统，支持参数较少（例：mkfs.ext4 /dev/sda3）
  11.9 dumpe2fs   查看分区的文件系统信息（例：dumpe2fs /dev/sda2）
  11.10 journal日志 带日志的文件系统如ext3、ext4，拥有较强的稳定性，出现错误时可以进行恢复
  11.11 e2label   显示或为文件系统添加标签（例：e2label /dev/sda2 显示sda2的系统标签
                                          e2label /dev/sda data 为sda2设置名为data的标签）
  11.12 fsck   检查、修复损坏的文件系统（例：fsck /dev/sda2
               使用-y参数不提示而直接进行修复；默认fsck自动判断文件系统类型，可用-t参数指定类型；
               对于识别为文件的损坏数据（文件系统无记录），fsck会将该文件放入lost+found目录；
               系统启动时会对磁盘进行fsck操作）
  11.13 mount  挂载（例：mount /dev/sda3 /mnt  即 mount [要挂载的分区] [挂载点]）
  11.14 umount 卸载挂载/弹出（例：umont /dev/sda3 OR umount /mnt  即 umount [文件系统/挂载点]
               若出现device is busy报错，fuser -m /mnt 可查看使用文件系统的进程；
               lsof /mnt 可查看正在被使用的文件）
  11.15 自动挂载   配置文件/etc/fstab用来定义需要自动挂载的文件系统,一行代表一个挂载配置,格式如下:
                 | /dev/sda3     | /mnt   | ext4    | default  | 0 0
                 | 需要挂载的设备 | 挂载点 | 文件系统 | 挂载选项 | dump、fsck相关选项
                  以上要挂载的设备可以用label进行识别，用label=data（系统标签名）替代/dev/sda3
                  mount -a 命令会挂载所有fstab中定义的自动挂载项
12.帮助
  12.1 man   用来查询获取命令相应的文档帮助（例：man ls）
             man -K 关键字 可以用来查询包含该关键字的文档
  12.2 info  比man提供的信息更为详细深入（man与info都可以通过"/+关键字"方式进行搜索）
  12.3 help  大部分命令都可以使用-h或者--help参数获取帮助、使用方法等信息
13.文件权限
   13.1 权限   对文件的影响    对目录的影响
         r    可读取文件内容  可列出目录内容
         w    可修改文件内容  可在目录中创建、删除文件
         x    可作为命令执行  可访问目录内容（目录必须有x权限，否则无法查看内容）
   13.2 修改文件权限
        chmod 模式 文件
        模式格式如下：1. u、g、o分别代表用户、组、其他
                     2. a代指ugo
                     3. +、-代表加入或删除对应权限
                     4. r、w、x代表三种权限
        例：chmod u+rw kerr  chmod a-x kerr
        chmod也支持数字方式修改权限，表示为：r=4,w=2,x=1
        以数字表示权限时，每组权限分别为对应数字之和：
        rw = 4+2 =6
        rwx = 4+2+1 =7
        r-x = 4+1 =5
        所以使用数字表示ugo权限时，表示方式如下：
        chmod 660 demo == rw-rw----
        chmod 775 demo == rwxrwxr-x
14.UGO（User-Group-Other）
   14.1 Linux权限基于UGO模型进行设置，每一个文件拥有一个所属用户和所属组，对应UG，
        不属于该文件所属用户或所属组的使用O权限。
        ls -l 可以查看当前目录下文件的详细信息，例：
        kerr@cocoa ~
        $ ls -l
        总用量 4.1M
        drwxr-xr-x+ 1 kerr None    0 8月   6 13:54 demo
        -rw-r--r--  1 kerr None  10K 8月   6 13:57 demo.tar
        -rw-r--r--  1 kerr None  189 8月   6 14:01 demo.tar.gz
        drwxr-xr-x+ 1 kerr None    0 8月  28 09:34 py
        -rwxr-xr-x  1 kerr None   31 8月   3 13:32 test.txt
        注解：drwxr-xr-x+ 1 kerr None    0 8月   6 13:54 demo
            文件类型 UGO 链接数量 U所属用户 G所属组 大小 时间 文件名
   14.2 修改文件所属用户、组
        chown 改变文件所属用户
        chgrp 改变文件所属组（-R参数递归地修改目录下所有文件的所属用户/组）
15.bash
   15.1 通过历史记录简化操作
        !!    重复前一个命令
        !字符 重复前一个以“字符”开头的命令
        !num  按照历史记录的序号执行命令
        !?abc 重复之前包含abc的命令
        !-n   重复n个命令之前的那个命令
        ctrl+r 在历史记录中搜索命令
        esc键+. 重新调用前一个命令中的参数
   15.2 命令行通配符
        bash shell支持以下通配符：
        *  匹配零个或多个字符
        ?  匹配任意一个字符
        [0-9]  匹配一个数字范围
        [abc]  匹配列表里任何字符
        [^abc] 匹配列表以外的字符
   15.3 bash作业管理
        在后台运行进程：在该命令后加一个&
        暂停某个程序：ctrl+Z 或者发送信号17
        管理后台作业：jobs  bg  fg
   15.4 ps 列出当前系统进程
        kill 杀死某个进程
