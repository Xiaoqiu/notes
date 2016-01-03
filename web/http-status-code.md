##Basic
- `1xx`: Informational - Request received, continuing process
- `2xx`: Success - The action was successfully received, understood, and accepted
- `3xx`: Redirection - Further action must be taken in order to complete the request
- `4xx`: Client Error - The request contains bad syntax or cannot be fulfilled
- `5xx`: Server Error - The server failed to fulfill an apparently valid request

> https://tools.ietf.org/html/rfc2616#section-10  
> https://developer.mozilla.org/en-US/docs/Web/HTTP/Response_codes

##Example
- `200 OK`
- `204 No Content`
- `301 Moved Permanently`
- `302 Found`
- `304 Not Modified`
- `502 Bad Gateway`
- `500 Internal Server Error`
- `503 Service Unavailable`
