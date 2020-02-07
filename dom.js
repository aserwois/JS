var h1 = document.querySelector("h1");

h1.style.color = "white";

var body = document.querySelector("body");
var isPink = false;

setInterval(function() {
    if(isPink) {
        body.style.backgroundColor = "white";
        h1.style.color = "Pink";
    } else {
        body.style.backgroundColor = "Pink";
        h1.style.color = "White";
    }

    isPink = !isPink;
}, 1000);