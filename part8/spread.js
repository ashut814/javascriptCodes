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
};

const arr = [7, 8, 9];
// const badnewArr = [1,2,arr[0] , arr[1] , arr[2]];
// console.log(badnewArr);

const newArr = [1, 2, 3, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "gnocii"];
console.log(newMenu);

//  by spread operater we can create shallow cpy of arr
// and can merge two arrays

// cpy array
const mainMenuCpy = [...restaurant.mainMenu];
console.log(mainMenuCpy);

// join two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// itrerable - arr , string , maps, sets but not objects

const str = "jonas";
const letters = [...str, " ", "s"];
console.log(letters);
// console.log(...str);

// console.log(`${...str} ashu`);

// const ingredients = [
//   prompt("ingredient1 ?"),
//   prompt("lingredient2 ?"),
//   prompt("ingredient3 ?"),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// objects
const newRestaurent = { ...restaurant, founder: "ambani" };

console.log(newRestaurent);

const restaurantCpy = { ...restaurant };
restaurantCpy.name = "hotelAroma";
console.log(restaurantCpy.name);
console.log(restaurant.name);
