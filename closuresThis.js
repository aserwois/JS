// Spread
// used on array to spread each value(as comma seperated val)
// for array when expects comma separated values

//ES5
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];

var combined = arr1.concat(arr2).concat(arr3);

//ES2015

var combined = [...arr1, ...arr2, ...arr3];

var arr = [1,2,3,4,5];

Math.max(arr); // NaN

//ES5

Math.max.apply(this, arr); // 5 

//ES2015

Math.max(...arr); // 5

function sumValues(a,b,c) {
  return a+b+c
}

var nums = [12,15,20];

sumValues(...nums); // 47

var sumValues = (...args) => args.reduce((acc, next) => acc + next)

sumValues.apply(this, nums);