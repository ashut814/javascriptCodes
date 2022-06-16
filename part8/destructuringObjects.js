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
  orderDelivery: function({starterIdx , mainIdx, time , address}){
    console.log(`order recieved! ${this.starterMenu[starterIdx]} and ${this,this.mainMenu[mainIdx]} will be delivered to ${address} at ${time}` );
  }
};

restaurant.orderDelivery({
  time: '22:10',
  address: 'via del sole ',
  mainIdx :2,
  starterIdx: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//console.log(restaurant.menu);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
// let c = 888;

const obj = { a: 23, b: 7, c: 34 };
({ a, b } = obj);
console.log(a, b);

// nested destructuring

const {fri: { open: o, close: c },} = openingHours;
console.log(o, c);
