let snake;
let food;
let resolution = 20;
let w;
let h;
let score;
let canvas;

function setup() {
  init();
}

function init() {
  score = 0;
  canvas = createCanvas(700, 500);
  canvas.parent("sketch-holder");
  w = floor(width / resolution);
  h = floor(height / resolution);
  frameRate(8);
  snake = new Snake();
  foodLocation();
}

function draw() {
  scale(resolution);
  colorMode(RGB);
  background(0);

  if(snake.eat(food)) {
    score += 1;
    print(score);
    foodLocation();
  }

  snake.update();
  snake.show();

  textSize(1.5);
  text("Score: " + score, 1 , 2);

  if(snake.endGame()) {
    textSize(5);
    colorMode(RGB);
    fill(255, 0, 0);
    text('Game Over', 4, 13);
    init();
    //noLoop();
  }

  noStroke();
  colorMode(RGB);
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function keyPressed() {
  if(keyCode === LEFT_ARROW){
    snake.setDir(-1,0);
  } else if(keyCode === RIGHT_ARROW) {
    snake.setDir(1,0);
  } else if(keyCode === UP_ARROW) {
    snake.setDir(0,-1);
  } else if(keyCode === DOWN_ARROW) {
    snake.setDir(0,1);
  }
}