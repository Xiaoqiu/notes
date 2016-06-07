# Ajax

## 1. 实现方式

### 1.1 Ajax with XHR
```javascript
var request = new XMLHttpRequest();
var url = '/api/list';
request.open('GET', url, true);
request.timeout = 2000;
request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        var res = request.response;
        console.log(res);
    } else {
        console.error(request.status);
    }
};
request.onerror = function (e) {
    console.error(e);
};
request.send();
```

### 1.2 Ajax with jQuery
```javascript
$.ajax({
    url: '/api/list',
    type: 'GET',
    timeout: 2000
}).done(function (data) {
    console.log(data);
}).error(function (jqXHR) {
    console.error(jqXHR);
}).always(function () {
    console.log('all finished.');
});
```

### 1.3 Ajax with fetch
```javascript
fetch('/api/list')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });

/* NOTICE: fetch() won't reject on HTTP error status and send cookies */

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

fetch('/api/list')
    .then(checkStatus)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('request succeeded with JSON response', data);
    }).catch(function (error) {
    console.log('request failed', error);
});
```

## 2. Ajax Errors
Ajax请求出错后的 `errorType` 包括
- `timeout`
- `abort`
