## Closure

# Definition --> **A closure in JavaScript is like a "memory bubble" that allows a function to remember and access the variables from the place where it was created, even after that place has finished running. It's like a little backpack of data that a function carries with it, making it really handy for certain tasks like maintaining state or creating private variables.**

A closure is a fundamental concept in JavaScript, and it occurs when a function "closes over" the variables from its outer (enclosing) lexical scope. In simpler terms, a closure allows a function to access and remember its lexical scope, even when that function is executed outside that scope. Closures are a powerful and often-used feature in JavaScript for maintaining state, data encapsulation, and creating functions with persistent private variables.

Here's a breakdown of the key aspects of closures:

1. **Lexical Scope Retention:** A closure occurs when an inner function is defined within an outer function, and the inner function retains access to the variables and parameters of its outer function, even after the outer function has finished executing.

2. **Use Cases:**
   - **Data Encapsulation:** Closures are commonly used to create private variables and encapsulate data within a function's scope. This helps in preventing unintended external access and modification of data.
   - **Function Factories:** Closures enable the creation of function factories that generate specialized functions with shared behavior.
   - **Callbacks:** Closures are often used in callbacks and event handling, allowing functions to "remember" the context in which they were created.

Here's an example to illustrate closures:

```javascript
function outer() {
  const outerVar = "I am from outer scope";

  function inner() {
    console.log(outerVar); // Accesses outerVar from the outer scope
  }

  return inner; // Returns the inner function
}

const closureFunction = outer(); // closureFunction now "closes over" outerVar
closureFunction(); // Calls the inner function, which still has access to outerVar
```

In this example:

- `outer()` defines an inner function called `inner`, which references `outerVar` from its enclosing scope.
- `outer()` returns the `inner` function.
- When we call `outer()`, it returns the `inner` function, which we store in `closureFunction`.
- Later, when we call `closureFunction()`, it can still access and log the value of `outerVar`, even though `outer()` has finished executing. This is due to the closure created when `inner` was defined.

Closures are a powerful mechanism for creating modular and encapsulated code, and they are widely used in JavaScript for various purposes, including handling asynchronous operations, creating private variables, and implementing function factories. Understanding closures is crucial for writing effective JavaScript code.
