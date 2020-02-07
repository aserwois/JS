// //Pierwsze zadanie - printReverse()

var numberArray = [1,2,3,4]

function printReverse() {
    for(i = numberArray.length -1; i >= 0; i--) {
        console.log(numberArray[i]);
    }
}

// //Drugie zadanie - isUniform()

var trueNumberArray = [1,1,1,1]
var falseNumberArray = [2,1,1,1]
var trueCharsArray = ["a","a","a"]
var falseCharsArray = ["a","b","p"]

function isUniform(arr) {
    var firstItem = arr[0];

    for(x = 1; x < arr.length; x++) {
        if(arr[x] != firstItem)
            return false;
        }
        return true;
    }

// //Trzecie zadanie - sumArray()

var firstArray = [2,1,1,1]
var secondArray = [2,5,1,9]
var thirdArray = [-7,1,111,12]

function sumArray(arr) {
    var sumResult = 0;
    for(i = 0; i < arr.length; i++) {
        sumResult += arr[i]
    }
    return sumResult;
}

//Czwarte zadanie - max()

var firstArray = [2,1,1,1]
var secondArray = [2,5,1,9]
var thirdArray = [-7,1,111,12]

function max(arr) {
    var maxNumber = 0;
    for(i = 0; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }

    console.log(maxNumber);
}
