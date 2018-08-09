var TeslaModelS = function() {
  this.numWheels    = 4;
  this.manufacturer = 'Tesla';
  this.make         = 'Model S';
}

TeslaModelS.prototype.go = function() {
  // Rotate wheels
}

TeslaModelS.prototype.stop = function() {
  // Apply brake pads
}

// Same as above
TeslaModelS.prototype = {
  go: function() {
    // Rotate wheels
  },
  stop: function() {
    // Apply brake pads
  }
}

// Encapsulating
TeslaModelS.prototype = function() {

  var pressGasPedal = function() {
    // Rotate wheels
  };

  var pressBrakePedal = function() {
    // Apply brake pads
  };

  // Private because is'nt exposed
  var checkGasLevel = function() {
    // Check gas level
  }

  return {
    stop: pressBrakePedal,
    go: pressGasPedal
  }
}();