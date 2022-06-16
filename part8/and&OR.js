"use strict";
const restaurant = {
  name: "classico italiano",
  location: "pratapgarh 230139",
  categories: ["italian", "pizzeria", "vegetarian", "organic"],
  starterMenu: ["focaccia", "bruschetta", "garlic bread", "caprese salad"],
  mainMenu: ["pizza", "pasta", "risotto"],

  openingHours: {
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
  },
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
  orderPizza: function (Maining, ...otherIng) {
    console.log(Maining, otherIng);
  },
};
// use any data type
// return any data type
// cause short-ciruiting
console.log(3 || "jonas");
console.log("" || "jonas");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "hello" || 23 || null);

restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// AND

console.log(0 && "jonas");
console.log(true && 0);
console.log(true && 1);
console.log(9 && "jonas");

console.log("hello" && 23 && null && "jonas");
