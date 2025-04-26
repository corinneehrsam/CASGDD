function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("lightgrey");
  fill(200, 200, 30);

  /*
  fill("blue");
  noStroke();
  ellipse(100, 200, 50);

  fill(0, 150, 150);
  triangle(50, 200, 250, 200, 100, 350);

  fill(200, 200, 30);
  arc(50, 50, 80, 80, 0, PI + HALF_PI);

  stroke("hotpink");
  strokeWeight(4);
  line(50, 350, 300, 50);
  */

  strokeWeight(4);
  beginShape();
  vertex(100, 100);
  vertex(300, 50);
  vertex(350, 300);
  vertex(50, 250);
  endShape(CLOSE);

  stroke("hotpink");
  beginShape();
  noFill();
  vertex(50, 100);
  vertex(300, 150);
  vertex(320, 300);
  vertex(50, 300);
  endShape(CLOSE);

  stroke("blue");
  beginShape();
  noFill();
  curveVertex(50, 100);
  curveVertex(50, 100);
  curveVertex(300, 150);
  curveVertex(320, 300);
  curveVertex(50, 300);
  curveVertex(50, 300);
  endShape();
}
