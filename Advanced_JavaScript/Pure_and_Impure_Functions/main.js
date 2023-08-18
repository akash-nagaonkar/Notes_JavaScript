// Pure Function Example:
// A pure function doesn't modify external state and always produces the same output for the same input.

// Pure function: adds two numbers
function add(a, b) {
  return a + b;
}

console.log(add(3, 5)); // Output: 8
console.log(add(3, 5)); // Output: 8 (always the same result for the same inputs)

// Impure Function Example:
// An impure function may modify external state or produce different outputs for the same input.
// Impure function: modifies external state
let counter = 0;
function increment() {
  counter++;
  return counter;
}

console.log(increment());  // Output: 1
console.log(increment());  // Output: 2 (output changes due to external state modification)

// Impure function: generates random number
function getRandomNumber() {
  return Math.random();
}

console.log(getRandomNumber());  // Output: a random number
console.log(getRandomNumber());  // Output: a different random number

/*
In the first impure function example, increment modifies the external variable counter, which leads to different outputs each time it's called. In the second example, getRandomNumber produces different outputs for the same input (none in this case), making it non-deterministic.

Remember that the distinction between pure and impure functions is important in functional programming because it affects predictability, testability, and overall code quality.
*/