//global this!

var inst = "a"

window.inst === inst;

function whatIsThis(){
    return this;
}

whatIsThis(); //window

function varablesInThis(){
    this.person = "Elie";
    var idiota = "d"
}

varablesInThis()
console.log(person)
console.log(idiota)

//strict mode "use strict" is preventing us from this
//using Typeerror.