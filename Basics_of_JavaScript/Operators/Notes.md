## Operators ##

Operators in JavaScript are symbols or keywords that perform various operations on values, variables, or expressions. They allow you to perform computations, compare values, manipulate strings, and more. Operators are an essential part of writing code to perform different tasks and calculations. Let's explore some of the key types of operators in JavaScript:

**1. Arithmetic Operators:**
Arithmetic operators perform basic mathematical operations.

- `+` (Addition)
- `-` (Subtraction)
- `*` (Multiplication)
- `/` (Division)
- `%` (Modulus, remainder of division)
- `**` (Exponentiation)

```javascript
const sum = 5 + 3;       // 8
const difference = 10 - 4; // 6
const product = 4 * 6;     // 24
const quotient = 15 / 3;   // 5
const remainder = 10 % 3;  // 1
const power = 2 ** 3;      // 8
```

**2. Comparison Operators:**
Comparison operators are used to compare values and return boolean results.

- `==` (Equal to)
- `!=` (Not equal to)
- `===` (Strict equal to)
- `!==` (Strict not equal to)
- `>` (Greater than)
- `<` (Less than)
- `>=` (Greater than or equal to)
- `<=` (Less than or equal to)

```javascript
const isEqual = 5 == "5";      // true (loose equality)
const isNotEqual = 5 != 10;    // true
const isStrictEqual = 5 === 5; // true (strict equality)
const isGreaterThan = 10 > 5;  // true
const isLessThan = 3 < 7;      // true
```

**3. Logical Operators:**
Logical operators are used to combine or manipulate boolean values.

- `&&` (Logical AND)
- `||` (Logical OR)
- `!` (Logical NOT)

```javascript
const condition1 = true && false; // false
const condition2 = true || false; // true
const negation = !true;           // false
```

**4. Assignment Operators:**
Assignment operators are used to assign values to variables.

- `=` (Assignment)
- `+=` (Add and assign)
- `-=` (Subtract and assign)
- `*=` (Multiply and assign)
- `/=` (Divide and assign)
- `%=` (Modulus and assign)

```javascript
let x = 5;
x += 3; // x becomes 8
```

**5. Unary Operators:**
Unary operators work on a single operand.

- `+` (Unary plus)
- `-` (Unary minus)
- `++` (Increment)
- `--` (Decrement)
- `!` (Logical NOT)

```javascript
let num = 5;
num++; // num becomes 6
```

These are just some of the many operators available in JavaScript. Understanding and mastering operators is crucial for performing various computations, comparisons, and manipulations in your code.

## Nullish Coalescing Operator (??): In case of null and undefined ##

The Nullish Coalescing Operator (`??`) is a relatively recent addition to JavaScript (introduced in ECMAScript 2020) that provides a concise way to handle default values for potentially null or undefined variables. It helps you determine which value to use when faced with a choice between two options: the left-hand side (LHS) or the right-hand side (RHS).

The Nullish Coalescing Operator considers only `null` and `undefined` as "nullish" values, unlike the logical OR operator (`||`) which considers falsy values (`false`, `0`, `''`, `null`, `undefined`, `NaN`) as well.

Here's the basic syntax of the Nullish Coalescing Operator:

```javascript
const result = variable ?? defaultValue;
```

- If `variable` is `null` or `undefined`, `result` will be `defaultValue`.
- If `variable` has any other truthy value, `result` will be the value of `variable`.

Example:

```javascript
let name = null;
let defaultName = "Guest";

let greeting = name ?? defaultName;
console.log(greeting); // Output: "Guest"
```

In this example, `name` is `null`, so the Nullish Coalescing Operator chooses the `defaultName` as the value of `greeting`.

This operator is particularly useful for scenarios where you want to provide a fallback value when a variable might be `null` or `undefined`, but you don't want to use the fallback when the variable has a valid, non-null, non-undefined value.

```javascript
let user = { name: "Alice" };
let userName = user.name ?? "Unknown";
console.log(userName); // Output: "Alice"
```

In this case, `userName` gets the value from `user.name` because it's not `null` or `undefined`.

The Nullish Coalescing Operator simplifies handling default values in a more precise manner compared to the logical OR operator.
