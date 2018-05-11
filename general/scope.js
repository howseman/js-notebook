function sayName() {
  var fullName = this.firstName + ' ' + this.lastName;
  console.log(fullName);
  console.log('[this] in sayName function:', this);
  return fullName;
}

var person = {
  firstName: 'Luke',
  lastName: 'Morrison',
  sayName: sayName,
  self: this
};
person.sayName();
console.log('person(this):', person.self);

console.log('-----------------------');

function Person(firstName, lastName) {
  // All local variables are only visible by the function itself
  // not by the instance(s)
  var firstName = firstName || 'Jhon';
  var lastName = lastName || 'Wayne';

  this.firstName = firstName;
  this.lastName = lastName;
  this.sayName = sayName;
  this.self = this;
}

var p = new Person('Bob', 'Sponge');
p.sayName();
console.log('p(this):', p.self);
