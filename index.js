var myPlants = [
    {
        "type": "flowers",
        "list": [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        "type": "trees",
        "list": [
            "fir",
            "pine",
            "applepie"
        ]
    }
]

var secondTree = myPlants[1].list[1];

//console.log(myPlants[1]);

function returnCollection(id, prop, value) {
    if(value === "") {
        delete myPlants[id][prop];
    } else if ( prop === "list") {
        myPlants[id][prop] = myPlants[id][prop] || [];
        myPlants[id][prop].push(value);
    } else {
        myPlants[id][prop] = value;
    }

    return myPlants;
}

console.log(returnCollection(1,"list","głowa"));