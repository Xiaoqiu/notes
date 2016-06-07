# XMLHttpRequest
spec: https://xhr.spec.whatwg.org/

## State
unsent, opened, headers received, loading, and done

```javascript
var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  switch (request.readyState) {
    case 0 :
      console.log(XMLHttpRequest.UNSENT);
      break;
    case 1 :
      console.log(XMLHttpRequest.OPENED);
      break;
    case 2 :
      console.log(XMLHttpRequest.HEADERS_RECEIVED);
      break;
    case 3 :
      console.log(XMLHttpRequest.LOADING);
      break;
    case 4 :
      console.log(XMLHttpRequest.DONE);
      break;
  }
};
request.send();
```

## Event & Event handlers
readystatechange, progress, abort, error, load, timeout, and loadend

```javascript
var request = new XMLHttpRequest();
request.onreadystatechange = function() {};
request.open("GET", "filename", true);
request.onprogress = function () {};
request.onabort = function () {};
request.onerror = function () {};
request.onload = function () {};
request.ontimeout = function () {};
request.onloadend = function () {};
request.send();
```
