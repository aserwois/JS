function specialMultiply(a, b) {
    if (b == null) {
        return function (b) {
            return a * b;
        };
    }
    return a * b;
}

specialMultiply(3)(4); // 12

function guessingGame(amount) {
    var answer = Math.floor(Math.random() * 11),
        guesses = 0;

    return function (guess) {

        //Increment guesses
        guesses++;

        //Return if guess limit exceeded
        if (guesses > amount) return 'No more guesses the answer was ' + answer;

        //Check if guess is high, low or correct, return message
        if (guess > answer) {
            return 'Your guess is too high!';
        }
        else if (guess < answer) { 
            return 'Your guess is too low!';
        }
        else { 
            return "cos tam";
        }