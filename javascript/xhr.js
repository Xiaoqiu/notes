/*
* XMLHttpRequest
*/

/* state: unsent, opened, headers received, loading, and done */
var request = new XMLHttpRequest();
console.log('UNSENT', request.readyState); // readyState will be 0

request.open("GET", "filename", true);
console.log('OPENED', request.readyState); // readyState will be 1

request.onprogress = function () {
    console.log('LOADING', request.readyState); // readyState will be 3
};

request.onload = function () {
    console.log('DONE', request.readyState); // readyState will be 4
};

request.send();

/* event: readystatechange, progress, abort, error, load, timeout, and loadend */
/* event handlers */
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



