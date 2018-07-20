var Module = (function () {

  var privateMethod = function () {
    // private method
  };

  var publicMethod = function () {
    // public method
  };

  var publicMethodTwo = function () {
    // public method two
  };

  return {
    exposedMethod: publicMethod,
    exposedMethodTwo: publicMethodTwo
  };

})();

