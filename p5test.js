
let pg;
let textSize = 1550;
let tiles = 250;
let tileSize;
let loopDuration = 3 * 60;

function windowResized() {
resizeCanvas();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  
  //animation formatting
  pg = createGraphics(width, height);
  pg.textFont('Helvetica');
  pg.textAlign(CENTER, CENTER);
  pg.translate(width / 2, height / 2);
  pg.textSize(70);
  pg.fill(255);
  pg.text('the internet is forever', 0, 0);

  tileSize = width / tiles;

  // how fast the animation is running
  // this significantly impacts how glitchy the final webpage is 
  frameRate(10);
}

function draw() {
 
  background('#000');

//movement + distortion  
//reference: Wave Movement by dansakamoto 
//reference: sine wave by daniel shiffman
//reference: additive wave by daniel shiffman
  let currentFrame = frameCount % loopDuration;
  let t = currentFrame / loopDuration;
  let u = map(t, 0, 1, 0, PI);
  
  for (let y = 0; y < tiles; y++) {
    for (let x = 0; x < tiles; x++) {
      
      const waveX = sin(currentFrame * 0.02 * ( x * y ) * 0.01) * 100;
      const waveY = cos(currentFrame * 0.02 * ( x * y ) * 0.01) * 100;
      
      const sx = x * tileSize + waveX * sin(u);
      const sy = y * tileSize + waveY * sin(u);
      const sw = tileSize;
      const sh = tileSize;

      const dx = x * tileSize ;
      const dy = y * tileSize;
      const dw = tileSize;
      const dh = tileSize;
      
      image(pg, dx, dy, dw, dh, sx, sy, sw, sh);
      
    }
  }
}

function mousePressed(){
loop();
}

function mouseReleased(){
 noLoop();
}
