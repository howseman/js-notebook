// methods injection with .call and .apply

function sayName() {
  var fullName = this.firstName + ' ' + this.lastName;
  console.log('fullName:', fullName);
  console.log('arguments:', arguments);
  console.log('[this] in sayName function:', this);
  console.log('\n');
  return fullName;
}

var p1 = {
  firstName: 'Rayder',
  lastName: 'Wiggings'
};

var p2 = {
  firstName: 'Luke',
  lastName: 'Rudolph',
  color: 'green'
};

// Using [call] you don't need to add the function directly to
// p1 object, simply call it and ready!
// Function.call(this: Function, thisArg: any, ...argArray: any[]): any
sayName.call(p1, 'using .call()', 'argument1', 'argument2');
// Same as call but it receives an array as second parameter
sayName.apply(p2, ['using .apply()', 'argument1', 'argument2', 'arg3']);
