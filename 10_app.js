// Click on Load Images Button
$('#load-images-btn').click(function() {

    // Call AJAX to get JSON Data
    $.getJSON('https://gist.githubusercontent.com/thenaveensaggam/66e2c29c58f1341bbb824e1b4ac89c90/raw/f93a60b150561f5aa4165fa2ca6d09845a6b3bb2/31082018.json',function(data) {
        var contactsList = data.contacts;
        var imageSelector = '#image';
        var nameSelector = '_name';
        for(var i=0; i<contactsList.length; i++){
            var picture = contactsList[i].picture.large;
            var fullName = contactsList[i].name.first + " " + contactsList[i].name.last;
            $(imageSelector + (i+1)).attr('src',picture);
            $(imageSelector + (i+1) + nameSelector).text(fullName);
        }
    });
});