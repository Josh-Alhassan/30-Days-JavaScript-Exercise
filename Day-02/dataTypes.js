import '../index.js';

console.log(' ');
console.log('#########################');
console.log('Hello Day 2');
console.log('#########################');

/*
  Primitive Data types are immutable (non-modifiable)
*/
let word = 'JavaScript';
console.log(word);

// Throws error
// word[0] = 'Y';
console.log(word);

// Primitive Data types are compared by its values
let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo);

// Next Check
let js = 'JavaScript';
let py = 'Python';
console.log(js == py);

// Next Check
let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff);

/*
  Non-Primitive Data Types are mutable or modifiable. They cannot be compared by value
*/

// Arrays are mutable
let nums = [1, 2, 3];
nums[0] = 10;
console.log(nums);

// ** Rule of Thumb Non-primitive data types (functions, array, or Objects) cannot be compared by value
let numArrOne = [1, 2, 3];
let numArrTwo = [1, 2, 3];
console.log(numArrOne == numArrTwo); //False

let userOne = {
  name: 'Joshua',
  role: 'Student',
  country: 'Nigeria',
};

let userTwo = {
  name: 'Joshua',
  role: 'Student',
  country: 'Nigeria',
};
console.log(userOne == userTwo); // false

// Two object are only strictly equal if they refer to the same underlying object
userTwo = userOne;
console.log(userOne == userTwo); // true
