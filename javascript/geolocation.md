```html
<!DOCTYPE html>
<html lang="zh-Hans">
<head>
    <meta charset="UTF-8">
    <title>geolocation</title>
</head>
<body>
<script>
    /**
     * 浏览器定位
     */
    function browserLocating() {
        if (navigator.geolocation) {
            var options = {
                maximumAge: 60000,
                timeout: 8000,
                enableHighAccuracy: true
            };
            navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
        }
    }

    /**
     * 定位成功后,调用腾讯地图API
     * @param position
     */
    function onSuccess(position) {
        console.log(position.coords);
    }

    /**
     * 定位失败
     * @param error
     */
    function onError(error) {
        console.log(error);
        if (error) {
            switch (error.code) {
                case 1:
                    // User denied Geolocation
                    console.error('请允许应用获得您的地理位置');
                    break;
                case 2:
                    console.error('请打开手机的定位功能');
                    break;
                case 3:
                    console.error('定位超时');
                    break;
                default:
                    console.error(error.message);
                    break;
            }
        }
    }

    browserLocating();
</script>
</body>
</html>
```
