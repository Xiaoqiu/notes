## Basic
- `1xx`: Informational - Request received, continuing process
- `2xx`: Success - The action was successfully received, understood, and accepted
- `3xx`: Redirection - Further action must be taken in order to complete the request
- `4xx`: Client Error - The request contains bad syntax or cannot be fulfilled
- `5xx`: Server Error - The server failed to fulfill an apparently valid request

> https://tools.ietf.org/html/rfc2616#section-10  
> https://developer.mozilla.org/en-US/docs/Web/HTTP/Response_codes

## Example
- `200 OK`
- `204 No Content`
- `301 Moved Permanently`
- `302 Found`
- `304 Not Modified`
- `502 Bad Gateway`
- `500 Internal Server Error`
- `503 Service Unavailable`

## Details
```javascript
100: "continue",
101: "switching protocols",
102: "processing",
200: "ok",
201: "created",
202: "accepted",
203: "non-authoritative information",
204: "no content",
205: "reset content",
206: "partial content",
207: "multi-status",
300: "multiple choices",
301: "moved permanently",
302: "moved temporarily",
303: "see other",
304: "not modified",
305: "use proxy",
307: "temporary redirect",
400: "bad request",
401: "unauthorized",
402: "payment required",
403: "forbidden",
404: "not found",
405: "method not allowed",
406: "not acceptable",
407: "proxy authentication required",
408: "request time-out",
409: "conflict",
410: "gone",
411: "length required",
412: "precondition failed",
413: "request entity too large",
414: "request-uri too large",
415: "unsupported media type",
416: "requested range not satisfiable",
417: "expectation failed",
418: "i'm a teapot",
422: "unprocessable entity",
423: "locked",
424: "failed dependency",
425: "unordered collection",
426: "upgrade required",
428: "precondition required",
429: "too many requests",
431: "request header fields too large",
500: "internal server error",
501: "not implemented",
502: "bad gateway",
503: "service unavailable",
504: "gateway time-out",
505: "http version not supported",
506: "variant also negotiates",
507: "insufficient storage",
509: "bandwidth limit exceeded",
510: "not extended",
511: "network authentication required"
```
