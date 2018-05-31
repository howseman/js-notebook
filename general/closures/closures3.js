var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function(v) {
      changeBy(v || 1);
    },
    decrement: function(v) {
      changeBy(-(v) || -1);
    },
    value: function() {
      return privateCounter;
    }
  }  
};
// Multiple instances of MakeCounter
var counter1 = makeCounter();
var counter2 = makeCounter();
console.log(counter1.value()); /* logs 0 */
counter1.increment(2);
counter1.increment(3);
console.log(counter1.value()); /* logs 5 */
console.log(counter2.value()); /* logs 0 */
counter1.decrement();
console.log(counter1.value()); /* logs 4 */
console.log(counter2.value()); /* logs 0 */