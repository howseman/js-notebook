'use strict';
var person = {
  name: 'Jhon',
  age: 32
};
// Preventing extensions: can't add properties
console.log(Object.isExtensible(person)); // true
Object.preventExtensions(person);
console.log(Object.isExtensible(person)); // false
// person.weight = 78; // TypeError: Cannot add property weight, objectis not extensible
console.log(person); // { name: 'Jhon', age: 32 }

// Sealing objects
// Makes the objects nonextensible and all properties
// nonconfigurable: (non erasable, non changeable type(data <=> accessor))
var person = {
  name: 'maria'
};
Object.seal(person);
console.log(Object.isSealed(person)); // true

// Freezing objects
// A frozen object is basically a sealed readonly object
Object.freeze(person);
// person.name = 'James'; // TypeError: Cannot assign to read only property
