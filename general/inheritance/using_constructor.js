// Constructor without params:
function Brick() {
  this.width = 10;
  this.height = 20;
}

// You could inherit the width and height properties by doing this (as well as the other steps described below, of course):
function BlueGlassBrick() {
  Brick.call(this);

  this.opacity = 0.5;
  this.color = 'blue';
}
console.log(BlueGlassBrick);

// Constructor with params:
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

// The methods are all defined on the constructor's prototype. For example:
Person.prototype.greeting = function() {
  console.log('Hi! I\'m ' + this.name.first + '.');
};

// Like <class Teacher extends Person>
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}
console.log(Teacher);
