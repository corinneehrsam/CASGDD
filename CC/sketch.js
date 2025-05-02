function setup() {
  createCanvas(800, 500);
  //noLoop();
  //pixelDensity(3); 
}

let b = 0;
let A = 10;
let k = 0.05;

let b2 = 0;
let A2 = 15;
let k2 = 0.1;

function draw() {
  background("black");

  let numRows = 50;      
  let spacing = 10; 

  for (let row = 0; row < numRows; row++) {
    let yOffset = row * spacing + 50;  
    for (let x = 0; x <= width; x += 10) {
      let y1 = wave(x, A, k, b);
      let y2 = wave(x, A2, k2, b2);
      let y = 50 + y1 + y2 + yOffset;

      let alpha = map(y, 0, width, 255, 0);
      fill(255, alpha);
      noStroke();
      ellipse(x, y, 5);
    }
  }

  b += 0.08;
  b2 += 0.05;
}

function wave(x, A, k, b) {
  return A * sin(k * x + b);
}

function keyTyped() {
  if (key === "s") {
    saveCanvas('myCanvas', 'png');
  }
}
