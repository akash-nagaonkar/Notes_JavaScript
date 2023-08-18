console.log(name); // Output: undefined
var name = "Alice";

sayHello(); // Output: "Hello"
function sayHello() {
  console.log("Hello");
}

console.log(age); // Output: undefined
var age;
age = 30;

sayGoodbye(); // Output: "Goodbye"
function sayGoodbye() {
  console.log("Goodbye");
}

/*
In this example:

1. The variable name is declared and initialized later in the code, but due to hoisting, the declaration is moved to the top. When you log name, it's accessible but holds the value undefined until the assignment is reached.

2. The function sayHello is declared after the call to it. Yet, due to hoisting, the function declaration is moved to the top, allowing you to call the function before its actual declaration.

3. The variable age is declared before its assignment. The declaration is hoisted to the top, and then you assign the value 30.

4. Similar to the previous case, the function sayGoodbye is declared after the call to it. Hoisting lifts the function declaration to the top, making the call valid.

Keep in mind that while hoisting might seem convenient, relying on it can lead to confusion and bugs in your code. It's generally a good practice to declare variables and functions before using them to make your code more readable and maintainable.
*/