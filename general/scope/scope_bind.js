// .bind(scope, args)
// Executes a function in a defined scope (this|object)

function sayName(callerParam) {
  var fullName = this.firstName + ' ' + this.lastName + ' :: ' + callerParam;
  console.log('[this] in sayName function:', this);
  console.log('fullName:', fullName, '\n');
  return fullName;
}

var person1 = {
  firstName: 'Luke',
  lastName: 'Morrison'
};

var person2 = {
  firstName: 'Maria',
  lastName: 'Lauren'
};

// using [bind] without params
var sayNameForP1 = sayName.bind(person1);
sayNameForP1('called for person1');
// using [bind] with params
var sayNameForP2 = sayName.bind(person2, 'called for person2');
sayNameForP2();
// NOTE: attaching a method to an object doesn't change the original binded "this"
// person2.sayName = sayNameForP1; // this is original binded to person1
// person2.sayName('called from person2');

console.log('sayName in person1:', 'sayName' in person2);
