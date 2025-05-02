function setup() {
  createCanvas(800,500);

  //noLoop();
  // pixelDensity(3); 
}

let b = 0;
let A = 20;
let k = 0.05;

let b2 = 0;
let A2 = 12;
let k2 = 0.1;

function draw() {
  background("black");
  
  push();
  translate(0, height/2);
  beginShape();
  vertex(0, height/2);
  for(let x=0; x<=width; x+=10) {
    let y1 = wave(x, A, k, b);
    let y2 = wave(x, A2, k2, b2);
    let y3 = wave(x, 2, 0.5, frameCount * 0.2);
    let y = y1 + y2 + y3;
    vertex(x, y);
  }
  vertex(width, height/2);
  endShape();
  pop();

  b = b + 0.08;
  b2 = b2 + 0.05;
}

function wave(x,A,k,b) {
  return A * sin(k * x + b);
}

function keyTyped() {
  if(key === "s") {
    saveCanvas('myCanvas', 'png');
  }
}
