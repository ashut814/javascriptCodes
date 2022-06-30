// immedietly invoked fucntion expression

const run1s = function () {
  console.log("this will never run again");
};
run1s();

// IIFE
(function () {
  console.log("this will never run again");
  const isPrivate = 23; // encapsulated inside this function scope
})();

// not works
// console.log(isPrivate);

//IIFE WITH arrow function
(() => console.log("this will never run again"))();

{
  const isPrivate = 23;
  var notPrivate = 112;
  var haiprivate = 212;
}
// console.log(isPrivate); => not works
console.log(notPrivate);
console.log(haiprivate);




