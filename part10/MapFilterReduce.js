/* map => method to loop over array

const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];
const euroUsd = 1.1;
const movementsUsd = movements.map(function (mov) {
  return mov * euroUsd;
});
console.log(movements);
console.log(movementsUsd);

const movementsUsdfor = [];
for (const mov of movements) {
  movementsUsdfor.push(mov * euroUsd);
  console.log(movementsUsdfor);
}

// movementsUsd call back using arrow function
const movementsUsdNew = movements.map((mov) => mov * euroUsd);

//
const movDesc = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrawl ${Math.abs(mov)}`;
  }
});

console.log(movDesc);
*/

/* filter method
const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

const deposit = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposit);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawals);

*/

// reduce method -> merge into a single number
const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

// accumlater - snowball
const balance = movements.reduce(function (accum, curr, i, arr) {
  console.log(`Itretion ${i}: ${accum}`);
  return accum + curr;
}, 0);
console.log(balance);

// max val of movemnents array
const max = movements.reduce((accum , mov) => {
    if(accum > mov){
        return accum;
    }
    else{
        return mov;
    }
},movements[0]);

console.log(max);