// Arrays

const myArray = [];

// Adding element inside Array
myArray[0] = "Akash";
myArray[1] = 1001;
myArray[2] = true;

console.log(myArray);
console.log(myArray.length);
console.log(myArray[myArray.length - 1]);
console.log(myArray[1]);

//Add data at end of the array
myArray.push("Infosys");
console.log(myArray);

//Remove from end of the array
myArray.pop();
console.log(myArray);

// Add data in front of array
myArray.unshift("System Engineer");
console.log(myArray);

//Removing from the front of the array
myArray.shift();
console.log(myArray);

delete myArray[2];
console.log(myArray);
console.log(`The state of deleted item is ${myArray[2]}`);

//Replacing or removing value using splice
myArray.splice(1, 0, 42);
console.log(myArray);

//Use of Slice
const myAlpha = ["A", "B", "C", "D", "E", "F", "G"];
// newArray = myAlpha.slice(3, 6);
// console.log(newArray);

myAlpha.reverse();
console.log(myAlpha);

const newString = myAlpha.join();
// const newArray = newString.split(",");
// console.log(newArray);

const myAlphaA = ["A", "B", "C"];
const myAlphaB = ["D", "E", "F"];
const newArray = myAlphaA.concat(myAlphaB);
console.log("Joining two arrays using conacat:");
console.log(newArray);

//Spreed Operator(...)
const newArr = [...myAlphaA, ...myAlphaB]
console.log("Joining two arrys using Spread Operator(...):");
console.log(newArr);


