var myArray = [];

var i = 0;

while(i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray)

var ourArray = [];

for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}

console.log(ourArray);

const mouseOver = (event) => {
    console.log('mouseover', event)
    event.target.style.color = 'white'
    event.target.style.top += '50px'
    event.target.style.left += '50px'
}

setColor = function(dick) {
    document.body.style.backgroundColor = dick.target.value
    if(dick.target.value == 'green') {
        document.getElementById('zielono').style.display = "block";
    } if(dick.target.value == 'red') {
        document.getElementById('czerwono').style.display = "block";
    } if(dick.target.value == 'blue') {
        document.getElementById('niebiesko').style.display = "block";
    } if(dick.target.value == 'yellow') {
        document.getElementById('zolto').style.display = "block";
    } 

}

displayText = function(dickenson) {
    event.target.style.visibility = 'visible'
}



// select z 4 opcjami green red blue yellow, defaultowo ma byc green
// wysrodkowac horyzontalnie i verticalnie *
// onChange zmienic background strony
// document.getElement .... 