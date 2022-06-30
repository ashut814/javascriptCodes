// How Passing Arguments Works: Values vs. Reference
const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24739479284,
};
const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;
  if (passenger.passport === 24739479284) {
    alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);
// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(jonas);
checkIn(flight, jonas);

// javascript does'nt have pass by reference

// function accepting callback function
const oneWord = function (str) {
  return str.replace(/ /g, " ").toLowerCase();
};
const uppperFirstword = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// higher order function
const transFormer = function (str, fun) {
  console.log(str);
  console.log(`Transformed string: ${fun(str)}`);

  console.log(fun.name);
};

transFormer("javascript is usefull", uppperFirstword);

// js uses callbacks all time
const high5 = function () {
  console.log("👋");
};

document.body.addEventListener("click", high5);

["ashu", "ayushi", "ansh"].forEach(high5);

// callback function allows to create abstraction

//  function returns new function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeter = greet("hey");
greeter("jonas");
greeter("steve");
greet("Hello")("ashu");

// write greet function using arrow function
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr("hi")("ayushi");
