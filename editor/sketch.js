function setup() {
  createCanvas(400, 600);
  background(255);
  stroke(0);
  strokeWeight(2);
  noFill();

  // 1. Рамка от точки
  for (let i = 0; i < width; i += 10) {
    rect(i, 0, 5, 5);
    rect(i, height - 5, 5, 5);
  }

  // 2. Спирала / Звезда в средата
  push();
  translate(width / 2, 200);
  for (let i = 0; i < 50; i++) {
    rotate(0.15);
    line(0, 0, i * 3, i * 2);
    ellipse(i * 3, i * 2, 5, 5);
  }
  pop();

  // 3. Котешко лице
  // Уши
  triangle(160, 360, 180, 330, 195, 360);
  triangle(205, 360, 220, 330, 240, 360);
  // Глава
  ellipse(200, 380, 60, 45);
  // Очи
  fill(0);
  ellipse(185, 375, 6, 6);
  ellipse(215, 375, 6, 6);
  // Мустаци
  strokeWeight(1);
  line(170, 380, 150, 375);
  line(170, 385, 150, 388);
  line(230, 380, 250, 375);
  line(230, 385, 250, 388);

  // 4. Текст за касовата бележка
  noStroke();
  textAlign(CENTER);
  textSize(16);
  text("--- HACK CLUB RECEIPT ---", width / 2, 450);
  textSize(12);
  text("ITEM: 10 Hours of Coding", width / 2, 480);
  text("PRICE: $0.00 (Cat Printer!!)", width / 2, 500);
  text("STATUS: Ready to Print >_<", width / 2, 520);

  // Случайни точици / звезди
  for (let s = 0; s < 40; s++) {
    stroke(0);
    point(random(width), random(height));
  }
  
  noLoop();
}
