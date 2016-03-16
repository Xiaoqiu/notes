/*
* XMLHttpRequest
*/

var request = new XMLHttpRequest(); //
console.log('UNSENT', request.readyState); // readyState will be 0

request.open("GET", "filename", true);
console.log('OPENED', request.readyState); // readyState will be 1

request.onprogress = function () {
    console.log('LOADING', request.readyState); // readyState will be 3
};

request.onload = function () {
    console.log('DONE', request.readyState); // readyState will be 4
};

request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
       // Action to be performed when the document is read;
    }
};

request.send();
