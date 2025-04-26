function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background("lightgrey");

  let x = 0;
  let y = 0
  let cellSize = 5;
  

  for(i = 0; i < 300000; i++) {
    let n = random(0,1);    
  
    if(n < 0.5) {
      stroke("purple");
      strokeWeight(2);
      line(x, y, x + cellSize, y + cellSize);
    } else {
      stroke("orange");
      strokeWeight(4);
      line(x + cellSize, y, x, y + cellSize);
    } 

    x = x + cellSize;

    if(x > height) {
      x = 0;
      y = y + cellSize;
    }
    
  }
}

function mousePressed() {
  saveCanvas('myCanvas', 'png');
}
