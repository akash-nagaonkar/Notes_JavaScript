// Object Literal
const user = {
  username: "Iron_man",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log(`Username: ${this.username}`);
    console.log(this); // {username: 'Iron_man', loginCount: 8, signedIn: true, getUserDetails: ƒ}
  },
};

console.log(user.username);
console.log(user.getUserDetails());
console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// Constructor Function
// Here 'new' keyword is constructor function --> It allows us to make multiple instances using only one object. It is used to make new context
const promiseOne = new Promise(() => {});
const date = new Date();

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greetings = function(){
    console.log(`Welcome ${this.username}`);
  }

  return this;
}

const userOne = new User("Akash", 12, true);
const userTwo = new User("Hitesh", 20, true);
console.log(userOne.username); // Hitesh --> userTeo values are overwriting in userOne, to solve this issue use 'new' keyword --> Akash
console.log(userOne.constructor);

/*
1) Whenever we use 'new' keyword, an empty object will be created each time it is called instance
2) The constructor function will be called because of 'new' keyword
3) The value of 'this' or current context will be injected inside in that instance
4) You get access inside function and the new object is returned
*/
