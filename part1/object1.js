///////////////////////////////////////
/* Introduction to Objects
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
  ];
  const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  }; */
  ///////////////////////////////////////
  /* Dot vs. Bracket Notation
  const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  };


  console.log(jonas);
  console.log(jonas.lastName);
  console.log(jonas['lastName']);
  const nameKey = 'Name';
  console.log(jonas['first' + nameKey]);
  console.log(jonas['last' + nameKey]);
  // console.log(jonas.'last' + nameKey)

  const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
  if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
  } else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
  }

  jonas.location = 'Portugal';
  jonas['twitter'] = '@jonasschmedtman';
  console.log(jonas);

*/

/* object methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDrivingLicense: true,

    calcAge: function(){
        this.age = 2037- this.birthYear;
        return this.age;
    }
    
    // calcAge: function(birthYear){
    //     return 2037-birthYear;
    // }
};

console.log(jonas.calcAge());
console.log(jonas.age);  
console.log(jonas.age);

*/

  