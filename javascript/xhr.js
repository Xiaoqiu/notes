/*
* XMLHttpRequest
*/

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
       // Action to be performed when the document is read;
    }
};
request.open("GET", "filename", true);
request.send();
