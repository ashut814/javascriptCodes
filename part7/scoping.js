"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // creating new variables with same name as outer scope var
      const firstName = "steven";
      const str = `oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // reassigning outer scope variable
      output = "new output";
    }
    console.log(millenial); // const and let are block scope
    // add(2,3); // block scoped true for strict mode only
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = "ashu";
calcAge(1991);
//console.log(age); // not accessable
//printAge(); - can't access

