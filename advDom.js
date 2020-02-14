var playerOne = document.querySelectorAll("button")[0]
var playerTwo = document.querySelectorAll("button")[1]
var reset = document.querySelectorAll("button")[2]
var p1Display = document.querySelector("#p1Display")
var p2Display = document.querySelector("#p2Display")
var h1 = document.querySelector("h1");
var gameOver = false;
var winningScore = 5;

var p1Score = 0;
var p2Score = 0;

playerOne.addEventListener("click", function() {
    if(!gameOver) {
        p1Score++;
        if(p1Score === winningScore) {
            p1Display.classList.add("winner")
            gameOver = true;
        }
    }
    p1Display.textContent = p1Score;
})

playerTwo.addEventListener("click", function() {
    if(!gameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            gameOver = true;
            p2Display.classList.add("winner")
        }
    }
    p2Display.textContent = p2Score;
})

reset.addEventListener("click", function() {
    reseted();
})

function reseted() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    gameOver = false;
    p1Display.classList.remove("winner")
    p2Display.classList.remove("winner")
}

var inputWinScore = document.querySelector("input")
var winScore = document.getElementById("winScore");



inputWinScore.addEventListener("change", function() {
    winScore.textContent = this.value;
    winningScore = Number(this.value);
    reseted();
})
