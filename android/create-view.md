[Creating a View Class](https://developer.android.com/training/custom-views/create-view.html)

如下所示：
``` xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
              xmlns:custom="http://schemas.android.com/apk/res/com.example.customviews">
 <com.example.customviews.charting.PieChart
     custom:showText="true"
     custom:labelPosition="left" />
</LinearLayout>
```
**http://schemas.android.com/apk/res/{your-package-name}**这种形式的命名空间在Android Studio中会提示**In Gradle Projects always use http //schemas.android.com/apk/res-auto for custom attributes**，
所以上面的代码可以修改成下面这样：
``` xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
              xmlns:custom="http://schemas.android.com/apk/res-auto">
 <com.example.customviews.charting.PieChart
     custom:showText="true"
     custom:labelPosition="left" />
</LinearLayout>
```
