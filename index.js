// Const
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// variable types
let name = "Mathew";
let age = 30;
let isApproved = true;
let firstName = undefined;
let selectedColor = null;

// Dynamic typing (We can change var type in every place in code)

// Objects (Reference types: Objects, Arrays, Functions)

let person = {
    name: 'Mathew',
    age: 30
};

person.name = 'Pedro';

console.log(person)

// Arrays

let selectedColors = ['red','blue'];

selectedColors[2] = 'Green';
selectedColors[3] = 21;

console.log(selectedColors);

//Performing a task

function greet(name, age) {
    console.log('Hello mister ' + name + 'You are ' + age + "yo");
}

greet('Maew',29);

//Calculating a vlue

function square(number) {
    return number * number;
}

console.log(square(2));


