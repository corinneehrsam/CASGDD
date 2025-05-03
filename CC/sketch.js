function setup() {
  createCanvas(800, 500);
  //noLoop();
  //pixelDensity(3);
  rectMode(CENTER);
}

let rectSize = 150;
let angle = 0;
let speed = 3;

function draw() {
  background("black");

  fill("white");
  rect(width/2, height/2, 150, 150);

  let movement = map(sin(angle), -1, 1, 0, rectSize);
  let movement2 = map(sin(angle * speed), -1, 1, 0, rectSize);

  fill("yellow");
  ellipse(width/2 + movement2 - rectSize/2, height/2-rectSize, 50);

  fill("blue");
  ellipse(width/2 + rectSize, height/2 + movement - rectSize/2, 50);

  fill("yellow");
  ellipse(width/2 - movement2 + rectSize/2, height/2 + rectSize, 50);

  fill("blue");
  ellipse(width/2 - rectSize, height/2 - movement + rectSize/2, 50);
  
  angle = angle + 0.05;
}

function keyTyped() {
  if (key === "s") {
    saveCanvas('myCanvas', 'png');
  }
}
