function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background("lightgrey");

  let x = 25;
  let y = 25;
  let r = random(5,50);
  let cellSize = 50;

  for(i = 0; i < 100; i++) {
    fill(0);
    noStroke();
    r = random(5,50);
    ellipse(x, y, r);
    x = x + cellSize;

    if(x > width) {
      x = 25;
      y = y + cellSize;
    }
  }
}

function mousePressed() {
  saveCanvas('myCanvas', 'png');
}
