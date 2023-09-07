// Lexical Scoping
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

function init() {
  let name = "Google";
  function displauName() {
    console.log(name);
  }
  displauName();
}

init(); // Google

const parent = () => {
  let name = "Google";
  let username = "google_sky";
  const displayName = () => {
    let secret = "124";
    console.log(name);
  };
  const displayUsername = () => {
    console.log(username);
    // console.log(secret); // Not accessible
  };
  // console.log(secret); // Not accessible
  displayName(); // Google
  displayUsername(); // google_sky
};

parent();
