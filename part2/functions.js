// fucntion declarations

// function logger(){
//     console.log("my name is ashu");
// }
// // invoking fucntions
// logger();

////            ***                            ///

// function addTWO(a,b){
//     return a+b;
// }
// var sum = addTWO(3,5);
// console.log(sum);

/* function expression

const calcAge = function (birthYear) {
    return 2027 - birthYear;
}
const age = calcAge(1990);
console.log(age);

*/

// arrow functions
/*
const calcAge =  birthYear => 2037-birthYear;
const age = calcAge(1991);
console.log(age);
*/
/*
const retiremntAge = (birthYear , firstName) =>{
    const age = 2027 - birthYear;
    const retiremnt = 65 - age;

    return '${firstName} retires in ${retiremnt}';
}

console.log(retiremntAge(1990 , "ashutosh"));
*/

/* Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

*/