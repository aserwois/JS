var arr = [1,2,3,4,5]

// for(let val of arr){
//     console.log(val);
// }

function printRest(a,b,...c) {
    console.log(a),
    console.log(b),
    console.log(c)
}

printRest(1,2,3,4,5);