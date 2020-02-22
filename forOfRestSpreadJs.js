let arr = [1,2,3,4,5];

arr.reduce(function(acc,nxtVal) {
    return acc + nxtVal;
});

arr.reduce(function(acc, next) {
    return acc + next
},10);