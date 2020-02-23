let arr = [1,2,3,4,5];

arr.reduce(function(acc,nxtVal) {
    return acc + nxtVal;
});

arr.reduce(function(acc, next) {
    return acc + next
},10);

arr.reduce(function(acc, next) {
    if(next in acc) {
        acc[next]++;
    } else {
        acc[next] = 1;
    }
    return acc.
}, {}); //{5:2, 4:2, 1;1}

function sumOddNumbers(arr) {
    return arr.reduce(function(acc, next) {
        if(next % 2 !== 0) {
            acc += next;
        }
        return acc;
    }, 0);
}

function createFullName(arr) {
    arr.reduce(function(acc, next) {
        acc.push(next.first + " " + next.last) 
        return acc
    },[]);
}

createFullName([{first: "Mati",last: "Gabriel"},{first: "Karol",last: "Łoza"}])