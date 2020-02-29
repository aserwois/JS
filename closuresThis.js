function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastname;
}

Person.prototype.sayHello() {
  return `Hello ${this.firstName} ${this.lastName}`
}

function Student() {
  Person.call(this, arguments);
}

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello() {
    return `Hello ${this.firstName} ${this.lastName}`
  }
}

class Student extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }
}

