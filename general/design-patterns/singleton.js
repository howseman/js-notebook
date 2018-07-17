var ClassA = function (name) {
  this.name = name;
};

var Singleton = (function () {
  var instance;

  function createInstance(className, instanceParams) {
    try {
      if (instanceParams && Array.isArray(instanceParams)) {
        instance = new className(arguments[1]);
      } else {
        instance = new className;
      }
      return instance;
    } catch (error) {
      throw (error.message);
    }
  }

  return {
    getInstance: function (className, instanceParams) {
      return instance || createInstance(className, instanceParams);
    }
  }
})();

var instance1 = Singleton.getInstance(ClassA, ['Jhon']);
var instance2 = Singleton.getInstance(ClassA, ['Luke']);
console.log('instance1', instance1);
console.log('instance2', instance2);
console.log('Same instance?', (instance1 === instance2));
