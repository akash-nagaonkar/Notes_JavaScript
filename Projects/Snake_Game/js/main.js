//Game constants and variables
let inputDir = { x: 0, y: 0 };
const foodSound = new Audio("music/Cobra.mp3");
const moveSnake = new Audio("music/MoveTing.mp3");
const gameOver = new Audio("music/GameOverSound.mp3");

let speed = 10;
let lastPaintTime = 0;
let score = 0;

let snakeArr = [{ x: 13, y: 15 }];
food = { x: 6, y: 7 };

//Game Functions
function main(ctime) {
  window.requestAnimationFrame(main);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
}

function isCollide(snake) {
  //If you bump into yourself
  for (let i = 1; i < snakeArr.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      return true;
    }
  }

  // If you bump into the wall
  if (
    snake[0].x >= 30 ||
    (snake[0].x <= 0 || snake[0].y >= 30) ||
    snake[0].y <= 0
  ) {
    return true;
  }
}

function gameEngine() {
  //Part 1 : Updating the snake variable
  if (isCollide(snakeArr)) {
    gameOver.play();
    inputDir = { x: 0, y: 0 };
    alert("Game Over. Press any key to play again!");
    snakeArr = [{ x: 13, y: 15 }];
    score = 0;
  }

  //If you have eaten the food increment the food and relocate and regenerate the food
  if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
    foodSound.play();
    score += 1;
    if(score > highScoreVal){
        highScoreVal = score;
        localStorage.setItem("highScore", JSON.stringify(highScoreVal))
        highScoreBox.innerHTML = "High Score: " + highScoreVal;
    }
    scoreBox.innerHTML = "Score: " + score;
    snakeArr.unshift({
      x: snakeArr[0].x + inputDir.x,
      y: snakeArr[0].y + inputDir.y,
    });
    let a = 2;
    let b = 26;
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }

  //Moving the snake
  for (let i = snakeArr.length - 2; i >= 0; i--) {
    snakeArr[i + 1] = { ...snakeArr[i] };
  }

  snakeArr[0].x += inputDir.x;
  snakeArr[0].y += inputDir.y;

  //Part 2 : Display the snake and food
  //Display Snake
  board.innerHTML = "";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridColumnStart = e.y;
    snakeElement.style.gridRowStart = e.x;
    if (index === 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snake");
    }
    board.appendChild(snakeElement);
  });

  //Display the Food
  foodElement = document.createElement("div");
  foodElement.style.gridColumnStart = food.y;
  foodElement.style.gridRowStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

//Main Logic Starts here
let highScore = localStorage.getItem("highScore")
if(highScore === null){
    highScoreVal = 0;
    localStorage.setItem("highScore", JSON.stringify(highScoreVal));
}else{
    highScoreVal = JSON.parse(highScore);
    highScoreBox.innerHTML = "High Score: " + highScore;
}
window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {
  //Start the game
  inputDir = { x: 0, y: 1 };
  moveSnake.play();
  switch (e.key) {
    case "ArrowUp":
      console.log("ArrowUP");
      inputDir.x = -1;
      inputDir.y = 0;
      break;

    case "ArrowDown":
      console.log("ArrowDown");
      inputDir.x = 1;
      inputDir.y = 0;
      break;

    case "ArrowLeft":
      console.log("ArrowLeft");
      inputDir.x = 0;
      inputDir.y = -1;
      break;

    case "ArrowRight":
      console.log("ArrowRight");
      inputDir.x = 0;
      inputDir.y = 1;
      break;

    default:
      break;
  }
});
