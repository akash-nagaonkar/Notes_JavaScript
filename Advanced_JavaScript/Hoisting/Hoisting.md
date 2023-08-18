## Hoisting ##

# Hoisting is a concept in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase before the code is actually executed. In simpler words, it means that you can use variables and functions before they are declared in your code.

- However, it's important to note that only the declarations are hoisted, not the assignments or initializations. Let's break it down:

1. **Variable Hoisting:**

   ```javascript
   console.log(x); // Output: undefined
   var x = 5;
   ```

   - In this case, the variable declaration `var x;` is hoisted to the top, so `x` is accessible, but its value is `undefined` until the actual assignment is reached.

2. **Function Hoisting:**

   ```javascript
   sayHello(); // Output: "Hello"

   function sayHello() {
     console.log("Hello");
   }
   ```

   - The entire function declaration is hoisted, so you can call the function before its actual declaration.

3. **Function Expression Hoisting:**

   ```javascript
   sayHello(); // Error: sayHello is not a function

   var sayHello = function () {
     console.log("Hello");
   };
   ```

   - In this case, the variable declaration `var sayHello;` is hoisted, but its value is `undefined`. So, trying to call it as a function will result in an error.

# Hoisting can be a bit counterintuitive, especially when combined with function expressions and variables declared using `let` and `const`. To avoid confusion and bugs, it's recommended to declare variables and functions before using them in your code, even though JavaScript allows you to access them before their declarations due to hoisting.
