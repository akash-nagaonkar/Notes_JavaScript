## Currying ##

- Currying is a functional programming concept in JavaScript where a function that takes multiple arguments is transformed into a series of functions that each take a single argument. In other words, instead of passing all the arguments to a function at once, you pass them one by one, creating a chain of functions that gradually build up to the final result.

- The currying process involves breaking down a function into smaller, more specialized functions, which can lead to cleaner and more modular code. Currying is named after the mathematician Haskell Curry.

- Here's an example to illustrate currying in JavaScript:

```javascript
// Regular function that takes multiple arguments
function add(a, b, c) {
  return a + b + c;
}

// Curried version of the add function
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

const result = curriedAdd(1)(2)(3); // Equivalent to add(1, 2, 3)
console.log(result); // Outputs: 6
```

In the curried version of the `add` function:

1. `curriedAdd(1)` returns a function that takes `b` as an argument.
2. `curriedAdd(1)(2)` returns another function that takes `c` as an argument.
3. `curriedAdd(1)(2)(3)` finally returns the sum of all three arguments.

- Currying can be achieved using higher-order functions and closures in JavaScript. It allows for more flexible and reusable code by creating partially applied functions. This means you can create new functions by pre-filling some of the arguments of the original function, which is particularly useful in scenarios like event handling and functional composition.

- In modern JavaScript, you can use arrow functions to simplify the syntax of curried functions:

```javascript
const curriedAdd = a => b => c => a + b + c;

const result = curriedAdd(1)(2)(3);
console.log(result); // Outputs: 6
```

- Currying can help improve code readability, promote reusability, and align with functional programming principles by emphasizing function composition and immutability.