打开DOS命令窗口，进入U盘根目录，输入 attrib *.* -h -s /s /d 即可批量去除U盘中所有文件的隐藏属性。
attrib命令的具体用法：

```shell
PS C:\Users\Kerr> attrib /?
显示或更改文件属性。


ATTRIB [+R | -R] [+A | -A ] [+S | -S] [+H | -H] [+I | -I]
       [drive:][path][filename] [/S [/D] [/L]]


  +   设置属性。
  -   清除属性。
  R   只读文件属性。
  A   存档文件属性。
  S   系统文件属性。
  H   隐藏文件属性。
  I   无内容索引文件属性。
  X   无清理文件属性。
  V   完整性属性。
  [drive:][path][filename]
      指定 attrib 要处理的文件。
  /S  处理当前文件夹
      及其所有子文件夹中的匹配文件。
  /D  也处理文件夹。
  /L  处理符号链接和
      符号链接目标的属性
```