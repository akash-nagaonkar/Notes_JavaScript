// Scope in JavaScript
const globalVar = "I am global!";

// Scope in Function
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

// Scope in Condtional rendering
if (true) {
  const nameIs = "Akash";
  if (nameIs === "Akash") {
    const website = " YouTube";
    console.log(nameIs); // Accessible
    console.log(nameIs + website); // Accessible
  }
  console.log(website); // Not accessible ---> Error: innerVar is not defined
}
console.log(nameIs); // Not accessible ---> Error: innerVar is not defined

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


// +++++++++++ Interesting Example +++++++++++ //

console.log(addOne(5)); // 6 ---> Accessible
// This is a basic Function
function addOne(number) {
  return number + 1;
}

addTwo(5); // ReferenceError: Cannot access 'addTwo' before initialization ---> Not accessible
// This is also a function but sometimes we say it as an Expression
const addTwo = function (number) {
  return number + 2;
};
