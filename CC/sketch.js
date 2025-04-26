function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("lightgrey");

  for(let i = 0; i < 10; i++ ) {
    let x = i * 50;
    ellipse(x, 100, 50, 50);
  }
}

function mousePressed() {
  saveCanvas('myCanvas', 'png');
}
