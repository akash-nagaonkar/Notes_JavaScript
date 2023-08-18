// Currying

// Regular function that takes multiple arguments
function add(a, b, c) {
  return a + b + c;
}

// Curried version of the add function
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const result = curriedAdd(1)(2)(3); // Equivalent to add(1, 2, 3)
console.log(result); // Outputs: 6
