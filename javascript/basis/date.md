- 中央时区(Central Standard Time, CST)
- 格林尼治时间(Greenwich Mean Time, GMT)
- 世界标准时间/世界协调时间(Coordinated Universal Time, UTC)
 - UTC = GMT + 修正, 日常使用两者近似
- 本地时间 = UTC + 时区差
- 北京时间

```
var datetime  = new Date(); // Tue Mar 22 2016 15:16:02 GMT+0800 (CST)
console.log(datetime);
console.log(datetime.toLocaleString()); // 2016/3/22 下午3:20:16
console.log(datetime.toUTCString()); // Tue, 22 Mar 2016 07:17:14 GMT

// YYYY-MM-DDTHH:mm:ss.sssZ
// 2015-08-07T02:31:12.000Z
```

new Date(1) -> Thu Jan 01 1970 07:59:59 GMT+0800 (CST)
typeof (new Date()) === 'object'
