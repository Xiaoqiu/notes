# 在终端中使用base64编码、md5和sha1校验的方法

示例：
base64编码 echo 'this is a test text' | base64
base64解码 echo 'dGhpcyBpcyBhIHRlc3QgdGV4dAo=' | base64 -d

md5校验 echo 'this is a test text' | md5sum
sha1校验 echo 'this is a test text' | sha1sum

----------------  base64  -------------------------------------------------------------
命令：base64
用法：base64 [选项]... [文件]
使用 Base64 编码/解码文件或标准输入输出。

  -d, --decode          解码数据
  -i, --ignore-garbag   解码时忽略非字母字符
  -w, --wrap=字符数     在指定的字符数后自动换行(默认为76)，0 为禁用自动换行

      --help            显示此帮助信息并退出
      --version         显示版本信息并退出

如果没有指定文件，或者文件为"-"，则从标准输入读取。

数据以 RFC 3548 规定的 Base64 字母格式进行编码。 解码时，输入数据(加密流)可能包含一些非有效 Base64 字符的新行字符。可以尝试用 --ignore-garbage 选项来恢复加密流中任何非 base64 字符。

请向bug-coreutils@gnu.org 报告base64 的错误
GNU coreutils 的主页：<http://www.gnu.org/software/coreutils/>
GNU 软件一般性帮助：<http://www.gnu.org/gethelp/>
请向<http://translationproject.org/team/zh_CN.html> 报告base64 的翻译错误
要获取完整文档，请运行：info coreutils 'base64 invocation'

----------------  md5sum  -------------------------------------------------------------
命令：md5sum
用法：md5sum [选项]... [文件]...
显示或检查 MD5(128-bit) 校验和。
若没有文件选项，或者文件处为"-"，则从标准输入读取。

  -b, --binary          以二进制模式读取(除非从tty 标准输入读取否则为默认)
  -c, --check           从文件中读取MD5 的校验值并予以检查
  -t, --text            以纯文本模式读取(从tty 标准输入读取时为默认)

以下三个选项在进行校验时非常有用：
      --quiet           不为校验成功的文件输出OK
      --status          不输出任何内容，使用退出状态号显示成功
  -w, --warn            对格式不准确的校验和行进行警告

      --strict         with --check, exit non-zero for any invalid input
      --help            显示此帮助信息并退出
      --version         显示版本信息并退出

The sums are computed as described in RFC 1321.  When checking, the input
should be a former output of this program.  The default mode is to print
a line with checksum, a character indicating input mode (`*' for binary,
space for text), and name for each FILE.

请向bug-coreutils@gnu.org 报告md5sum 的错误
GNU coreutils 的主页：<http://www.gnu.org/software/coreutils/>
GNU 软件一般性帮助：<http://www.gnu.org/gethelp/>
请向<http://translationproject.org/team/zh_CN.html> 报告md5sum 的翻译错误
要获取完整文档，请运行：info coreutils 'md5sum invocation'

----------------  sha1sum  -------------------------------------------------------------
命令：sha1sum
用法：sha1sum [选项]... [文件]...
显示或检查 SHA1(160-bit) 校验和。
若没有文件选项，或者文件处为"-"，则从标准输入读取。

  -b, --binary          以二进制模式读取(除非从tty 标准输入读取否则为默认)
  -c, --check           从文件中读取SHA1 的校验值并予以检查
  -t, --text            以纯文本模式读取(从tty 标准输入读取时为默认)

以下三个选项在进行校验时非常有用：
      --quiet           不为校验成功的文件输出OK
      --status          不输出任何内容，使用退出状态号显示成功
  -w, --warn            对格式不准确的校验和行进行警告

      --strict         with --check, exit non-zero for any invalid input
      --help            显示此帮助信息并退出
      --version         显示版本信息并退出

The sums are computed as described in FIPS-180-1.  When checking, the input
should be a former output of this program.  The default mode is to print
a line with checksum, a character indicating input mode (`*' for binary,
space for text), and name for each FILE.

请向bug-coreutils@gnu.org 报告sha1sum 的错误
GNU coreutils 的主页：<http://www.gnu.org/software/coreutils/>
GNU 软件一般性帮助：<http://www.gnu.org/gethelp/>
请向<http://translationproject.org/team/zh_CN.html> 报告sha1sum 的翻译错误
要获取完整文档，请运行：info coreutils 'sha1sum invocation'
