import '../index.js';

console.log(' ')
console.log('#########################')
console.log('Hello Day 2');
console.log('#########################');

/*
  Primitive Data types are immutable (non-modifiable)
*/
let word = 'JavaScript';
console.log(word)

// Throws error
// word[0] = 'Y';
console.log(word);

/*
  Primitive Data types are compared by its values
*/
let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo)

// Next Check
let js = 'JavaScript';
let py = 'Python';
console.log(js == py);

// Next Check
let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff);
