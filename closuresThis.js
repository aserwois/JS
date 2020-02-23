function outter() {
    var start = "Mati"
    return function inner() {
        return start + " is awesome"
    }
}

//closure is only when function is using variable 
//from outter function, if it is not using then 
// its just nested function

function outerFn() {
    var data = "outter sth";
    var fact = "remember me";
    return function innerFn(){
        debugger
        return fact;
    }
}