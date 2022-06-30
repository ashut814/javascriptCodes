"use strict";

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();

booker();
booker();
booker();

//closure makes remember all the variables existed at function birthplace

console.dir(booker); // [Function (anonymous)]

// more examples

//1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 111;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
// re-assigning function
h();
f();
console.dir(f);

// exmaple -2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`we are now boarding all ${n}`);
    console.log(`there are three group with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`will start baord in ${wait} seconds`);
};

// setTimeout(function () {
//   console.log("TIMER");
// }, 3000);
const perGroup = 1000;

boardPassengers(100, 3);
