class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.hasJob = false
    }

    fullname() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Worker extends Person {
    constructor(arguments, job) {
        super(...arguments, job)
        this.job = job;
        this.hasJob = true; 
    }
}

var person = {
    id:53,
    name: "Mati"
}
function addJob(personObj, job) {
    return {...personObj, job}
}

addJob(person, "Instructor") // tworzy nowy obiekt bez nazwy z nowa wartoscia