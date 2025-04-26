let x = 300;
let y = 200;
let speedX = 3;
let speedY = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("lightgrey");
  fill(200, 200, 30);

  ellipse(x, y, 50);

  if(x > width) {
    speedX = speedX * -1;
  } else if(x < 0) {
    speedX = speedX * -1;
  }

  if(y > height) {
    speedY = speedY * -1;
  } else if(y < 0) {
    speedY = speedY * -1;
  }

  x += speedX;
  y += speedY;
}

function mousePressed() {
  saveCanvas('myCanvas', 'png');
}
