#styles.xml & themes.xml

`styles.xml`文件用于定义View或者窗体的样式。  
`themes.xml`文件也用于定义样式，只不过它是应用于整个Activity或者Application，对Activity或者Application中的每个View都有效。

所以这意味着`themes.xml`文件并不是必须的，应用于整个Activity或者Application的样式可以直接定义在`styles.xml`文件中。
在Android Studio中创建项目时，默认只有一个`styles.xml`文件，里面定义了Application的样式：
``` xml
<resources>
    <!-- Base application theme. -->
    <style name="AppTheme" parent="Theme.AppCompat.Light.DarkActionBar">
        <!-- Customize your theme here. -->
    </style>
</resources>
```

#values-xx
除了默认的`values`文件夹外，当我们需要针对不同api级别定义不同的样式时，可以创建`values-v11`、`values-v14`、`values-v21`文件夹。
`values-v21`文件夹下的样式默认支持的API >= 21，即对Android 5.0(API 21)和Android 5.1(API 22)都有效，这时如果没有创建其他低版本的
`values-xx`文件夹，在Android 4.0上则会使用默认的`values`文件夹下的样式。

#Holo Theme & Material Theme
- Holo Theme: `Theme.Holo`, `Theme.Holo.Light`, `Theme.Holo.Light.DarkActionBar`
- Material Theme: `Theme.Material`, `Theme.Material.Light`, `Theme.Material.Light.DarkActionBar`
- Support Library Theme: `Theme.AppCompat`, `Theme.AppCompat.Light`, `Theme.AppCompat.Light.DarkActionBar`

Material Theme在API 21后才开始支持，如果使用Support Library，如：compile ‘com.android.support:appcompat-v7:21.0.3’，那么
在API 21之前的兼容包中默认的仍是Holo Theme，API 21开始，默认带的才是Material Theme。

#Questions
1. Question: 从API 21开始推荐使用Toolbar来代替Actionbar，API 22中`android.support.v7.app.ActionBarActivity`已经被deprecated。
所以以后应该直接使用Activity了吗？

2. Question: 在已经使用appcompat-v7:21兼容包和ActionBarActivity的同时，在`values-21`文件夹下创建styles.xml，在其中使用`android:Theme.Material`
会提示：`Caused by: java.lang.IllegalStateException: You need to use a Theme.AppCompat theme (or descendant) with this activity.`
错误。所以应该如何实现Material Design，同时兼容Android 4.0和5.0？  
目前暂时的解决方法是是删除`values-21`文件下的xml文件，只使用`@style/Theme.AppCompat`主题。
