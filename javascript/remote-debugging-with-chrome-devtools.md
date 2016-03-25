# Remote debugging on Android with Chrome DevTools

## Requirements
- `Chrome` 32 or later installed on your development machine.
- `A USB cable` to connect your Android device.
- For browser debugging: `Android 4.0+` and `Chrome for Android`.
- For app debugging: `Android 4.4+` and a `WebView` configured for debugging.

> For best results, use `Chrome Canary` (Mac/Windows) or the `Chrome Dev channel release` (Linux) on desktop.

### WebView for Android
- Before Android 4.4 Kitkat: `Android WebKit WebView`
- Since Android 4.4 Kitkat: `Chromium WebView` (support HTML5, CSS3, V8, remote debugging)
- Since Android 5.0 Lollipop: the WebView has moved to an APK `Android System WebView`

### WebView for iOS
- Before iOS 8: `UIWebView`
- Since iOS 8: `WKWebView`

## Reference
> https://developer.chrome.com/devtools/docs/remote-debugging
> https://developers.google.com/web/tools/setup/remote-debugging/remote-debugging
