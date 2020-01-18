function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true!";
    }

    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
    if(wasThatTrue) {
        return "Yes, that was true!";
    }

    return "No, false!!!";
}

console.log(trueOrFalse(true));

//New

function testEqual(val) {
    if (val == 10) {
        return "Equal :)";
    }

    return "Not equal :(";
}

console.log(testEqual(8));
console.log(testEqual(10));