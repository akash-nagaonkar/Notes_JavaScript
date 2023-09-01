// Loops

// While Loop
let myNumber = 1;

while (myNumber <= 50) {
  console.log(myNumber);
  myNumber++;
}

// Do While loop

do {
  console.log(myNumber);
  myNumber++;
} while (myNumber < 50);

// For Loop
console.log("Simple for loop execution");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("Each letter of my name is separted");
let myName = "Akash";
for (let i = 0; i <= myName.length; i++) {
  console.log(myName.charAt(i));
}

let myName1 = "Akash";
let counter = 0;
let myLetter;

while (counter <= 4) {
  myLetter = myName1[counter];
  console.log(myLetter);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  if (myLetter === "s") break;
  counter++;
}
console.log(counter);
