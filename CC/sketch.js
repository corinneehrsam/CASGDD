let x = 300;
let y = 200;
let speed = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("lightgrey");
  fill(200, 200, 30);

  ellipse(x, y, 50);

  if(x > 600) {
    speed = speed * -1;
  } else if(x < 0) {
    speed = speed * -1;
  }

  x += speed;
}

function mousePressed() {
  saveCanvas('myCanvas', 'png');
}
