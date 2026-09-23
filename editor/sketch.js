function setup() {
  // Razmer za termoprintera (384px shirina)
  createCanvas(384, 600);
  background(255);
  stroke(0);
  strokeWeight(2);
  noFill();

  // 1. Vunsna ramka
  for (let i = 0; i < width; i += 12) {
    rect(i, 0, 6, 6);
    rect(i, height - 6, 6, 6);
  }

  // 2. Spirala / Absatraktno slunce
  push();
  translate(width / 2, 200);
  for (let i = 0; i < 60; i++) {
    rotate(0.12);
    line(0, 0, i * 2.5, i * 1.8);
    ellipse(i * 2.5, i * 1.8, 4, 4);
  }
  pop();

  // 3. Kote
  triangle(150, 360, 170, 330, 185, 360);
  triangle(195, 360, 210, 330, 230, 360);
  ellipse(190, 380, 60, 45);
  fill(0);
  ellipse(175, 375, 6, 6);
  ellipse(205, 375, 6, 6);
  strokeWeight(1);
  line(160, 380, 140, 375);
  line(160, 385, 140, 388);
  line(220, 380, 240, 375);
  line(220, 385, 240, 388);

  // 4. Tekst
  noStroke();
  textAlign(CENTER);
  textSize(16);
  text("--- HACK CLUB RECEIPT ---", width / 2, 450);
  textSize(12);
  text("ITEM: 10 Hours of Coding", width / 2, 480);
  text("PRICE: $0.00 (Cat Printer!!)", width / 2, 500);
  text("STATUS: Ready to Print >_<", width / 2, 520);

  // Fonav shum
  for (let s = 0; s < 50; s++) {
    stroke(0);
    point(random(width), random(height));
  }

  noLoop();
  
  // Izteglya PNG fayla
  saveCanvas('receipt_sketch', 'png');
}
