#IntellJ IDEA 配置修改

1.修改项目和properties文件的编码、换行符：
- Editor -> File Encodings: IDE Encoding: `UTF-8`
- Editor -> File Encodings: Project Encoding: `UTF-8`
- Editor -> File Encodings: Default encoding for properties files: `UTF-`8 勾选`Transparent native-to-ascii conversion`
- Editor -> Code Style -> Line separator: `Unix and OS X (\n)`

2.字体修改  
> on Windows:

- Appearance & Behavior -> Appearance -> 勾选Override default fonts by (not recommended): `Microsoft YaHei UI`
- Editor -> Colors & Fonts -> Font: `Consolas`, `Microsoft YaHei Mono`
- Editor -> Colors & Fonts -> Console Font: `Consolas`, `Microsoft YaHei Mono`

> 如果使用了`Noto Sans Hans`字体可能会导致界面文字消失，这时只能手动修改`"C:\Users\<user-name>\.AndroidStudio\config\options\ui.lnf.xml"`文件中的字体名字进行恢复。
``` xml
<application>
  <component name="UISettings">
    <option name="FONT_FACE" value=Microsoft YaHei" />
    <option name="HIDE_TOOL_STRIPES" value="true" />
    <option name="SHOW_MAIN_TOOLBAR" value="true" />
    <option name="OVERRIDE_NONIDEA_LAF_FONTS" value="true" />
  </component>
</application>
```

##WebStorm配置修改
1. 让移动设备可以访问WebStorm中开发的web项目：Build, Execution, Deployment -> Debugger -> 勾选`Can accept external connections`

##Android Studio配置修改
1. 修改Android Studio中Logcat的颜色：Editor -> Colors & Fonts -> Android Logcat  
>Darcula Theme:

 - Verbose: `#BBBBBB`
 - Debug: `#6897BB`
 - Info: `#6A8759`
 - Warn: `#BBB529`
 - Error: `#FF6B68`
 - Assert: `#9876AA`

