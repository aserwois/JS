function Person(name) {
    this.name = name;
    this.sayHi = function() {
        return `Hi ${this.name}`
    }
}

elie = new Person("Elie");
elie.sayHi();

function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function() {
    return `Hi ${this.name}`;
}

elie = new Person("Elie");
elie.sayHi();

function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
};

Vehicle.prototype.turnOn = function() {
    return this.isRunning = true;
}

Vehicle.prototype.turnOff = function() {
    return this.isRunning = false;
}

Vehicle.prototype.beep = function() {
    if(this.isRunning) {
        return `Beeep!`
    }
    return `Your car is not running, sorry!`
}

var opel = new Vehicle("Opel","Astra",1990)

opel.isRunning();