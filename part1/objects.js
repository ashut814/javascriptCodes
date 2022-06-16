// // 
// // object literals

// var jhon = {
//     firstName: "ashu",
//     lastName: "tripathi",
//     birthYear: 1990,
//     family: ["jane" , "merry" , "danny"],
//     job: "teacher",
//     isMarried: false
// };
// // console.log(jhon.lastName);

// // var x = "birthYear";
// // console.log(jhon[x]);

// // mutate

// jhon.job = "designer";
// jhon["isMarried"] = true;
// console.log(jhon);

// // creating new object

// var jane = new Object();
// jane.firstName = "mahesh";
// jane.birthYear = 1997;
// jane["lastName"] = "gupta";


// console.log(jane);

// objects and methods

// var jhon = {
//     firstName: "ashu",
//     lastName: "tripathi",
//     birthYear: 1990,
//     family: ["jane" , "merry" , "danny"],
//     job: "teacher",
//     isMarried: false,
//     calcAge: function(){
//         this.age =  2018-this.birthYear;
//     }
// };
// var age = jhon.calcAge();
// jhon.age = age;

// jhon.calcAge();
// console.log(jhon);

// bmi  challengem jhon and mark

var jhon = {
    fullName: "ashutosh",
    mass: 90,
    height: 1.5,
    calcBMI: function(){
        this.bmi= this.mass / (this.height * this.height)
        return this.bmi;
    }
};

var mark = {
    fullName: "ravi",
    mass: 91,
    height: 1.9,
    calcBMI: function(){
        this.bmi= this.mass / (this.height * this.height)
        return this.bmi;
    }
};

jhon.calcBMI();
mark.calcBMI();
console.log(jhon , mark);

if(jhon.bmi > mark.bmi){
    console.log(jhon.fullName + " has bmi of " + jhon.bmi);
}
else if(mark.bmi > jhon.bmi){
    console.log(mark.fullName + " has bmi  of " + mark.bmi);
} 
else{
    console.log("same bmi")
}




