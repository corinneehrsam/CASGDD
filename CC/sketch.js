function setup() {
  createCanvas(500,500);
  //noLoop();

  angleMode(DEGREES);

  rectMode(CENTER);

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

  let n = 5;
  let border = 50;

  for(i=0; i<=n; i++) {
    for(j=0; j<=n; j++) {
      x = map(i, 0, n, border, width-border);
      y = map(j, 0, n, border, height-border);
      ellipse(x,y,50,50);
    }
  }
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
