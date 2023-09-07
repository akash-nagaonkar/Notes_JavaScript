## Lexical Scoping

# Definition -->

- Lexical scoping, also known as static scoping, is a concept in programming languages like JavaScript where the scope of a variable is determined by its location in the source code at the time of writing or "lexing" (hence, "lexical" scoping). In simpler terms:

**Lexical Scoping is about where a variable is declared, not where it's used.**

Here's a breakdown:

1. Variables declared inside a function are "local" to that function, meaning they can be used only within that function.

2. Variables declared outside of any function (in the global scope) are accessible from anywhere in the code.

3. When a variable is referenced within a function, JavaScript first looks for it in the local scope of that function. If it's not found there, it looks in the outer scope, and so on, until it reaches the global scope.

- In essence, lexical scoping is all about how variable scope is determined by the physical structure of your code, and it allows you to access variables based on where they were defined, not where they are used.

# Explaination

Lexical scoping, also known as static scoping, is a fundamental concept in programming languages that determines how variables and their values are resolved in nested functions based on the physical structure of the code. In lexical scoping, variable scope is determined at the time of code compilation (or parsing) rather than at runtime. This means that variables are bound to their enclosing scope based on where they are declared in the source code.

Here's how lexical scoping works:

1. **Nested Functions:** In a programming language like JavaScript, you can have functions defined within other functions. These inner functions are referred to as nested functions.

2. **Scope Chain:** Each function, when defined, has access to its own local variables (scope) and the variables in the scope of the outer function (enclosing scope).

3. **Resolution of Variables:** When a variable is referenced within a function, the JavaScript engine first looks in the local scope of that function. If it doesn't find the variable there, it continues searching in the enclosing (outer) scopes until it either finds the variable or reaches the global scope.

Here's an example in JavaScript to illustrate lexical scoping:

```javascript
function outer() {
  const outerVar = "I am from outer scope";

  function inner() {
    const innerVar = "I am from inner scope";
    console.log(innerVar); // Accesses innerVar from its own scope
    console.log(outerVar); // Accesses outerVar from the enclosing scope
  }

  inner();
}

outer();
```

In this example:

- `inner()` function has access to its own `innerVar` variable and can also access `outerVar` from the enclosing scope (the `outer()` function). This is an example of lexical scoping.

- If `inner()` were to define its own `outerVar`, it would not affect the `outerVar` in the `outer()` function. Variables in nested functions can shadow (hide) variables with the same name in outer scopes.

The key advantage of lexical scoping is predictability. You can determine the scope of a variable by looking at where it's declared in the code, and it doesn't change during runtime. This predictability simplifies debugging and makes code more maintainable.

Lexical scoping is widely used in many programming languages, including JavaScript, Python, and Ruby, and it's a fundamental concept in understanding variable scope and closures in these languages.
