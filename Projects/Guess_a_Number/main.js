// Constants
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const restartButton = document.getElementById("restartButton");
const gameOverDiv = document.querySelector(".gameOver");

// Generating a random number
const randomNumber = parseInt(Math.random() * 100 + 1);

// Variables
let prevGuess = [];
let numGuesses = 1;
let playGame = true;

// Check whether user is available to play or not
if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

// Validate Guess
const validateGuess = (guess) => {
  if (isNaN(guess)) {
    displayMessage("Please enter a valid number", "validate");
  } else if (guess < 1 || guess > 100) {
    displayMessage(
      "Number should be more than 1 and less than 100",
      "validate"
    );
  } else {
    prevGuess.push(guess);
    if (numGuesses === 10) {
      displayGuess(guess);
      displayMessage(
        `Game Over! Random number was ${randomNumber}`,
        "attemptC"
      );
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

// Check guess
const checkGuess = (guess) => {
  if (guess === randomNumber) {
    displayMessage("🏆You guessed it right🏆", "correct"); // Use the "correct" class
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("The number you guessed is too low", "lowOrHi"); // Use the "lowOrHi" class
  } else if (guess > randomNumber) {
    displayMessage("The number you guessed is too high", "lowOrHi"); // Use the "lowOrHi" class
  }
};

// Display Guess
const displayGuess = (guess) => {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGuesses++;
  remaining.innerHTML = `${11 - numGuesses}`;
};

// Display message
const displayMessage = (message, className) => {
  // Remove existing messages
  while (lowOrHigh.firstChild) {
    lowOrHigh.removeChild(lowOrHigh.firstChild);
  }

  // Create and add the new message
  const messageElement = document.createElement("h2");
  messageElement.textContent = message;
  messageElement.classList.add(className); // Use classList to add the specified class
  lowOrHigh.appendChild(messageElement);
};

// End game
const endGame = () => {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
  gameOverDiv.style.display = "flex";
  startOver.appendChild(gameOverDiv);
  playGame = false;
};

// New game
const newGame = () => {
  location.reload(); // Reload the page to start a new game
  prevGuess = [];
  playGame = true;
};

// Event listener for the restart button
restartButton.addEventListener("click", newGame);