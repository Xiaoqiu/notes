/* ajax with XHR */

var url = 'sought.json';
var request = new XMLHttpRequest();
request.open('GET', url, true);
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
request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
request.send();

/* ajax with jQuery */

$.ajax({
    url: 'sought.json',
    type: 'GET'
}).done(function (data) {
    console.log(data);
}).error(function (jqXHR) {
    console.error(jqXHR);
}).always(function () {
    console.log('all finished.');
});

/* ajax with fetch */

fetch('sought.json').then(function (response) {
    return response.json();
}).then(function (data) {
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

fetch('nothing')
    .then(checkStatus)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        console.log('request succeeded with JSON response', data);
    }).catch(function(error) {
    console.log('request failed', error);
});
