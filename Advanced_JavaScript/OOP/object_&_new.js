// Uderstanding object and the 'new' keyword

function multipleByFive(num) {
  return num * 5;
}

multipleByFive.power = 2;

console.log(multipleByFive(5));
console.log(multipleByFive.power);
console.log(multipleByFive.prototype); // That means in the JavaScript everything is an Object even function is an object as well as function

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`Price is ${this.score}`);
};

const chai = new createUser("Chai", 25);
const tea = new createUser("Tea", 250);
chai.printMe();

/* 
Here is what happens behind the scenes when the 'new' keyword is used:

A new object is created: The new kyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be intended return value.

The new object is returned: After the constructor function has been called, if it does not return a non-primitive value(object, array, function, etc.), the newly created object is returned.
*/
