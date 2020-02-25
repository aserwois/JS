var firstName = "Mateusz";
var lastName = "Gabriel";

var instructor = {
  firstName: firstName,
  lastName: lastName
}

// ES2015

var instructor = {
  firstName,
  lastName
}

// ES5

var instructor = {
  sayHello: function() {
    return `Hello!`;
  }
}

// ES2015 - dont use arrow because they dont have their own this keyword

var instructor = {
  sayHello() {
    return `Hello!`;
  }
}

// ES5
var firstNames = "Mati";
var instructior = {};
instructior[firstNames] = "That's me!";

instructior.firstNames;

//ES2015

var firstName = "Mati"
var instructor = {
  [firstName]: "That's me!";
}

instructor.Mati;  // That's me

// Object destructuring!

var instructor = {
  firstName = "Mateusz";
  lastName = "Gabriel";
}

var firstName = instuctor.firstName;
var lastName = instructor.lastName;

//ES2015

var {firstName, lastName} = instructor;

var {firstName:first, lastName:last} = instructor;

first;
last;

function createInstructor(options) {
  var options = options || {};
  var name = options.name || {firstName: "Mateusz", lastName: "Gabriel"};
  var isHilarious = options.isHilarious || false;
  return [name.firstName, name.lastName, isHilarious]
}

createInstructor();
createInstructor({isHilarious:true});
createInstructor({name: {firstName: "Mati", lastName: "Kowalski"}})

// ES2015 - default values ponizej a jak sie nie uda to pusty obiekt tworzymy

function createInstructor({name = {first: "Mati", last: "Gabriel"}, isHilarious = false} = ()){
  return [name.first, name.last, isHilarious]
}

function displayObj({name,color}) {
  return [name, color];
}

var instructor = {
  name: "Mateusz";
  color: "blue"
};

displayInfo(instructor); // ["Mateusz","blue"]
