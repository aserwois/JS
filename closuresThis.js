// always return an array
// is called REST only when it is parameter
// in a function
// is accessed without ... in function

function printRest(a,b,...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

printRest(1,2,3,4,5);

// 1
// 2
// [3,4,5]

// ES5
function sumArguments() {
  var total = 0
  for(i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

function sumArguments() {
  var argumentsArray = [].slice.call(arguments);
  return argumentsArray.reduce(function(acc,next) {
    return acc + next;
  });
}

//ES2015
var sumArguments = (...args) => args.reduce((acc,next) => acc + next);