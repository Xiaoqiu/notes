# mp3在linux环境下标签乱码的解决方案

## 一、纯手动

### 准备工具：
1. mutagen（Python多媒体标签库）  https://code.google.com/p/mutagen/
2. mp3tagiconv（mp3标签编码转换器）  https://code.google.com/p/mp3tagiconv/

### 安装：
解压 mutagen 后安装
`python setup.py install`
将 mp3tagicov 文件复制到需要转换编码的音乐目录下即可使用

### 用法：
中文标签的mp3文件，ID3v2已经使用unicode编码的将不受影响：
`mp3tagiconv example.mp3`
你可以使用-e命令来指定使用的编码，如果标签没有被列表Latin-1存储。程序将根据你的列表猜测编码：
`mp3tagiconv -e gbk,utf8example.mp3`
如果你不想为每个文件一一确认（不推荐）：
`mp3tagiconv --do-update *.mp3`

## 二、借助软件
windows下可安装Mp3tag解决问题，支持批量  http://www.mp3tag.de/

## 三、参考
- [Mp3标签乱码问题分析与解决方案](http://linux-wiki.cn/wiki/Mp3标签乱码问题分析与解决方案)
