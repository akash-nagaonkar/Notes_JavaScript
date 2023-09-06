/* 
## This ##
Value of this in global scope --> Window
Value of this in function --> Window
Value of this in method --> Object

webAPI --> this = window
node --> this = {}

** In any method this keyword refers to parent object **
*/

// Value of this inside function scope
function thisValue() {
  console.log(this);
}
thisValue();

// Value of this inside method scope
var obj = {
  talk: function () {
    console.log(this);
  },
};
obj.talk();

// Event listeners
var button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log((this.style.color = "red"));
});

// Understanding 'This' keyword
const user = {
  username: "Akash",
  price: "999",
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website!`);
    console.log(this);
    /*
      {
      username: 'Sam',
      price: '999',
      welcomeMessage: [Function: welcomeMessage]
     } 
     ---> Now the value of 'this' keyword inside a object is current context, this means all properties or variables declared inside a object is the value of 'this'
     */
  },
};

user.welcomeMessage(); // Akash, welcome to website!
user.username = "Sam";
user.welcomeMessage(); // Sam, welcome to website!

console.log(this); // {} ---> The value of this keyword in global scope or in node environment is a Object, right now it is a empty object because there is no context (varibles or properties)

// Understanding 'this' keyword inside a function

function thisvalue() {
  console.log(this); // <ref *1> Object [global] {...Values}
}
thisvalue();

function thisValueIs() {
  let username = "Akash Nagaonkar";
  console.log(this.username); // undefined
}
thisValueIs();

// Value of 'this' keyword inside a Arrow function
const thisValueInArrow = () => {
  console.log(this); // {} ---> Value of 'this' is current context inside a Arrow function
};
thisValueInArrow();
