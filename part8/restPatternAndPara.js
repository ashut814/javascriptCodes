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
  orderPizza: function(Maining ,...otherIng){
      console.log(Maining , otherIng);
  }
};
// spread --> bcoz on right side of assignment operater
const arr = [1, 2, ...[3, 4]];

// rest --> coz left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , rissoto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, rissoto, otherfood);

// objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// functions

const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
console.log(add(2, 3));
console.log(add(5, 3, 6, 7));
console.log(add(8, 1, 2, 1, 2, 3, 1, 2, 2, 1, 2));

const x = [23, 5, 7];
console.log(add(...x));

restaurant.orderPizza('mushrooms' , 'onion' , 'olives' , 'spinach');
