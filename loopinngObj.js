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

//property name
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days`;
for (const day of properties) {
  openStr += `${day}`;
}
console.log(openStr);

// property values
const values = Object.values(openingHours);
console.log(values);

// entire object
const entries = Object.entries(openingHours);
console.log(entries);

//  key values
for(const [keys, {open,close}] of entries){
  console.log(`on ${keys} we open at ${open} and close at ${close}`);
}

// 