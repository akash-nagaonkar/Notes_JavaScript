//Objects
//Key-value pairs in curly braces

const myObj = {
  name: "akash",
  designation: "system engineer",
};

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["cricket", "reading", "movies", "coding"],
  beverage: {
    morning: "Coffee",
    afternoon: "Iced Tea",
  },
  action: function () {
    return `Time for ${this.beverage.morning}`;
  },
};

// console.log(anotherObj.action());

const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrooom!";
  },
};

// const truck = Object.create(vehicle)
// truck.doors = 2;
// console.log(truck);
// console.log(truck.wheels); //Inheritance
// console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 6;
car.engine = function () {
  return "Whoooosh!";
};
// console.log(car.engine());
// console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
// console.log(tesla.engine());
tesla.engine = function () {
  return "Shhhhh...";
};
// console.log(tesla.engine());

const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham",
};
console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
  console.log(`On ${job}, it is ${band[job]}!`);
}

//Destructuring Objects
const { guitar: myVariable, bass: myBass } = band;
console.log(myVariable);
console.log(myBass);

const { vocals, guitar, bass, drums } = band;
console.log(guitar);

function sings({ vocals }) {
  return `${vocals} sings!`;
}
console.log(sings(band));

// Singleton
// Object.create

// Object literals
const mySym = Symbol("key1");

const js_user = {
  name: "Akash",
  "full name": "Akash nagaonkar",
  [mySym]: "myKey1",
  age: 24,
  location: "Pune",
  email: "akash@infosys.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(js_user.email);
console.log(js_user["email"]);
console.log(js_user["full name"]);
console.log(js_user[mySym]);

// To change the values from an object
js_user.email = "akash@google.com";
console.log(js_user.email);

// To lock values of an object
// Object.freeze(js_user); //---> Now you can not manipulate this object

js_user.greetings = function () {
  console.log("Hello js_user!");
};
js_user.greetings2 = function () {
  console.log(`Hello js_user, ${this["full name"]}`);
};

console.log(js_user.greetings());
console.log(js_user.greetings2());

// Objects

// const tinderUser = new Object(); // This is a singleton object
const tinderUser = {}; // This a non-singleton object or objexct literal

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

const regularUser = {
  email: "akash.nagaonkar@gamil.com",
  fullName: {
    userFullName: {
      firstName: "Akash",
      lastName: "Nagaonkar",
    },
  },
};

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};
const obj3 = {
  5: "e",
  6: "f",
};

// Combining two objects
const combinedObj = Object.assign({}, obj1, obj2, obj3);
console.log(combinedObj); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const anotherWay = { ...obj1, ...obj2, ...obj3 };
console.log(anotherWay); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const users = [
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 2,
    email: "b@gmail.com",
  },
  {
    id: 3,
    email: "c@gmail.com",
  },
  {
    id: 4,
    email: "d@gmail.com",
  },
];

console.log(users[1].email); // b@gmail.com
console.log(tinderUser); // { id: '123abc', name: 'Sam', isLoggedIn: false }
console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'Sam', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true

const course = {
  name: "Chai Aur JavaScript",
  price: "999",
  courseInstructor: "Hitest",
};

// Object Destructuring
const { courseInstructor, price, name: courseName } = course;
console.log(courseName); // Chai Aur JavaScript
console.log(courseInstructor); // Hitest
console.log(price); // 999
