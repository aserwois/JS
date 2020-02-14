var bodyb = document.querySelector(".bodyb")

bodyb.addEventListener("click", function() {
    this.classList.toggle(".bodyb")
})

var buttons = document.querySelector("button")

buttons.addEventListener("click", function() {
    document.body.classList.toggle("bodyb");
})

// var h1 = document.querySelector("h1");

// h1.style.color = "white";

// var body = document.querySelector("body");
// var isPink = false;

// setInterval(function() {
//     if(isPink) {
//         body.style.backgroundColor = "white";
//         h1.style.color = "Pink";
//     } else {
//         body.style.backgroundColor = "Pink";
//         h1.style.color = "White";
//     }

//     isPink = !isPink;
// }, 1000);
// var utag = document.querySelector(".dupcia");
// var ptag = document.querySelector("p");
// var itag = document.getElementById("first");
// var ctag = document.getElementsByClassName("dupcia");

// var h1 = document.querySelector("h1");

// h1.classList.add(".h1Class")

// var p = document.querySelector("p")

// p.addEventListener("click", function() {
//     p.textContent = "Kliknałeś na coś tam"
// })

