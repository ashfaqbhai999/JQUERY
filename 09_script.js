function getAJAX() {


    // Create an AJAX Request
    var http = new XMLHttpRequest();

    // Prepare the AJAX Request
    http.open('GET','persons.xml',true);

    // Send the AJAX Request
    http.send();

    // Process the AJAX Request
    http.onreadystatechange = function() {
        // If the Response is ready & the status is 'OK'
        if(http.readyState === 4 && http.status === 200){
            process(this);
        }
    };
}

// Parse the Xml Data
function process(xml) {
    var imageTagStr = '';
    var imageGalleryElement = document.querySelector('#image-gallery-div');
    var xmlData = xml.responseXML;
    var contactList = xmlData.getElementsByTagName('contacts');
    for(var i=0; i<contactList.length; i++){
        var picture = contactList[i].childNodes[21].childNodes[1].textContent;
        imageTagStr += "<img src='" + picture + "'>";
    }
    imageGalleryElement.innerHTML = imageTagStr;
}