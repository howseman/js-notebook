const person1 = {
  name: 'Jhon',
  sayName: function() {
    console.log(this.name);
  }
};

person1.sayHello = function() {
  return 'Hello ' + this.name;
};

// Object.getPrototypeOf(person1).getName = function() {
person1.__proto__.getName = function() {
  return this.name;
};

// console.log('person1:\n', person1);
console.log('person1.__proto__:\n', person1.__proto__);
console.log('Object.getPrototypeOf({}):', Object.getPrototypeOf({}));

const person2 = Object.create(person1, {
  name: {
    value: 'Marcus',
    writable: true,
    enumerable: true,
    configurable: true
  }
});

console.log('\n');
// console.log('person2:\n', person2);
console.log('person2.__proto__:\n', person2.__proto__);
console.log('person2.getName:', person2.getName());

function MyColor(color) {
  this.color = color;
  this.sayColor = function() {
    return this.color;
  }
}


const myColor = new MyColor('green');
console.log(Object.getPrototypeOf(MyColor));
console.log();

