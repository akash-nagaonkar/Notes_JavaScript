//An integer is a whole number
const myNumber = 54;

//A number with a decimal point is a flaot number which references the "Flaoting Point"
const myFloat = 544.0

const myString = "54"

console.log(myNumber === myFloat);
console.log(myFloat === myString); // It compares the datatype of both variables and then returns the boolean value
console.log(myString + 5); // It adds the value at the end of the string
console.log(Number(myString)); // It changes the datatype of the variable into the Number
console.log(Number(myString)+24); 
console.log(Number(myString) === myNumber); 
console.log(Number(true)); // True = 1 in JS
console.log(Number(false)); // False = 0 in JS

// Number Methods

// The Number.isInteger() ==> determines whether the passed value is an integer or not
console.log(Number.isInteger(myNumber));

//The Number.parseFloat() ==> determines parses argument and returns a floating number.
console.log(Number.parseFloat(myString));

// toFixed() ==> Formats a number according to how many decimal points you provide as a parameter
console.log(myFloat.toFixed(2));

//Number.parseInt() ==> parses a string and returns an integer by removing all not integer characters
const myString1 = "54 is a nuumber"
console.log(Number.parseInt(myString1));

// toString ==> Returns a string representing the number
console.log(typeof myFloat.toString());
console.log(typeof Number.parseFloat(myString));

//Chaining = Using several methods chained together
console.log(Number.parseFloat("42.24 abc").toFixed(2).toString());

//NaN is an acronym for Not a Number
console.log(Number("akash")); 
console.log(Number.isNaN("akash"));

// global isNaN() ==> Determines whether a value is NaN or not
console.log(isNaN("akash"));

// for conversion of indian format of showing currency value
const num = 1000000
console.log(num.toLocaleString('en-IN'));
