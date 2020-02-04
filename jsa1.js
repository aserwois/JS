function isEven(num) {
    if(num % 2 === 0) {
        return true;
    } 

    return false;
}

// // Wyświetla w konsoli ale bedziemy chcieli wstawic 
// // do stringa to nie podmieni tego(brak strzalki w konsoli obok wyniku)

// function square(x) {
//     console.log(x * x);
// }

// // Strzałka obok wyniku, zwraca wartość, ktora mozna uzywac dalej w kodzie
// // return moze byc uzyte aby raz w funkcji,znaczy zwrocone bedzie jedno return

// function squara(x) {
//     return x * x;
// }

// function capitalize(str) {
//     if (typeof str === "number") {
//         return "That's not a string!";
//     }
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// var city = "warsaw";
// var capital = capitalize(city);

// var num = 32;
// var capital1 = capitalize(num);

