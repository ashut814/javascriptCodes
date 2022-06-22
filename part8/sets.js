"use strict";

// can't have duplicates

const orderSet = new Set([
  "pasta",
  "pizza",
  "pizza",
  "risotto",
  "pasta",
  "pizza",
]);

console.log(orderSet);

console.log(new Set("jonas"));

// size of set
console.log(orderSet.size);

// check element is present or not
console.log(orderSet.has("bread"));

// add new element

orderSet.add("garlic bread");
orderSet.add("garlic bread");
orderSet.add("chilly paneer");

console.log(orderSet);

// delete

orderSet.delete("risotto");
console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

// example

const staff = ['waiter','chef','waiter','manager','chef','waiter'];

const newStaff = new Set(staff);
console.log(newStaff);