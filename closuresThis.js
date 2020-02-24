// zwróc tablice z array like Object

function arrayFrom(arrayLikeObject){
    return [].slice.call(arrayLikeObject);
}

function sumEvenArguments() {
    var newArgs = [].slice.call(arguments)
    return newArgs.reduce(function(acc, next) {
        if(next % 2 === 0) {
            return acc + next;
        }
        return acc;
    }, 0)
}

function add(a,b) {
    return a + b;
}

function invokeMax(add, counter) {
    guesses = 0;
    return function() {
        if(guesses <= counter) {
            guesses++
            return add.apply(this, arguments); 
        }
        return "Maxed Out!"
    }
}