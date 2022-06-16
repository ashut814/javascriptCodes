"use strict";
// temproral dead zone

/* hoisting with variables
console.log(me);
console.log(job);
console.log(year);

var me = 'ashu';
let job = 'teacher';
const year = 2000;
*/

// with functions\

console.log(addDecl(2, 3));
//console.log(addExpr(2,3));
//console.log(addArrow(2,3));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

/// example

if (!products) {
  deleteShoppingCart();
}

var products = 10;

function deleteShoppingCart() {
  console.log("all products delete");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); 
console.log(y === window.y);
console.log(z === window.z);
