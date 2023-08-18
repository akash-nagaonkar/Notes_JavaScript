//Nested Arrays

console.log("Two dimensional array:");
const myArrA = ["akash", "shubham", "ajay", "imran"]
const myArrB = ["bishal", "shivraj", "rahul", "yuvraj"]
const myArrC = ["rohit", "shubham", "praful", "imran"]
const myArrD = ["vijay", "shubham", "john", "imran"]

const firstTwo = [myArrA, myArrB]
const secondTwo = [myArrC, myArrD]

console.log("Nested Arrays:")
console.log(firstTwo);
console.log(secondTwo);

console.log("Accessing perticuler index from two dimensional nested array:");
console.log(firstTwo[0][2]);
console.log(secondTwo[1][2]);

console.log("Third Dimensional Array:");
const nestedArr = [firstTwo, secondTwo]
console.log(nestedArr);
console.log("Accessing value from third dimensional array:");
console.log(nestedArr[0][1][3]);
console.log(nestedArr[1][0][3]);