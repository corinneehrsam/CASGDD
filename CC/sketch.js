function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  angleMode(DEGREES);
}

let rectSize = 150;
let angle = 0;

function draw() {
  background("black");
  let movement = map(sin(angle), -1, 1, -20, 20);

  let x = 0; 

  push();
  translate(width / 2, height / 2);
  for (let j = 0; j <= 5; j++) {
    rotate(30);
    for (let i = 1; i <= 20; i+=1) {
      stroke("white");
      noFill();
      rotate(i);
      beginShape();
      curveVertex(0, 0);
      curveVertex(0, 0);
      curveVertex(100, -50 + movement);
      curveVertex(200, movement);
      curveVertex(300, -50 + movement / 2);
      curveVertex(300, -50 + movement / 2);
      endShape();
    }
  }
  pop();

  angle += 3;
}

function keyTyped() {
  if (key === "s") {
    saveCanvas('myCanvas', 'png');
  }
}
