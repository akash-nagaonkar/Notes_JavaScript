// Functions - Provides reusable codes

// Function Declaration Syntax
function getUserFromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}

console.log(getUserFromEmail("PlayerOne@gmail.com"));

//Another way to write a function
const getUserFromEmail1 = function (email) {
  return email.slice(0, indexOf("@"));
};

console.log(getUserFromEmail("Akash@gmail.com"));

//Arrow Function
const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(toProperCase("aKASh"));

// Implicit return Arrow function is the function where we do not use 'return', vice-versa is the explicit
const addThree = (a, b, c) => a + b + c;
console.log(addThree(3, 5, 18));

// Returning a Object
const returnObj = () => ({username: "Akash"})
console.log(returnObj());

// Functions and parameter in Js
function addTwoNumbers(a, b) {
  return a + b;
}

const result = addTwoNumbers(24, 48);
console.log(result); // a + b

const loginUserMessage = (username = "User") => {
  if (!username) {
    console.log("Please enter a usename!");
    return;
  }
  return `${username} just logged in!`;
};
const userStatus = loginUserMessage();
console.log(userStatus); // User just logged in! --> 'User' is a default value that we have passed as a parameter in the function

// Rest operator
const calculateCardPrice = (...num1) => {
  return num1;
};
console.log(calculateCardPrice(24, 58, 48)); // [ 24, 58, 48 ]

// Functions with object
const user = {
  name: "Akash",
  age: 24,
};

const handleObj = (userObj) => {
  console.log(`Name is ${userObj.name} and age is ${userObj.age}`);
};

handleObj(user); // Name is Akash and age is 24

// We can directly pass a object as argument
handleObj({
  name: "Akash",
  age: 24,
}); // Name is Akash and age is 24

// Functions with an array
const myNewArray = [200, 400, 100, 600];

const returnSecondValue = (getArray) => {
  return getArray[1];
};

console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([100, 300, 400, 600])); // 300
