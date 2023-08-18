//Closure
function outer() {
  const outerVar = "I am from outer!";

  function inner() {
    console.log(outerVar); // inner function still has access to outerVar
  }

  return inner;
}

const closureFunc = outer();
closureFunc(); // Outputs: "I am from outer!"

// Scope in JavaScript
const globalVar = "I am global!";

function outer() {
  const outerVar = "I am outer!";

  function inner() {
    const innerVar = "I am inner!";
    console.log(innerVar); // Accessible
    console.log(outerVar); // Accessible
    console.log(globalVar); // Accessible
  }

  inner();
  console.log(innerVar); // Error: innerVar is not defined
}

outer();
console.log(outerVar); // Error: outerVar is not defined
console.log(globalVar); // Accessible
