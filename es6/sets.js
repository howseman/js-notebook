/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * The Set object lets you store unique values of any type, whether primitive values or object references.
 * 
 * Syntax:
 *   new Set([iterable]);
 * Parameters
 *   iterable
 *     If an iterable object is passed, all of its elements will be added to the new Set. If you don't specify this parameter, or its value is null, the new Set is empty.
 * Return value
 *   A new Set object.
 */

 const carBrands = new Set(['volvo', 'audi']);
// Set(2) {'volvo', 'audi'}
carBrands.add('mazda');
// Set(3) {'volvo', 'audi', 'mazda'}

// You can also use a set as the optional constructor parameter
const carBrandsCopy = new Set(carBrands);
carBrandsCopy.add('bmw');
// Set(4) {'volvo', 'audi', 'mazda', 'bmw'}
