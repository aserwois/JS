//filterFunction

let arr = [1,2,3,4];

function biggerThenThree(arr) {
    return arr.filter(function(value) {
        return value > 2;
    })
}

biggerThenThree(arr)

function nameValue(arr) {
    return arr.filter(function(value) {
        return value.name.length > 3;
    })
}

function onlyFourLetterNames(arr) {
    return arr.filter(function(value) {
        return value.length === 4;
    })
}

function divisibleByThree(arr) {
    return arr.filter(function(value) {
        return value % 3 === 0;
    });
}