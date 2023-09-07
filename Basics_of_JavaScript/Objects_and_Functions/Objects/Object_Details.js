// Further knowledge about objects

const value = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(value);
/*
{value: 3.141592653589793, writable: false, enumerable: false, configurable: false}  
*/

const obj = {
  name: "IPHOEN",
  price: 500,
  isAvailable: true,

  orderMobile: function () {
    console.log("Order has been cancelled!");
  },
};

console.log(Object.getOwnPropertyDescriptor(obj, "name"));
/*
{value: 'IPHOEN', writable: true, enumerable: true, configurable: true} 
*/

for (let [key, value] of Object.entries(obj)) {
  if (typeof value !== "function") {
    console.log(`${key}:${value}`);
  }
}
/*
name: "IPHOEN"
price: 500
isAvailable: true 
*/

Object.defineProperty(obj, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(obj, "name"));
/*
{value: 'IPHOEN', writable: false, enumerable: false, configurable: true} 
*/

for (let [key, value] of Object.entries(obj)) {
  if (typeof value !== "function") {
    console.log(`${key}:${value}`);
  }
}
/*
price: 500
isAvailable: true 
*/