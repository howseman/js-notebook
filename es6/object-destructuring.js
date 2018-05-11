var person = {
  name: 'John',
  age: 32,
  city: 'London'
}

let { name, age } = person;
// Behaves like:
// let name = person.name;
// let age = person.age;
console.log('age: ', age); // age: 32

function greet({ name, age }) {
  console.log(`Hello, ${name}. You are ${age}`);
}

greet(person);