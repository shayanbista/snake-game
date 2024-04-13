//constants
let lastPainttime = 0;
let score = 0;
let inputdir = { x: 0, y: 0 };
let foodlocation = { x: 5, y: 14 };
let snakeArr = [{ x: 13, y: 15 }];
let board = document.getElementById("board");
let value = document.getElementById("score");
let reset;
let a = 2,
  b = 16;
let startmusic = new Audio("music.mp3");
let moveSound = new Audio("move.mp3");
let gameover = new Audio("gameover.mp3");
let foodsong = new Audio("food.mp3");

//game function(game loop )
function main(ctime) {
  window.requestAnimationFrame(main);
  if ((ctime - lastPainttime) / 1000 < 1 / 4) {
    return;
  }

  lastPainttime = ctime;
  gameEngine();
}
function resetit() {
  startmusic.pause();
  inputdir = { x: 0, y: 0 };
  snakeArr = [{ x: 13, y: 15 }];
  score = 0;
  foodlocation = {
    x: Math.round(a + (b - a) * Math.random()),
    y: Math.round(a + (b - a) * Math.random()),
  };
  value.innerHTML = "score:" + score;
}
function gameEngine() {
  //updating the snake and food
  if (isCollide(snakeArr)) {
    gameover.play();
    startmusic.pause();
    alert("the end");
    inputdir = { x: 0, y: 0 };
    snakeArr = [{ x: 13, y: 15 }];
    score = 0;
    value.innerHTML = "score:" + score;
  }
  function isCollide(snake) {
    // // If you bump into yourself
    for (let i = 1; i < snakeArr.length; i++) {
      if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
        return true;
      }
    }

    // If you bump into the wall
    if (
      snake[0].x > 18 ||
      snake[0].x <= 0 ||
      snake[0].y > 18 ||
      snake[0].y <= 0
    ) {
      return true;
    }

    return false;
  }

  //  if you have eaten the food increment the score and regenerate the food
  if (snakeArr[0].x == foodlocation.x && snakeArr[0].y == foodlocation.y) {
    foodsong.play();
    snakeArr.unshift({
      x: snakeArr[0].x + inputdir.x,
      y: snakeArr[0].y + inputdir.y,
    });

    console.log(snakeArr[0]);
    console.log(snakeArr);

    foodlocation = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
    score++;
    value.innerHTML = "score:" + score;
  }

  //moving the snake

  for (let i = snakeArr.length - 2; i >= 0; i--) {
    snakeArr[i + 1] = { ...snakeArr[i] };
  }

  snakeArr[0].x += inputdir.x;
  snakeArr[0].y += inputdir.y;

  // Part 2: Display the snake and Food
  // Display the snake
  board.innerHTML = "";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    if (index == 0) {
      snakeElement.setAttribute("class", "head");
    } else {
      snakeElement.setAttribute("class", "snake");
    }
    board.appendChild(snakeElement);
  });
  let food = document.createElement("div");
  food.setAttribute("class", "food");
  food.style.gridRowStart = foodlocation.y;
  food.style.gridColumnStart = foodlocation.x;
  board.appendChild(food);
}

//main logic
window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {
  inputdir = { x: 1, y: 0 }; //start the game
  startmusic.play();
  switch (e.key) {
    case "ArrowUp":
      inputdir.x = 0;
      inputdir.y = -1;
      moveSound.play();
      break;
    case "ArrowRight":
      inputdir.x = 1;
      inputdir.y = 0;
      moveSound.play();

      break;
    case "ArrowLeft":
      inputdir.x = -1;
      inputdir.y = 0;
      moveSound.play();

      break;
    case "ArrowDown":
      inputdir.x = 0;
      inputdir.y = 1;
      moveSound.play();
      break;
    case "r":
      resetit();

      break;
    default:
      break;
  }
});
