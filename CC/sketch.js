function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  angleMode(DEGREES);
}

let rectSize = 150;
let angle = 0;
let movement = 0;
let flip = 1;

function draw() {
  background("black");
  
  let x = 0;
  let y = 0;
  let j = -1;
  let gutter = width / 15;

  stroke("white");
  noFill();

  for(let i = 0; i < gutter; i++) {
    x = x + 15;
    //line(x,y,x, y+height);
    movement = map(sin(angle + i * 10), -1, 1, 0, 10); 

    beginShape();
    curveVertex(x,y);
    curveVertex(x,y);
    curveVertex(x + flip * movement, y+height/4);
    curveVertex(x - flip * movement, y+height/2);
    curveVertex(x + flip * movement, y+height/4*3);
    curveVertex(x, y+height);
    curveVertex(x, y+height);
    endShape();
    angle = angle + 0.1;
  }
}

function keyTyped() {
  if (key === "s") {
    saveCanvas('myCanvas', 'png');
  }
}
