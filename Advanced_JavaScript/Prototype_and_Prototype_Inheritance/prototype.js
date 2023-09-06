// Understanding prototype
let myHeros = ["Thor", "Spiderman"];
let heroPowers = {
  thor: "Hammer",
  spiderman: "Sling",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

// When method is created on the global object, it will be accessible globally on all properties
Object.prototype.hitesh = function () {
  console.log(`Hitesh is present in all objects`);
};

heroPowers.hitesh(); // Hitesh is present in all objects
myHeros.hitesh(); // Hitesh is present in all objects

// When method is created on an specific array, it will be accessible only for that array
Array.prototype.heyHitesh = function () {
  console.log("Hitesh is the best!");
};
myHeros.heyHitesh(); // Hitesh is the best!
// heroPowers.heyHitesh(); // Uncaught TypeError: heroPowers.heyHitesh is not a function

// Inheritance
const User = {
  name: "Teacher_name",
  email: "teacher_name@gmail.com",
};
const Teacher = {
  makeVoice: true,
};
const TeachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssingment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);


// String
let name = "Akash   ";
let anotherUsername = "Ironman    ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is ${this.trim().length}`);
};

anotherUsername.trueLength();
"Akash".trueLength();
"iceTea".trueLength();
/*
Ironman
True length is 7
Akash
True length is 5
iceTea
True length is 6
*/
