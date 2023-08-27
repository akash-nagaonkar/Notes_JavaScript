//Math methods and the Properties
console.log(Math.PI);

//Math methods
console.log(Math.trunc(Math.PI)); //Returns the all integer portion and truncate the decimal points
console.log(Math.round(Math.PI)); //It rounds a value to the nearest integer number
console.log(Math.ceil(Math.PI)); //It always round a value to higher one
console.log(Math.floor(Math.PI)); //It always round a value to lower one
console.log(Math.pow(2, 10)); //It contains two arguments the base number and the exponent
console.log(Math.min(10,24,30));
console.log(Math.max(10,24,30));

// Math.random
console.log(Math.random());
//From 1 to 10
console.log("Random numbers:");
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

// For random number
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);