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

// Add element at 0 index
myArray.unshift("System Engineer");
console.log(myArray);

// Remove element of 0th index
myArray.shift();
console.log(myArray);

delete myArray[2];
console.log(myArray);
console.log(`The state of deleted item is ${myArray[2]}`);

// Replacing or removing elements by using splice
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
const newArrayIs = myAlphaA.concat(myAlphaB);
console.log("Joining two arrays using conacat:");
console.log(newArrayIs);

//Spreed Operator(...)
const newArr = [...myAlphaA, ...myAlphaB];
console.log("Joining two arrys using Spread Operator(...):");
console.log(newArr);

const myArray = [1, 2, 3, 4, 5];
const myHeroes = ["Batman", "Ironman", "Superman", "Hulk", "Thor"];
const myArr2 = new Array(1, 2, 3, 4);

const newArray = myArray.join();
console.log(newArray); // 1,2,3,4,5 ---> Values in string format
console.log(typeof newArray); // string

// Slice and Splice
console.log("A", myArray); // A [ 1, 2, 3, 4, 5 ]

const myNewAr1 = myArray.slice(1, 3);
console.log(myNewAr1); // [ 2, 3 ]
console.log("B", myArray); // B [ 1, 2, 3, 4, 5 ]

// Splice will manipulate orignal array though slice will not
const myNewAr2 = myArray.splice(1, 3);
console.log("C", myArray); // C [ 1, 5 ]  --> Splice reomoves all the given index range from original array
console.log(myNewAr2); // [ 2, 3, 4 ]