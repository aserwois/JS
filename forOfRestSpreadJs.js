// var arr = [1,2,3,4,5]

// arr.forEach(function(val,i,arr) {
//     console.log(val);
// })

function pushToArr(arra) {
    var newArra = [];
    arra.forEach(function(val) {
        newArra.push(val / 2);
    })

    console.log(newArra);
}

pushToArr([2,4,6])

// // for(let val of arr){
// //     console.log(val);
// // }

// function printRest(a,b,...c) {
//     console.log(a),
//     console.log(b),
//     console.log(c)
// }

// printRest(1,2,3,4,5);

// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

// Examples:
//     doubleValues([1,2,3]) // [2,4,6]
//     doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

// */
function doubleValues(arr){
    var newArr = [];
    arr.forEach(function(val) {
        newArr.push(val * 2);
    });
    return newArr;
}

function onlyEvenValues(arr){
    var newArr = [];
    arr.forEach(function(val) {
        newArr.push(val % 2 === 0);
    });
    return newArr;
}
