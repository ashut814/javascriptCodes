/* maths 
var year , yearAshu , yearRavi;
ageAshu = 30;
ageRavi = 28;

var now  = 2022; 
yearAshu = (now - ageAshu);
yearRavi = (now - ageRavi);
 
console.log(yearAshu);
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// logical operater

var raviOlder = ageRavi < ageAshu;
console.log(raviOlder);

// typeof operater

console.log(typeof raviOlder);
console.log(typeof ageAshu);
console.log(typeof "age");

console.log(typeof x); */

// operater precedence

var  now = 2018;
var yearAshu = 1999;
var fullAge = 18;

var isFullage = (now - yearAshu) >= fullAge;


console.log(isFullage);

var ageAshu = now - yearAshu;
var ageRavi = 20;
var average =  (ageAshu + ageRavi) / 2;

console.log(average);

// examples on multiple assignments

var  x,y;
x =  y =  (3+5) *4 - 6;
console.log(x , y);

// more operaters

//x = x* 2;
x *= 2;
console.log(x);

