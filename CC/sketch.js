function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);

  //noLoop();
  rectMode(CENTER);
  // pixelDensity(3); // Auflösung
}

let r = 100;
let angle = 0;

function draw() {
  background("lightgrey");

  r = map(sin(angle), -1, 1, 100, 300);

  stroke(0);
  rect(width/2, height/2, r, r);

  angle = angle + 5;
}

function keyTyped() {
  if(key === "s") {
    saveCanvas('myCanvas', 'png');
  }
}
