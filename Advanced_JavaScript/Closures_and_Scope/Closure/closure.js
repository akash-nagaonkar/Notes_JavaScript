// Closure
function outer() {
  const outerVar = "I am from outer scope";

  function inner() {
    console.log(outerVar); // Accesses outerVar from the outer scope
  }

  return inner; // Returns the inner function
}

const closureFunction = outer(); // closureFunction now "closes over" outerVar
closureFunction(); // Calls the inner function, which still has access to outerVar

