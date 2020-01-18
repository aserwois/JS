/*function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " "+ myVerb + " " + myAdverb
    return result;
}

console.log(wordBlanks("dog","big", "run", "quickly"));

//Array

var ourArray = [["Mathew", 29], ["Pablo",22]];
var mathewArray = ourArray[0];
var myArray = ["Quincy", 1];

console.log(ourArray[0][0]);

//Push Array

/*ourArray.push(["dog",12]);
console.log(ourArray);

var removedOurArray = ourArray.pop();
console.log(ourArray);

var removedFirstElem = ourArray.shift();
console.log(ourArray);

ourArray.unshift(['Happy',12]);
console.log(ourArray);

//Shopping list in array
var myList = [["cereal", 3], ["milk", 2], ["bannas", 3], ["juice", 2], ["eggs", 12]];
*/

//functions
function ourReusableFunction() {
    console.log("Heyya, World");
}

ourReusableFunction();

function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();

function ourFunctionWithArgs(a, b) {
    var result = a - b;
    return result;
}

console.log(ourFunctionWithArgs(10,5));

function funtionWithArg(a, b) {
    var sum = a + b;
    return sum;
}

console.log(funtionWithArg(2,2));


var tabliczkaMnozenia;

var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "Jeans";
    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

