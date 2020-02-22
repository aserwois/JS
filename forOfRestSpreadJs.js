// forEach słuzy lepiej do nadpisywania tablicy i zmienianai jej wartosci

function map(arr, callback) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback())
    }
    return newArr;
}

function tripeValues(arr) {
    return arr.map(function(value) {
        return value * 3;
    });
}

tripeValues([1,2,3]);

function onlyFirstName(arr) {
    return arr.map(function(value) {
        return value.first;
    })
}

onlyFirstName([{first: "Tom", last: "Garcia"}, {first:"Mateusz", last: "Gabriel"}]);