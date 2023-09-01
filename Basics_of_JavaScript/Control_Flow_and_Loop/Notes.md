## Control flow in JavaScript

It refers to the order in which statements and expressions are executed in your code. It determines how your program progresses from one statement to the next, including making decisions, executing loops, and handling asynchronous operations. Understanding control flow is fundamental to writing effective and organized code. Let's delve into the key aspects of control flow in JavaScript:

**1. Sequential Execution:**
By default, JavaScript executes code sequentially, line by line, from top to bottom. Each statement is executed in the order it appears in the code.

```javascript
console.log("Hello");
console.log("World");
// Output:
// Hello
// World
```

**2. Conditional Statements:**
Conditional statements allow you to make decisions in your code based on certain conditions. The most common conditional statements are `if`, `else if`, and `else`.

```javascript
const age = 18;
if (age >= 18) {
  console.log("You're an adult.");
} else {
  console.log("You're not an adult yet.");
}
// Output: You're an adult.
```

**3. Switch Statement:**
The `switch` statement provides a way to execute different code blocks based on different values of an expression.

```javascript
const day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("Weekend is approaching.");
    break;
  default:
    console.log("It's another day.");
}
// Output: It's the start of the week.
```

**4. Loops:**
Loops allow you to execute a block of code repeatedly as long as a specified condition is met. Common loop structures include `for`, `while`, and `do...while`.

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Output:
// 1
// 2
// 3
// 4
// 5
```

**5. Break and Continue:**
The `break` statement is used to exit a loop prematurely, while the `continue` statement skips the rest of the current iteration and moves to the next one.

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // Exits the loop when i is 3
  }
  console.log(i);
}
// Output:
// 1
// 2
```

**6. Asynchronous Control Flow:**
Asynchronous operations, such as network requests or timers, require different control flow handling to avoid blocking the main thread. Callbacks, Promises, and async/await are mechanisms to manage asynchronous operations.

```javascript
setTimeout(() => {
  console.log("Delayed log.");
}, 1000);
console.log("This log appears first.");
// Output:
// This log appears first.
// Delayed log. (after 1 second)
```

Understanding control flow helps you design programs that behave as intended and handle different scenarios effectively. You'll often use conditional statements, loops, and asynchronous control flow techniques to create responsive and dynamic applications.

## Falsy and Truthy Values

In JavaScript, values are categorized as either "truthy" or "falsy" based on their inherent "truthiness" when used in conditional contexts. Truthy values are considered to be equivalent to `true`, while falsy values are considered to be equivalent to `false`. Here are the commonly recognized truthy and falsy values in JavaScript:

**Truthy Values:**

- All non-empty strings (`"hello"`, `"123"`,`" "`,`"false"` etc.)
- All numbers except `0` (e.g., `1`, `-1`, `0.5`)
- Arrays (even if empty)
- Objects (even if empty)
- Functions (even if empty)
- `true` (boolean `true`)

**Falsy Values:**

- The value `false` (boolean `false`)
- The number `0` and `-0`
- The special value `NaN` (stands for "Not-a-Number")
- An empty string (`""`)
- `null`
- `undefined`

These truthy and falsy values are used extensively in conditional statements, such as `if` statements and the ternary operator (`? :`), to determine the flow of the program based on the truthiness or falsiness of a given value.

```javascript
if ("hello") {
  console.log("Truthy"); // This will be executed
}

if (0) {
  console.log("Falsy"); // This won't be executed
}
```

```javascript
const value = 5;

const result = value > 10 ? "Greater than 10" : "Not greater than 10";
console.log(result); // Output: Not greater than 10

// Keep in mind 
console.log(false == 0); // true
console.log(false == ""); // true
console.log(0 == ""); // true
```

Understanding truthy and falsy values is crucial for making informed decisions in your code, especially when writing conditional statements or handling values that might be coerced into booleans in certain contexts.

## Higher Order Array Loops ##
A higher-order function is a function that takes one or more functions as arguments and/or returns a function as its result. In the context of arrays, higher-order functions are functions that operate on arrays (or other iterable data structures) by taking functions as input or returning functions as output. These functions allow you to perform various operations on arrays in a more concise and functional programming style. Common higher-order array functions include `map`, `filter`, `reduce`, `forEach`, `sort`, and `find`.

Here's an explanation of a few key higher-order array functions:

**1. `map`:**
The `map` function iterates over each element in an array and applies a given function to transform each element. It creates a new array with the transformed elements.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
// doubled: [2, 4, 6, 8]
```

**2. `filter`:**
The `filter` function creates a new array with all elements that pass a certain test (provided by a function).

```javascript
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter(num => num % 2 === 0);
// evenNumbers: [2, 4]
```

**3. `reduce`:**
The `reduce` function applies a function to each element in an array and accumulates a single result.

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
// sum: 10
```

**4. `forEach`:**
The `forEach` function iterates over each element in an array and executes a function for each element.

```javascript
const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num));
// Output: 1, 2, 3, 4
```

**5. `sort`:**
The `sort` function arranges the elements of an array based on a comparison function.

```javascript
const names = ["Alice", "Bob", "Charlie"];
const sortedNames = names.sort((a, b) => a.localeCompare(b));
// sortedNames: ["Alice", "Bob", "Charlie"]
```

**6. `find`:**
The `find` function returns the first element in an array that satisfies a given test.

```javascript
const numbers = [1, 2, 3, 4];
const foundNumber = numbers.find(num => num > 2);
// foundNumber: 3
```

These higher-order array functions promote a more declarative and functional style of programming, which can lead to more readable and maintainable code. They abstract away the low-level iteration details and encourage you to think about operations on arrays at a higher level of abstraction.