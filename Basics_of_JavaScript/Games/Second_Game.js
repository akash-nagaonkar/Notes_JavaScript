// Refactor Game using Array

// Rock, paper and scissors game
let playGame = confirm("Do you want to play Rock, Paper and Scissors game?");

if (playGame) {
  while (playGame) {
    const playerChoice = prompt("Enter your choice");
    if (playerChoice || playerChoice === "") {
      const playerOne = playerChoice.trim().toLowerCase();
      if (
        playerOne == "rock" ||
        playerOne == "paper" ||
        playerOne == "scissors"
      ) {
        const computerChoice = Math.floor(Math.random() * 3);
        const rpsArray = ["rock", "paper", "scissors"];
        const computer = rpsArray[computerChoice];

        const result =
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
        playGame = confirm("Play Againn!");
        if (!playGame) alert("Ok, thanks for playing!");
        continue;
      } else {
        alert("You did not entered right choice!");
        continue;
      }
    } else {
      alert("I guess you changed your mind, Maybe next time!");
    }
  }
} else {
  alert("Ok, maybe next time!");
}
