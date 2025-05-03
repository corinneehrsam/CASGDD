let img1;
let img2;
let img3;
let img4;
let img5;

let images;

let nrHouses = 20;

function preload() {
  img1 = loadImage("house1.png");
  img2 = loadImage("house2.png");
  img3 = loadImage("house3.png");
  img4 = loadImage("house4.png");
  img5 = loadImage("house5.png");
}

function setup() {
  createCanvas(800, 500);
  noLoop();
  //pixelDensity(3); 
  images = [img1, img2, img3, img4, img5];
}


function draw() {
  background("250");

  let x = 50;

  for(let i = 0; i < nrHouses; i++) {
    let index = floor(random(0,images.length));
    let img = images[index];
    let h = 120;
    let w = (img.width / img.height) * h;
    image(img, x, 100, w, h);
    x = x + w;
  }
}



function keyTyped() {
  if (key === "s") {
    saveCanvas('myCanvas', 'png');
  }
}
