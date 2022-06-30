"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(233, "ashutosh");
lufthansa.book(244, "ayushi");
console.log(lufthansa);

const erowings = {
  airline: "eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
//does nt work
// book(23,'aditya');

// to manipulate this key word we use call method
// to use this of some other object in some other object
// here we used lufthansa this keyword in erowings using call function

book.call(erowings, 23, "aditya");
console.log(erowings);
book.call(lufthansa, 231, "marry");

const swiss = {
  airline: "swiss ",
  iataCode: "SW",
  bookings: [],
};

book.call(swiss, 232, "Harry");
console.log(swiss);

// apply method -> same as call , but it will not recieve arg
// after this keyword
// we need to pass array instead of this keyword
const flightDta = [583, "abcd"];
book.apply(swiss, flightDta);
console.log(swiss);

// same as the above code of apply methods
book.call(swiss, ...flightDta);

// bind methods -> manually sets this keyword for any fn call
// it does not immideitly call to the function ,
// it returns a new function where this keyword is bound

const bookEW = book.bind(erowings); // return new function
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, "asjjd");
bookLH(2113, "ADDD");
bookLX(2123, "ABBB");
// console.log(erowings);

const bookEW23 = book.bind(erowings, 23);
bookEW23("alooo");
bookEW23("paratha");

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
lufthansa.buyPlane();
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// partial application
// we can pre set parameters

const addTax = (rate, value) => value + rate * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
console.log(addVat(100));

const addtaxRATE => function(rate){
    return function(value){
        return value + value * rate;
    };
};

const addVat2 = addtaxRATE(0.23);
console.log(addVat2(100));
console.log(addVat2(23));
