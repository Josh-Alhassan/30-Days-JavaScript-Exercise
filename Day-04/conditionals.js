console.log('hello to DAy 04')

// If Statement
/* Example 1 */
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}

/* Example 2 */
let isRaining = true;
if (isRaining) {
  console.log('Remember to take your rain coat.')
}

// If Else statement
let negativeNum = -3
if ( negativeNum > 0 ) {
  console.log(`${negativeNum} is a positive number`)
} else {
  console.log(`${negativeNum} is a negative number`)
}

isRaining = false
if (isRaining) {
  console.log('You need a rain coat')
} else {
  console.log('No need for a rain coat')
}

// if else if-else
let a = 0;
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}

let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny' ) {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat')
}