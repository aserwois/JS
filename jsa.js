
function startGame() {
var firstName = prompt("Jak masz na imię?")
var lastName = prompt("Jak masz na nazwisko?")
var age = prompt("Ile massz lat?")

var fullName = firstName + " " + lastName

alert("Witaj " + fullName + ", wszyscy wiedzą, że masz " + age + " lat")
}

function ageGame() {
    var wiek = prompt("Ile masz lat?")

    var dni = wiek * 365.2

    if(wiek <= 0 || wiek.length <= 0) {
        alert("Jeszcze sie nie urodziłeś :D babasku:)")
    } else {
    alert("Przeżyłeś już " + dni + " dni mistrzu! Tak trzymaj :)!")
    }
}