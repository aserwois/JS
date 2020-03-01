function newPromise() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if(Math.random < .5) {
        resolve('Yes!')
      } else {
        reject('No!');
      }
    }, 1000)
  });
}

newPromise().then(function(value){
  console.log(value);
}).catch(function(error) {
  console.log(error);
})

Promise.all([titanicPromise,braveheartPromise,shrekPromise]).then(function(movies) {
  return movies.forEach(function(val) {
    console.log(val.year);
  });
});

//------ lib.js ------
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

//------ main.js ------
import { square, diag } from 'lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

//------ myFunc.js ------
export default function () { ... };

//------ main1.js ------
import myFunc from 'myFunc';
myFunc();

