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

// if (restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }
// if (restaurant.openingHours.fri) {
//   console.log(restaurant.openingHours.fri.open);
// }

//optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.fri?.open);

// example
const days = ["mon", "tue", "wed", "thu", "fri", "sat"];
for (const day of days) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`on ${day} we open at ${open}`);
}

//
console.log(restaurant.orderRissoto?.(0, 1) ?? "method does not exist");

// arrays
const users = [{ name: "ashu", email: "asb@gmail.com" }];
console.log(users[0].name ?? "use array empty");
if (users.length > 0) console.log(users[0].name);



