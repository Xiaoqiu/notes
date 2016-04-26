
## 问题
> - `getCurrentPosition()` and `watchPosition()` are deprecated on insecure origins. To use this feature, you should consider switching your application to a secure origin, such as HTTPS. See https://goo.gl/rStTGz for more details.
> - ERROR(1): Only secure origins are allowed (see: https://goo.gl/Y0ZkNV). 
 
出于安全性考虑，`getCurrentPosition()` 和 `watchPosition()` 必须在安全源（secure origins）中打开，以下几种被 Chrome 看作是安全源：
- (https, *, *)
- (wss, *, *)
- (*, localhost, *) | (*, 127/8, *) | (*, ::1/128, *)
- (file, *, —)
- (chrome-extension, *, —) 

除了 `geolocation` 以外，还有一些其他信息也需要在安全源的条件下才可以访问。
- Device motion / orientation
- EME
- Geolocation
- getUserMedia()
- AppCache


## 例子
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
        // 判断地理位置服务是否可用
        if (navigator.geolocation) {
            var options = {
                maximumAge: 60000,
                timeout: 8000,
                enableHighAccuracy: true
            };
            navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
        } else {
          console.error('您的设备不支持地理位置服务');
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
