function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
}

Person.prototype.setFullName = function(fullName) {
  this.firstName = fullName.split(' ', 2)[0];
  this.lastName = fullName.split(' ', 2)[1];
}

const student1 = new Person('Luke', 'Marshall', 29);
student1.setFullName('Andrea Frost');

function changeNameImpure(name) {
  name = 'Impure Name';
}

changeNameImpure(student1.firstName); // Passed by value
console.log(student1);
