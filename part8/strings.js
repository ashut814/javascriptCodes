"use strict";
const airline = "TAP Air America";
const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);
// console.log("B737"[0]);

console.log(airline.length);

// methods

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("America"));

// slice method to extract a part of ttring

console.log(airline.slice(4)); // (begin(index) , end(index))

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle class
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You Got The Middle Seat");
  } else {
    console.log("You Got Lucky");
  }
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("ashu")); // object
console.log(typeof new String("jonas")); // return object

// all string methods returns premetive
console.log(new String("jonas").slice(2));
console.log(typeof new String("jonas").slice(2));

// changing the case of string
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization in name
const passenger = "aShU"; // Ashu
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// check user input email
const email = "hello@ashu.io";
const loginEmail = "  Hello@Ashu.Io \n";
// const loginEmailLower = loginEmail.toLowerCase();
// const trimmedEmail = loginEmailLower.trim(); // to remove spaces
// console.log(trimmedEmail);

const normalEmail = loginEmail.toLowerCase().trim();
console.log(normalEmail);

console.log(email === normalEmail);

// replacing

const priceGb = "288,00#";
const priceUS = priceGb.replace("#", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23 , bording door 23!";

console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));

// using expression
console.log(announcement.replace(/door/g, "gate"));

// boolean return type
const plane1 = "Airbus A320Bneo";
console.log(plane1.includes("A320"));
if (plane1.startsWith("Airbus") && plane1.endsWith("neo")) {
  console.log("part of  the NEW AIRBUS FAMILY");
}

// practice expercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("not allowed");
  } else {
    console.log("welcome");
  }
};
checkBaggage("I have, some food and a pocket Knife");
checkBaggage("socks and camera");
checkBaggage("got some snacks and gun for protection");

// split
console.log("a+very+nice+string".split("+"));
console.log("ashutosh tripathi".split(" "));

const [firstName, lastName] = "ashutosh tripathi".split(" ");

// join method
const Newname = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(Newname);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const nameUpper = [];
  for (const n of names) {
    // nameUpper.push(n[0].toUpperCase() + n.slice(1));
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("ashutosh tripathi good man");

// padding a string -> add number of char to string
// untill string has a desired number of length

const message = "Go to gate 23";
console.log(message.padStart(25, "+"));
console.log("jonas".padStart(23, "+"));
console.log("jonas".padEnd(23, "."));

// credit card example hidden numbers
const maskCreditCard = function(number){
  const str = number + " ";
  const last4 = str.slice(-5);
  return last4.padStart(str.length,'*');
}

console.log(maskCreditCard(64637836));
console.log(maskCreditCard('43343224434312312313133'));

// repeat method
const msg2 = 'Bad weather all departure late...';
console.log(msg2.repeat(5));

const planeInLine = function(n){
  console.log(`there are ${n} planes in line ${'✈'.
repeat(n)}`);
}
planeInLine(5);
planeInLine(4);

