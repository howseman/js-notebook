// Arrays:
var parts = ['shoulder', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics); // [ 'head', 'shoulder', 'knees', 'and', 'toes' ]

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);
console.log(arr1); // [ 0, 1, 2, 3, 4, 5 ]

// Destructuring:
[x, y] = ['house', 'dog'];
console.log(y); // dog

let iterableObj = {};
[a, b, ...iterableObj] = [1, 2, 3, 4, 5];
console.log('iterableObj => ', iterableObj); // [3, 4, 5]

// In a function call:
// As parameter: Converts individual values (arguments) to an array of values
// ie: calling => sum(3, 5, 9); inside the sum function, numbers is transformed
// to an array = [3, 5, 9]
function sum(...numbers) { // REST operator
  return numbers.reduce((prev, current) => prev + current);
}
// As argument: converts an array to a list of values(arguments)
// ie: sum(...myNumbers) converts myNumbers array to 1, 2, 3, 4, 5 values
// sum(...myNumbers) === sum(1, 2, 3, 4, 5)
let myNumbers = [1, 2, 3, 4, 5];
console.log('myNumbers sum: ', sum(...myNumbers)); // SPREAD operator
