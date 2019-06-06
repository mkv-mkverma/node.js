/**
 * An arrow function expression has a shorter syntax than a function expression and
 * does not have its own this, arguments, super, or new.target.
 * These function expressions are best suited for non-method functions, and they cannot be used as constructors.
 */

 /**
  * Basic Syntax
  * (param1, param2, …, paramN) => { statements }
  * (param1, param2, …, paramN) => expression
  * // equivalent to: => { return expression; }
  * // Parentheses are optional when there's only one parameter name:
  * (singleParam) => { statements }
  * singleParam => { statements }
  * // The parameter list for a function with no parameters should be written with a pair of parentheses.
  * () => { statements }
  */


/**
 * Advanced Syntax
 *
 * // Parenthesize the body of function to return an object literal expression:
 * params => ({foo: bar})
 * // Rest parameters and default parameters are supported
 * (param1, param2, ...rest) => { statements }
 * (param1 = defaultValue1, param2, …, paramN = defaultValueN) => {
 * statements }
 * // Destructuring within the parameter list is also supported
 * var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c; f(); // 6
 */
// var materials = 5
var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];

function lengthCalculate(){
    try {
        return materials.map(materialsArray => materialsArray.length);
        // return materials.map(({length}) => length);
    } catch (error) {
        console.log(error) // Type error
    }
}
console.log(lengthCalculate()); // expected output: Array [8, 6, 7, 9]
console.log(materials.map(({length}) => length)); // expected output: Array [8, 6, 7, 9]
function filterItems(){
    try {
        // return materials.filter(materialsArray => materialsArray.length > 6);
        return materials.filter(materialsArray => materialsArray.toLowerCase().indexOf('um') > -1);
    } catch (error) {
        console.log(error) // Type error
    }
}
console.log(filterItems()); // [ 'Helium', 'Lithium', 'Beryllium' ]

///////////////////// No separate this /////////////////////////////////

/**
 * Until arrow functions, every new function defined its own this value
 * (a new object in the case of a constructor, undefined in strict mode function calls,
 * the base object if the function is called as an "object method", etc.).
 * This proved to be less than ideal with an object-oriented style of programming.
 */

//////////////////// Function body /////////////////////

/** Syntax */

var func = x => x * x;
// concise body syntax, implied "return"

var func = (x, y) => { return x + y; };
// with block body, explicit "return" needed

///////////////////// Use of the new operator //////////////////////////

// Arrow functions cannot be used as constructors and will throw an error when used with new.

var Foo = () => {};
var foo = new Foo(); // TypeError: Foo is not a constructor

//////////////////////// Use of prototype property /////////////////////////////

// Arrow functions do not have a prototype property.

var Foo = () => {};
console.log(Foo.prototype); // undefined

//////////////////// Line breaks ////////////////////

// An arrow function cannot contain a line break between its parameters and its arrow.

var func = ()
           => 1;
// SyntaxError: expected expression, got '=>'

/////////////////// Returning object literals ///////////////////////////

// var func = () => { foo: 1 };
// Calling func() returns undefined!

// var func = () => { foo: function() {} };
// SyntaxError: function statement requires a name

var func = () => ({foo: 1});

////////////////// Parsing order ////////////////////

// Although the arrow in an arrow function is not an operator,
// arrow functions have special parsing rules that interact differently with operator precedence compared to regular functions.

let callback;

callback = callback || function() {}; // ok

// callback = callback || () => {};
// SyntaxError: invalid arrow-function arguments

callback = callback || (() => {});    // ok

/////////////////////// More Examples ///////////////////////////////

// An empty arrow function returns undefined
let empty = () => {};

(() => 'foobar')();
// Returns "foobar"
// (this is an Immediately Invoked Function Expression
// see 'IIFE' in glossary)

var simple = a => a > 15 ? 15 : a;
simple(16); // 15
simple(10); // 10

let max = (a, b) => a > b ? a : b;

// Easy array filtering, mapping, ...

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a + b);
// 66

var even = arr.filter(v => v % 2 == 0);
// [6, 0, 18]

var double = arr.map(v => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
promise.then(a => {
  // ...
}).then(b => {
  // ...
});

// Parameterless arrow functions that are visually easier to parse
setTimeout( () => {
  console.log('I happen sooner');
  setTimeout( () => {
    // deeper code
    console.log('I happen later');
  }, 1);
}, 1);