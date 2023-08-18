## Higher Order Functions ##

In JavaScript, higher-order functions are functions that either accept other functions as arguments, return functions as their results, or both. They enable powerful functional programming paradigms by treating functions as first-class citizens, allowing you to compose and manipulate functions in a flexible and modular way.

Here's a breakdown of higher-order functions and their usage:

1. **Functions as Arguments:**
   Higher-order functions can accept other functions as arguments. This allows you to encapsulate reusable behavior and pass it to different higher-order functions for different purposes.

   ```javascript
   function applyOperation(x, y, operation) {
     return operation(x, y);
   }

   function add(a, b) {
     return a + b;
   }

   function subtract(a, b) {
     return a - b;
   }

   const result1 = applyOperation(5, 3, add);      // 8
   const result2 = applyOperation(10, 4, subtract); // 6
   ```

2. **Functions as Return Values:**
   Higher-order functions can also return functions as their results. This is useful for creating specialized or partially applied functions.

   ```javascript
   function multiplier(factor) {
     return function(x) {
       return x * factor;
     };
   }

   const double = multiplier(2); // Returns a function that doubles the value
   const triple = multiplier(3); // Returns a function that triples the value

   const result1 = double(5); // 10
   const result2 = triple(4); // 12
   ```

3. **Functional Composition:**
   Higher-order functions facilitate function composition, where you can chain multiple functions together to perform complex operations.

   ```javascript
   function compose(func1, func2) {
     return function(x) {
       return func2(func1(x));
     };
   }

   function addOne(x) {
     return x + 1;
   }

   function double(x) {
     return x * 2;
   }

   const combinedFunction = compose(addOne, double);
   const result = combinedFunction(5); // (5 * 2) + 1 = 11
   ```

4. **Callbacks and Asynchronous Operations:**
   Higher-order functions are commonly used with callbacks to handle asynchronous operations. Functions like `setTimeout`, `fetch`, and event listeners often take callback functions as arguments.

   ```javascript
   function delayedAction(callback, delay) {
     setTimeout(callback, delay);
   }

   function sayHello() {
     console.log("Hello!");
   }

   delayedAction(sayHello, 1000); // Prints "Hello!" after 1 second
   ```

Higher-order functions promote modular, reusable, and expressive code. They are central to functional programming principles and enable you to write more concise and maintainable code by treating functions as building blocks that can be combined and customized to fit various scenarios.