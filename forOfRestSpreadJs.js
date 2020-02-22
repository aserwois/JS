var arr = [1,2,3]

arr.some(function(value) {
    return value < 2;
});

// true

arr.some(function(value) {
    return value > 4;
});

// false

function hasEvenNumber(arr) {
    arr.some(function(value) {
        return value % 2 === 0
    });
}

hasEvenNumber([1,2,3,4]); //true
hasEvenNumber([1,3,5]); //false

function hasComma(str) {
    return str.split('').some(function(value) {
        return value === ",";
    });
}

hasComma("cos tam, cos tam") // true
hasComma("cos tam cos tam") // false
