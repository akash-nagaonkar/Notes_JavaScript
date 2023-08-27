## Composition

# Composition in JavaScript is a programming technique that emphasizes building complex functionalities by combining smaller, reusable pieces of code. It encourages creating modular and maintainable software by assembling objects or functions together to achieve desired behavior. Composition promotes the idea of "has-a" relationships instead of "is-a" relationships, which is often seen in class-based inheritance.

There are two main forms of composition in JavaScript:

1. **Object Composition:**
   Object composition involves creating new objects by combining properties and methods from existing objects. This is achieved through techniques like object merging, shallow or deep copying, and using utility functions or libraries.

   ```javascript
   // Object composition through merging
   const human = { species: "Homo sapiens" };
   const person = { name: "John Doe" };

   const john = Object.assign({}, human, person);

   console.log(john.name); // "John Doe"
   console.log(john.species); // "Homo sapiens"
   ```

   Library-based approaches like Lodash's `_.assign` or `_.merge` are commonly used for more complex composition scenarios.

2. **Function Composition:**
   Function composition involves creating new functions by combining multiple smaller functions to achieve a higher-level functionality. This approach promotes the idea of "pipeline" or "flow" where data flows through a series of functions.

   ```javascript
   const add = (x) => x + 2;
   const multiply = (x) => x * 3;

   const combinedFunction = (x) => multiply(add(x));

   console.log(combinedFunction(5)); // 21 (5 + 2 = 7, 7 * 3 = 21)
   ```

   Function composition can be enhanced by using utility libraries like Ramda, which offer advanced composition tools.

The benefits of composition include:

- **Modularity:** Composition promotes creating reusable and isolated pieces of code that can be easily understood and maintained.
- **Flexibility:** You can combine different functionalities without the tight coupling often seen in inheritance.
- **Testing:** Components created through composition are often easier to test in isolation, as they have clear boundaries and dependencies.

# Composition is especially valuable in modern JavaScript development, where the focus has shifted from class-based inheritance to more functional and modular programming approaches. It allows developers to build complex systems with a collection of simple, focused pieces, ultimately leading to more maintainable and scalable codebases.
