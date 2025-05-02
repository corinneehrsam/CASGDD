function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);

  //noLoop();
  rectMode(CENTER);
  // pixelDensity(3); 
}

let angle = 0;
let r = 3;
let spacing = 20;


function draw() {
  background("black");
  fill(255);

  for (let i = 0; i < height / spacing; i++) {
    let yOffset = i * spacing;
    let phaseShift = i * 80; 

    for (let x = 0; x < width; x += 10) {
      let y = yOffset + 100 * sin(x + angle + phaseShift);
      ellipse(x, y, r);
    }
  }

  angle = angle + 1;
}

function keyTyped() {
  if(key === "s") {
    saveCanvas('myCanvas', 'png');
  }
}
