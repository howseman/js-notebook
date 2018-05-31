'use strict';
declaration();
expression();

function declaration() {
  console.log('I\'m a declaration type function');
}

var expression = function() {
  console.log('I\'m an expression type function');  
};
