var colors = generateRandomColors(6);

var levelHard = true;
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor();
var tryDisplay = document.querySelector("#tryDisplay")
var resetColors = document.querySelector("#resetColors")
var h1 = document.querySelector("h1")
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")

easyBtn.addEventListener('click', function() {
    easyBtn.classList.add("selected")
    hardBtn.classList.remove("selected")
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    levelHard = false;
    h1.style.backgroundColor = 'steelblue'
    resetColors.textContent = "New colors"
    tryDisplay.textContent = " "
    colorDisplay.textContent = pickedColor;
    for(i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }  else {
            squares[i].style.display = "none"
        }
    }
})

hardBtn.addEventListener('click', function() {
    easyBtn.classList.remove("selected")
    hardBtn.classList.add("selected")
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    levelHard = true;
    h1.style.backgroundColor = 'steelblue'
    resetColors.textContent = "New colors"
    tryDisplay.textContent = " "
    colorDisplay.textContent = pickedColor;
    for(i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block"
    }

})

var colorDisplay = document.querySelector(".colorDisplay")
colorDisplay.textContent = pickedColor;

resetColors.addEventListener('click', function() {
     if(levelHard) {
        colors = generateRandomColors(6);
     } else {
        colors = generateRandomColors(3); 
     }
     pickedColor = pickColor();
     colorDisplay.textContent = pickedColor;
     for(i = 0; i < squares.length; i++) {
         squares[i].style.background = colors[i]
     }
     h1.style.backgroundColor = 'steelblue'
     resetColors.textContent = "New colors"
     tryDisplay.textContent = " "
})

for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
        var grabbedColor = this.style.backgroundColor;
        if(grabbedColor === pickedColor) {
            changeColors(grabbedColor)
            tryDisplay.textContent = "You win!!"
            h1.style.backgroundColor = grabbedColor;
            resetColors.textContent = "Play again?"
        } else {
            this.style.backgroundColor = "#232323"
            tryDisplay.textContent = "Try again!"
        }
    })
}

function changeColors(color) {
    for(i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var randomNumber = Math.floor(Math.random() * colors.length)
    return colors[randomNumber];
}

function generateRandomColors(num) {
    var randomColors = [];
    for(i = 0; i < num; i++) {
        randomColors.push(randomColor());
    }
    return randomColors;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256)
    var green = Math.floor(Math.random() * 256)
    var blue = Math.floor(Math.random() * 256)

    return "rgb(" + red + ", " + green + ", " + blue + ")"
}