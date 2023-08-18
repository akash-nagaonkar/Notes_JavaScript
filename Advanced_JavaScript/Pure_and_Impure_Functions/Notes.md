## Pure and Impure Functions

# In JavaScript, pure and impure functions are concepts related to functional programming that describe how functions behave in terms of their interactions with external state and their return values. Let's explore both types of functions:

1. **Pure Functions:**

   - A pure function is a function that always produces the same output for the same input and doesn't have any side effects. This means that a pure function doesn't modify external state, relies only on its input parameters, and doesn't produce any observable changes beyond its return value.

   - `Characteristics of pure functions:`

   - Deterministic: The same input will always produce the same output.
   - No side effects: It doesn't modify global variables, mutate data structures, or perform I/O operations like reading/writing files or making API calls.

   Examples of pure functions:

   ```javascript
   function add(a, b) {
     return a + b;
   }

   function multiply(x, y) {
     return x * y;
   }
   ```

2. **Impure Functions:**
   - An impure function is a function that may produce different output for the same input or have side effects that go beyond its return value. Impure functions can modify external state, perform I/O operations, or rely on mutable data.

   - `Characteristics of impure functions:`

   - Non-deterministic: The same input might yield different outputs.
   - Side effects: It may modify global variables, perform network/database I/O, or have other external effects.

   Examples of impure functions:

   ```javascript
   let counter = 0;
   function increment() {
     counter++;
     return counter;
   }

   function getRandomNumber() {
     return Math.random();
   }
   ```

- In functional programming, pure functions are preferred because they make code more predictable, easier to test, and less prone to bugs. They also help with concurrency and parallelism, as they don't introduce shared mutable state. Impure functions, on the other hand, can be harder to reason about and can lead to unexpected behavior.

- In practice, not all functions can be pure, especially in applications that interact with the outside world (like web applications). However, striving to keep as much of your codebase as pure as possible can lead to more maintainable and understandable code.
