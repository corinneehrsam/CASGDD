function setup() {
  createCanvas(500,500);
  //noLoop();

  angleMode(DEGREES);

  //rectMode(CENTER);

  // pixelDensity(3); // Auflösung
}

// function draw() {
//   background("lightgrey");

//   let x = 0;
//   let y = 0;
//   let cellSize = 50;
  

//   for(i = 0; i < 200; i++) {
//     let n = random(0,4);
  
//     fill("black");

//     noStroke();

//     if(n > 0) {
//       fill("yellow");
//       triangle(x, y, x + cellSize*0.5, y + cellSize*0.5, x, y + cellSize);
//     } 
//     if(n > 1) {
//       fill("purple");
//       triangle(x, y, x + cellSize, y, x + cellSize*0.5, y + cellSize*0.5);
//     } 
//     if(n > 2) {
//       fill("blue");
//       triangle(x + cellSize, y, x + cellSize, y + cellSize, x + cellSize*0.5, y + cellSize*0.5);
//     }
//     if(n > 3) {
//       fill("orange");
//       triangle(x + cellSize, y + cellSize, x + cellSize*0.5, y + cellSize*0.5, x, y + cellSize);
//     }

//     x = x + cellSize;

//     if(x > height) {
//       x = 0;
//       y = y + cellSize;
//     }
    
//   }
// }

// ------------------------------------------------------- 2ND

let x = 50;
let y = 50;

function draw() {
  background("lightgrey");

  let s = second();
  let rSecond = map(s, 0, 60, 0, 360);

  let m = minute();
  let rMinute = map(m, 0, 60, 0, 360);

  let h = hour();
  let rHour = map(h, 0, 12, 0, 360);

  push();
  strokeWeight(2);
  translate(width/2,height/2);
  rotate(rSecond);
  line(0, 0, 0, -height/2);
  pop();
  
  push();
  strokeWeight(4);
  translate(width/2,height/2);
  rotate(rMinute);
  line(0, 0, 0, -height/2);
  pop();

  push();
  strokeWeight(8);
  translate(width/2,height/2);
  rotate(rHour);
  line(0, 0, 0, -height/2);
  pop();
}

// function draw() {
//   background("lightgrey");

//   push();
//   translate(width/2, height/2);
//   rotate(20);
//   rect(0, 0, 200, 50);
//   pop();

//   rect(50, 50, 200, 50);
// }

// function mousePressed() {
//   saveCanvas('myCanvas', 'png');
// }

function keyTyped() {
  if(key === "s") {
    saveCanvas('myCanvas', 'png');
  }
}
