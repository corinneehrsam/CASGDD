function setup() {
  createCanvas(400,400);
  noLoop();

  angleMode(DEGREES);

  rectMode(CENTER);
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

// function draw() {
//   background("lightgrey");

//   let x = 0;
//   let y = 0;
//   let cellSize = 50;
  
//   noFill();

//   for(i = 0; i < 200; i++) {
//     let n = random(5,25);

//     for(j = 0; j < 5; j++) {
//       strokeWeight(round(random(1,3)));
//       stroke(round(random(100,255)), 150, round(random(100,255)));
//       ellipse(x + cellSize*0.5, y + cellSize*0.5, n * j, n * j);
//     }

//     x = x + cellSize;

//     if(x > height) {
//       x = 0;
//       y = y + cellSize;
//     }
    
//   }
// }

function draw() {
  background("lightgrey");

  push();
  translate(width/2, height/2);
  rotate(20);
  rect(0, 0, 200, 50);
  pop();

  rect(50, 50, 200, 50);
}

function mousePressed() {
  saveCanvas('myCanvas', 'png');
}
