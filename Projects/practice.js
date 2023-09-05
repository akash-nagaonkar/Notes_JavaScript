/* Practice number guessing game */

// Constants
const userInput = document.querySelector(".guessField");
const sumbitButton = document.querySelector("#subt");
const startOver = document.querySelector(".resultParas");
const guesses = document.querySelector(".guesses");
const remainingGuesses = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const gameOver = document.querySelector(".gameOver");
const restartButton = document.querySelector("#restartButton");

// Variables
let prevGuesses = [];
let numberOfGuesses = 1;
let startGame = true;

// Random Number
const randomNumber = parseInt(Math.random() * 100 + 1);

// Check whether user is available to play or not
if (startGame) {
  sumbitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

// Validate Guess
const validateGuess = (guess) => {
  if (isNaN(guess)) {
    displayGuess("Please enter a valid number!", "validate");
  } else if (guess < 1 || guess > 100) {
    displayGuess(
      "A number should be greater than 1 and less than 100!",
      "validate"
    );
  } else {
    prevGuesses.push(guess);
    if (numberOfGuesses === 10) {
      displayGuess(guess);
      displayMessage(`Game Over! A number was ${randomNumber}`, "attemptC");
      endGame();
    } else {
      checkGuess(guess);
      displayGuess(guess);
    }
  }
};

// Check Guess
const checkGuess = (guess) => {
  if (guess === randomNumber) {
    displayMessage("You guessed it right!", "correct");
    console.log("Got it");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("The number you guessed is too low", "lowOrHi");
  } else if (guess > randomNumber) {
    displayMessage("The number you guessed is too high", "lowOrHi");
  }
};

// Display Guess
const displayGuess = (guess) => {
  userInput.value = "";
  guesses.innerHTML += `${guess} `;
  numberOfGuesses++;
  remainingGuesses.innerHTML = `${11 - numberOfGuesses}`;
};

// Display Message
const displayMessage = (message, className) => {
  while (lowOrHigh.firstChild) {
    lowOrHigh.removeChild(lowOrHigh.firstChild);
  }

  const messageElement = document.createElement("h2");
  messageElement.textContent = message;
  messageElement.classList.add(className);
  lowOrHigh.appendChild(messageElement);
};

// End Game
const endGame = () => {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    sumbitButton.setAttribute("disabled", "");
    gameOver.style.display = "flex";
    startOver.appendChild(gameOver);
    playGame = false;
};

// New Game
const newGame = () => {
  location.reload();
  prevGuesses = [];
  startGame = true;
};

// Click event on start again button
restartButton.addEventListener("click", newGame);
