// JavaScript source code
//alert("Website still under consturction");
//document.getElementById("intro").innerHTML = "TEST";


var apiLink = 'https://www.googleapis.com/books/v1/volumes/';
var id = ['sfmp6gjZGP8C?hl', 'bhJgd3hGdxQC?hl', 'pgPWOaOctq8C?hl', 'FSPI28onxDIC?hl' ];
var key = 'key=' + 'AIzaSyBCfwzVZMc1IwDm7Vd5Oy97ZRrbKYUs4sU';



var i = 0;

for (i = 0; i < id.length; i++) {
    // retrieval of information
    var newOpt = document.createElement("div");
    var request = new XMLHttpRequest();
    request.open('GET', apiLink + id[i] + key, false);
    request.send(null);
    var dataText = request.responseText;
    var data = JSON.parse(dataText);
    // creation of website object
    var bookCover = document.createElement("img");
    var titleText = document.createElement("p");
    var authorText = document.createElement("p");
    bookCover.src = data.volumeInfo.imageLinks.small;
    titleText.innerHTML = data.volumeInfo.title;
    authorText.innerHTML = data.volumeInfo.authors;
    newOpt.appendChild(bookCover);
    newOpt.appendChild(titleText);
    newOpt.appendChild(authorText);
    newOpt.className = "novelOpt hideMe";
    document.getElementById("bookshelf").appendChild(newOpt);
}

$(document).ready(function () {
    $(window).scroll(function () {
        $('.hideMe').each(function (i) {
            var bot_of_object = $(this).offset().top + $(this).outerHeight();
            var bot_of_page = $(window).scrollTop() + $(window).height();
            if (bot_of_page > bot_of_object) {
                $(this).animate({ 'opacity': '1' }, 500)
            }
        });
    });
});

//var viewer = new google.books.DefaultViewer(document.getElementById("test"));
//viewer.load('ISBN:0738531367');







