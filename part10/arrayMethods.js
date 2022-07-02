// concepts
// const currencies = new Map([
//   ["USD", "USA"],
//   ["EUR", "EURO"],
//   ["INR", "INDIA"],
// ]);

// array methods
// methods are function are attach  to object

let arr = ["a", "b", "c", "d", "e"];
//slice method => extract part of array without changing

console.log(arr.slice(2)); // return a new array
console.log(arr.slice(2, 4));
console.log(arr.slice(-2)); // lst 2 element of array
console.log(arr.slice(1, -2));

// we can use slice method to create cpy of any array
console.log(arr.slice());

// splice method -> it does change original array
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr); // splice mutates array

// reverse
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["f", "g", "h", "i", "j"];
console.log(arr2.reverse(2, 3)); // mutate original array
console.log(arr2);

// concat

const letters = arr.concat(arr2);
console.log(letters);
//or
console.log(...arr, ...arr2);

// join
console.log(letters.join(" - "));

// foreach method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements)
for(const [i,movement] of movements.entries()){

  if (movement > 0) {
    console.log(`Movement ${i+1}: you deposited ${movement}`);
  } else {
    console.log(`Movement ${i+1}: you withdrew ${Math.abs(movement)}`);
  }
}

// using foreach
console.log("----FOREACH------");

movements.forEach(function (movement, index , array) {
  if (movement > 0) {
    console.log(`Movement ${index+1}: you deposited ${movement}`);
  } else {
    console.log(`Movement ${index+1}: you withdrew ${Math.abs(movement)}`);
  }
});

// 0: function(200)
// 1: function(450)
// 2: function(400)

// foreach in set and map

const currencies = new Map([
  ["USD", "USA"],
  ["EUR", "EURO"],
  ["INR", "INDIA"],
]);

currencies.forEach(function (val, key, map) {
  console.log(`${key}: ${val}`);
});

// set

const currenciesNew = new Set(["USD", "INR", "EUR", "EUR", "USD"]);
console.log(currenciesNew);

currenciesNew.forEach(function(val,val1,map){
    console.log(`${val}: ${val}`);
})
