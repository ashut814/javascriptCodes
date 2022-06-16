
// const arr = ["abc","def","fgh"];
// console.log(arr);
// console.log(arr.length )

// // mutate even if const
// arr[2] = "ashu";
// console.log(arr)

// // hold values with different type

// const arr1 = ["abcd", "123" , 2019-1234 , arr];

// console.log(arr1);
// console.log(arr1.length);


// push - insert at last
const arr = ["abc","def","fgh"];
arr.push("joy");
console.log(arr);

// pop - delete last element
arr.pop();
console.log(arr);

// unshift -> insert at first index
arr.unshift("ayushi");
console.log(arr);

// shift -> delets first index
arr.shift();
console.log(arr);

//  indexof -> check index 
console.log(arr.indexOf("def"));

// includes -> returns true or false that element is present or not

console.log(arr.includes("abcd"));   