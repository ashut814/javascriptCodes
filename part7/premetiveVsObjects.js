"use strict";
/*
let age = 30;
let oldAge = age;

age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name : "ashu",
    age : 20,
};

const friend = me;
friend.age =  27;
console.log('friend', friend);
console.log(me);

*/

// premetive types
let lastName = "williams";
let oldLastName = lastName;
lastName = "davis";
console.log(lastName, oldLastName);

// refernce type
const jessica = {
  firstName: "jessica",
  lastName: "williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "davis";
console.log("before marriage : ", jessica);
console.log("after marriage :", marriedJessica);

// marriedJessica = {};

// copying objects

const jessica2 = {
  firstName: "jessica",
  lastName: "williams",
  age: 27,
  family: ["alice", "bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "david";

jessicaCopy.family.push("marry");
jessicaCopy.family.push("jhon");

console.log("before marriage:", jessica2);
console.log("after marriage:", jessicaCopy);

