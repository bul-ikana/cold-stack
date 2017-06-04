document.getElementById("hot-network-questions").innerHTML = ""

var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
xhr.open('get', chrome.extension.getURL('content.html'), true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) { 
        document.getElementById("hot-network-questions").innerHTML = xhr.responseText;
    } 
}
xhr.send();
