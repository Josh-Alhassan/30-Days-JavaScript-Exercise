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

/*
  NUMBERS - are integers and decimal values which can do all arithmetic operations
*/

// Declaring Number Data type
let age = 24;
const gravity = 9.81;
let mass = 72;
const PI = 3.14;
const boildingPoint = 100;
const bodyTemp = 37;

console.log(age, gravity, mass, PI, boildingPoint, bodyTemp);

// Math Objects
const mathPI = Math.round(PI);
console.log(Math.round(9.81)); // 10

console.log(Math.floor(PI)); // 3 rounding down

console.log(Math.ceil(PI)); // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, returns the maximum value

const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random() * 11); // creates random number between 0 and 10
console.log(num);

//Absolute value
console.log(Math.abs(-10)); // 10

//Square root
console.log(Math.sqrt(100)); // 10

console.log(Math.sqrt(2)); // 1.4142135623730951

// Power
console.log(Math.pow(3, 2)); // 9

console.log(Math.E); // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046

// Trigonometry
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);

/*
  The JavaScript Math Object has a random() method number generator which generates number from 0 to 0.999999999...
*/
let randomNum = Math.random(); // generates 0 to 0.999...
console.log(randomNum);

let numBtnZeroAndTen = randomNum * 11;

console.log(numBtnZeroAndTen); // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor); // this gives between 0 and 10
