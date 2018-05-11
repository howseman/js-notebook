var person = {
  name: 'Jhon',
  age: 23
};

// if the property (2nd param) doesn't exist in the target object (1st param),
// a new one is created. NOTE: when defineProperty is used, it is important
// to specify all attributes because boolean attributes automatically
// default to false
Object.defineProperty(person, 'name', {
  configurable: false, // default: false
  enumerable: false, // default: false
  // For value properties:
  writable: false, // default: false
  value: 'Peter', // sets the property value
  // For accessor properties
  // get: function() { return this._propertyName },
  // set: function(value) { this._propertyName = value },
});

console.log('name' in person); // true
console.log(person.propertyIsEnumerable('name')); // false
console.log(Object.keys(person)); // ['age']

console.log(delete person.name); // false if configurable === false else true
console.log('name' in person); // true
console.log('name:', person.name); // name: Peter

// Any intent of reconfigure an "unconfigurable" property throw an error 
// TypeError: Cannot redefine property: name
// Object.defineProperty(person, 'name', {
//   configurable: true,
//   enumerable: true
//   // ...
// });

console.log('person:', person); // person: { age: 23 }
console.log(Object.getOwnPropertyDescriptor(person, 'name')); // { value: 'Peter',
                                                              //   writable: false,
                                                              //   enumerable: false,
                                                              //   configurable: false }

// Object.defineProperties(person, {
//   propName: {
//     enumerable: ,
//     writable: ,
//     ...
//   },
//   prop2Name: { ... }
// });
