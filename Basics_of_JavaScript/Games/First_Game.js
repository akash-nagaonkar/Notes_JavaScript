// Rock, paper and scissors game
let playerGame = confirm("Do you want to play Rock, Paper and Scissors game?");

if (playerGame) {
  let playerChoice = prompt("Enter your choice");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne == "rock" ||
      playerOne == "paper" ||
      playerOne == "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      let result =
        playerOne === computer
          ? "Tie Game!"
          : playerOne === "rock" && computer === "paper"
          ? `Player: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
          : playerOne === "paper" && computer === "scissors"
          ? `Player: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
          : playerOne === "scissors" && computer === "rock"
          ? `Player: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
          : playerOne === "rock" && computer === "paper"
          ? `Player: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
          : `Player: ${playerChoice}\nComputer: ${computer}\nPlayer Wins!`;
      alert(result);

      let playAgain = confirm("Do you want to play it again?");
      playAgain ? location.reload() : alert("Ok, Thanks for playing!");
    } else {
      alert("You did not entered right choice!");
    }
  } else {
    alert("I guess you changed your mind, Maybe next time!");
  }
} else {
  alert("Ok, maybe next time!");
}
