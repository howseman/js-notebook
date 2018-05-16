'use strict';
let book = {
  title: 'Object Oriented JavaScript'
};

let book2 = Object.create(book, {
  publisher: {
    writable: true,
    value: 'O\'Reilly',
    enumerable: true,
    configurable: true
  }
});

console.log('title' in book2); // true
book2.title = 'Learning ES6';
console.log('book.title:', book.title); // book.title: Object Oriented JavaScript
console.log('book2.title:', book2.title); // book2.title: Learning ES6
console.log('book has publisher property:', 'publisher' in book); // book has publisher property: false
console.log('book2 has publisher property:', 'publisher' in book2); // book2 has publisher property: true
