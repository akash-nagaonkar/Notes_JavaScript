/*
Q. How would you check if a number is an integer? Do not use isInteger() method.
*/
const num = 11.5;

if (num % 1 === 0) {
  console.log("The number is an integer");
} else {
  console.log("The number is not an integer");
}
