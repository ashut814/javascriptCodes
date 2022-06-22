// use to map values to key
// data stored in key-value pair
// any type of keys

"use strict";

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};
const restaurant = {
  name: "classico italiano",
  location: "pratapgarh 230139",
  categories: ["italian", "pizzeria", "vegetarian", "organic"],
  starterMenu: ["focaccia", "bruschetta", "garlic bread", "caprese salad"],
  mainMenu: ["pizza", "pasta", "risotto"],
  order: function (starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },
  orderDelivery: function ({ starterIdx, mainIdx, time, address }) {
    console.log(
      `order recieved! ${this.starterMenu[starterIdx]} and ${
        (this, this.mainMenu[mainIdx])
      } will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your pasta ${ing1},${ing2},${ing3}`);
  },
};

const rest = new Map();
rest.set("name", "classico");
rest.set(1, "italy");
console.log(rest);

rest
  .set("categories", ["ittalian", "pizzeria", "vegetarian", "organic"])
  .set("open", 11)
  .set("close", 1)
  .set(true, "we are open: D")
  .set(false, "we are close (:");

console.log(rest.get("name"));
console.log(rest.get("categories"));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

//
console.log(rest.has("categories"));
rest.delete(2);

// arrays as map key
const arr = [1, 2];
rest.set(arr, "test");
console.log(rest);

console.log(rest.size);
// rest.clear();

// console.log(rest.size);

console.log(rest.get(arr));

// maps itretion

const questions = new Map([
  ["question", "what is your name"],
  [1, "c"],
  [2, "java"],
  [3, "javascript"],
  ["correct", 3],
  [true, "correct"],
  [false, "wrong"],
]);
console.log(questions);

//  convert object to map
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// itration
// quiz  app
console.log(questions.get("question"));
for (const [key, value] of questions) {
  if (typeof key === "number") {
    console.log(`Amswer ${key}: ${value}`);
  }
}
const answer = Number(prompt("Your Answer"));
console.log(answer);

console.log(questions.get(questions.get("correct") === answer));

//convert map to array
console.log([...questions]);
// console.log(questions.entries());
console.log([...questions.keys()]);
console.log([...questions.values()]);

