"use strict";
/*
console.log(this);

const calcAge = function(birthyear){
    console.log(2037-birthyear);
    console.log(this);
}
calcAge(1991); */

/* arrow function
const calcAgeArrow = (birthyear) => {
  console.log(2037 - birthyear);
  console.log(this);
};
calcAgeArrow(1991);

// this inside method
const jonas = {
  year: 2000,
  calcAge: function () {
    console.log(2018 - this.year);
  },
};
jonas.calcAge();

const ashu = {
  year: 1997,
};

ashu.calcAge = jonas.calcAge;
ashu.calcAge();

const f = jonas.calcAge;
//f(); */

// regular function vs arrow function
// var firstName = 'tripathi';
const jonas = {
  firstName: "ashu",
  year: 2000,
  calcAge: function () {
    console.log(2018 - this.year);
//    const self = this; // self or that
/* solution-1
    const isMillenial = function() {
      console.log(self.year === 1981 && self.year <= 1996);

    }
    isMillenial(); */

    // solution-2
    const self = this; // self or that
    const isMillenial = () => {
      console.log(self.year === 1981 && self.year <= 1996);  
    }
    isMillenial();   
  },
  greet: function () {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();
//console.log(this.firstName); -> undefined

 // never ever use an array as method
 // eg: function inside a method
 // argument keywords
const addExpr = function(a,b){
  console.log(arguments);
  return a+b;
}

addExpr(2,5);
addExpr(2,5,8,3);
var addArrowww = (a,b) => {
  console.log(arguments);
  return a+b;
}
addArrowww(2,5,8);