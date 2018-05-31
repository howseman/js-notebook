'use strict';
function Person(name, age) {
  this.name = name;
  this.age = age || 0;

  this.sayAge = () => {
    console.log(this.age);
  };

  this.sayAgeAsync = _sayAgeAsync;
  function _sayAgeAsync() {
    const self = this;
    setTimeout(function() {
      console.log('sayAgeAsync() :: assigning a "pseudo" this variable:', self.age);
    }, 500);

    setTimeout((function() {
      console.log('sayAgeAsync() :: using "bind()" function:', this.age);
    }).bind(this), 500);
    
    setTimeout(() => {
      console.log('sayAgeAsync() :: using an arrow function:', this.age);
    }, 500);
  }
}

Person.prototype.sayName = function() {
  console.log('my name is:', this.name); // my name is: Josh
};

// this.name = 'Luke';
Person.prototype.sayArrowName = () => {
  // Here 'this' is in the global (parent) scope
  console.log('my arrow name is:', this.name); // my name is: undefined
};

const person = new Person('Josh', 45);
person.sayName();
person.sayArrowName();
person.sayAge();
person.sayAgeAsync();
