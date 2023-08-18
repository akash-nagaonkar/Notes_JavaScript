//If Statement

// let userChoice = prompt("Do you choose rock, paper or scissors?");
// let computerChoice = Math.random();

// if (computerChoice < 0.34) {
//   computerChoice = "rock";
// } else if (computerChoice <= 0.67) {
//   computerChoice = "paper";
// } else {
//   computerChoice = "scissors";
// }

// let compare = function (choice1, choice2) {
//   if (choice1 === choice2) {
//     return "The result is a tie!";
//   }
//   if (choice1 === "rock") {
//     if (choice2 === "scissors") {
//       return "rock wins";
//     } else {
//       return "paper wins";
//     }
//   }
//   if (choice1 === "paper") {
//     if (choice2 === "rock") {
//       return "paper wins";
//     } else {
//       if (choice2 === "scissors") {
//         return "scissors wins";
//       }
//     }
//     if (choice1 === "scissors") {
//       if (choice2 === "rock") {
//         return "rock wins";
//       } else {
//         if (choice2 === "paper") {
//           return "scissors wins";
//         }
//       }
//     }
//   }
// };
// console.log("User Choice: " + userChoice);
// console.log("Computer Choice: " + computerChoice);
// compare(userChoice, computerChoice);

//Switch Statement

switch (Math.floor(Math.random() * 5 + 1)) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;

  default:
    console.log("No match found!");
}

//Ternary Operator

//Condition ? if=True : if=False;

let soup = "Chicken Noodle Soup"
let customerBanned = true
let response = soup ? "Yes, we have soup." : "Sorry, we don't have soup today!!"
console.log(response);
let soupAccess= customerBanned ? "Sorry, no soup for you" : soup ? `Yes, we have ${soup} today`: "Sorry, no soup today!"
console.log(soupAccess);
