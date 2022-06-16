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
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const [i, element] of menu.entries( )) {
  console.log(`${i + 1}: ${element}`);
}

// for (const i of menu.entries()) {
//   console.log(i);
// }

// console.log([...menu.entries()]);

