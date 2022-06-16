var names = ["ashu" , "ayushi" , "palak"];
var years = new Array(1990 , 1996 , 1998);
console.log(names);
console.log(names.length);

// mutable
names[1] = "anchal";
console.log(names);

names[3] = "marry";
console.log(names);

// different datatypes

var jhon = ["ashu" , "tripathi" , 1990 , "engineer"];

jhon.push("blue");
jhon.unshift("mister");
console.log(jhon);

console.log(jhon.indexOf(1990));


jhon.pop();
jhon.pop();
jhon.pop();
console.log(jhon);

jhon.shift();
console.log(jhon);


//