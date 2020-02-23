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
        // debugger
        return fact;
    }
}

var outer = outerFn();
outer();

function counter() {
    var number = 0
    return function inner() {
        number++
        return number;
    }
}

var counter1 = counter() //undefined
counter1() // 1 

function classRoom() {
    var instructors = ["Mati","Łozi"];
    return {
                getInstructiors: function() {
                return instructors;
            },
                addInstructors: function(instructor) {
                instructors.push(instructor)
                return instructors;
        }
    }
}

var course1 = classRoom();
course1.getInstructiors(); // ["Mati","Łozi"]
course1.addInstructors("a"); // ["a","Mati","Łozi"]
course1.addInstructors("b"); // ["a","b","Mati","Łozi"]
course1.getInstructiors(); // ["a","b","Mati","Łozi"]

var course2 = classRoom();
course2.getInstructiors(); // ["Mati","Łozi"]