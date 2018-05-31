// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function makeAdder(x) {
  return function(y) {
    return x + y; // x comes from the makeAdder (outside) scope
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

/////////////////////////

function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}
// these vars are equivalent to the annonymous function inside makeSizer
var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);
// In this case are used as event handlers
// document.getElementById('size-12').onclick = size12;
// document.getElementById('size-14').onclick = size14;
// document.getElementById('size-16').onclick = size16;
