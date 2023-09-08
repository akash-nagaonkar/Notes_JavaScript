/*
Q. How to check if an object is an array or not? Provide some code.
*/
console.log(typeof []); // object

function checkArray(element) {
  return Array.isArray(element);
}

console.log(checkArray([])); // false
console.log(checkArray({})); // true
