//Default Parameters

function add(a=10,b=20) {
  return a + b;
}

add(); // 30

add(20) // 40

add(20,30) // 50

//For .. of Loops

var arr = [1,2,3,4,5];

for(let val of arr) {
  console.log(val);
}  // 1 2 3 4 5

// -Can't access an index, -Not working on objects



