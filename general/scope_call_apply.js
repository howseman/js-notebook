function sayName() {
  var fullName = this.firstName + ' ' + this.lastName;
  console.log(fullName);
  console.log('arguments:', arguments);
  console.log('[this] in sayName function:', this);
  return fullName;
}

var p1 = {
  firstName: 'Rayder',
  lastName: 'Wiggings'
};
// Using [call] you don't need to add the function directly
// to p1 object, simply call it and ready!
// Function.call(this: Function, thisArg: any, ...argArray: any[]): any
sayName.call(p1, 'some string passed', 'another string', 'another arg');
// Same as call but it receives an array as second parameter
sayName.apply(p1, ['some string passed', 'another string', 'another arg']);
