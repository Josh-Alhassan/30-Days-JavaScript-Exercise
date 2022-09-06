/* Question 7: 
        Use the Date object to do the following activities
*/
// i. What is the year today?
const yearToday = new Date()
console.log('The year today is: ' + yearToday.getFullYear())

// ii. What is the month today as a number?
const monthToday = new Date()
console.log('The month today is: '+ (monthToday.getMonth() + 1))

// iii. What is the date today?
const dateToday = new Date()
console.log("Today's date is: " + dateToday.getDate())

// iv. What is the day today as a number?
const dayToday = new Date()
console.log('The day today is: '+ dayToday.getDay())

// v. What is the hours now?
const hoursNow = new Date()
console.log('It is the '+ hoursNow.getHours() + 'th' + ' hour of the day');

// vi. What is the minutes now?
const minutesNow = new Date()
console.log('It is ' + minutesNow.getMinutes() + 'mins past time')

// vii. Find out the number of seconds elasped from January 1, 1970 to now
const timeElasped = new Date()
console.log('Time elasped from Jan 1, 1970 till now is ' + timeElasped.getTime())