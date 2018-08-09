'use strict';
let book = {
  title: 'Object Oriented JavaScript'
};

console.log(book.hasOwnProperty('title')); // true
console.log(book.hasOwnProperty('hasOwnProperty')); // false
console.log('hasOwnProperty' in book); // true (because 'in' includes prototype properties)
console.log(Object.prototype.hasOwnProperty('hasOwnProperty')); // true

console.log(book.toString()); // [object Object]
book.toString = function() {
  return 'from custom toString function';
};
console.log(book.toString()); // from custom toString function

delete book.toString;
console.log(book.toString(), '\n'); // [object Object]
