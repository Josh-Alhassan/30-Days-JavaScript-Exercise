import '../index.js';

console.log(' ')
console.log('======> DAY 03 <=======')
console.log('BOOLEANS');

// Examples of Boolean
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let trueValue = 4 > 3
let falseValue = 4 < 3

console.log(trueValue, falseValue)

// Undefined
let firstName
console.log(firstName)

// Null
let empty = null
console.log(empty)

// Operators
// Assignment operators
firstName = 'Alhassan';
let country = 'Nigeria';

// Arithmetic Operators
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerof = numOne ** numTwo;

console.log(sum, diff, mult, div, remainder, powerof)

const PI = 3.14
let radius = 100          // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC


// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)