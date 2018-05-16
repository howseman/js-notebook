class Task {}

class TaskCollection {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  log() {
    this.tasks.forEach( (task, index) => {
      console.log(typeof task, index);
    });
  }

  prepare() {
    innerScopeFunction();
    // This function IS HOISTED
    function innerScopeFunction() {
      // NOTE: In this case 'this' is NOT in the class scope, is the innerScopeFunction scope
      console.log(this); // undefined
    }

    // This function IS NOT HOISTED
    const classScopeFunction = () => {
      console.log(this); // TaskCollection {...}
    }
    classScopeFunction();
  }

  defaultNameParam() {
    return 'Man';
  }
  //new: using a function as a default parameter
  doSomething(param1, param2 = this.defaultNameParam()) {
    console.log( param1 + " " + param2 );
  }

  newObjetSeeding(name, password) {
    return {name, password}
  }
}

let tc = new TaskCollection([
  new Task, new Task, new Task
]);

console.log(tc.newObjetSeeding('Jhon', '12345'));
tc.prepare();
