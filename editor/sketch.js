// ==========================================
// MY SUPER COOL GENERATIVE STAR DANCE SLOP!!
// hope the receipt printer doesn't explode >_<
// ==========================================

function setup() {
  // Трябва да е черно-бяло за принтера!
  createCanvas(400, 600);
  background(255); // бяла хартия
  stroke(0);       // черна боя
  noFill();
  
  // Правим линиите малко по-дебели, за да се виждат яко
  strokeWeight(2);

  // 1. Рисуваме готина рамка с пиксели
  for (let i = 0; i < width; i += 10) {
    rect(i, 0, 5, 5);
    rect(i, height - 5, 5, 5);
  }

  // 2. Случайна спирала / "Черна дупка" от линии
  push();
  translate(width / 2, 220);
  let numLines = floor(random(40, 80)); // всеки път е различно!
  
  for (let i = 0; i < numLines; i++) {
    rotate(TWO_PI / numLines);
    let r = random(20, 140);
    
    // малко хаос
    strokeWeight(random(1, 3));
    line(0, 0, r, r / 2);
    ellipse(r, r / 2, random(4, 12));
  }
  pop();

  // 3. Рисуваме малко котешко лице (защото искам CAT PRINTER!!)
  drawCat(width / 2 - 80, 420);
  drawCat(width / 2 + 80, 420);

  // 4. Текст като истинска касова бележка
  fill(0);
  noStroke();
  textAlign(CENTER);
  textSize(16);
  text("--- HACK CLUB RECEIPT ---", width / 2, 380);
  
  textSize(12);
  text("ITEM: 10 Hours of Pure Magic", width / 2, 510);
  text("PRICE: $0.00 (Priceless!)", width / 2, 530);
  text("STATUS: Ready to Print >:)", width / 2, 550);

  // Малко забавни малки звездички
  for (let s = 0; s < 30; s++) {
    let sx = random(width);
    let sy = random(height);
    stroke(0);
    point(sx, sy);
  }
}

// Функцийка за коте, защото котките са яки
function drawCat(x, y) {
  push();
  translate(x, y);
  stroke(0);
  strokeWeight(2);
  fill(255);
  
  // Ушички
  triangle(-20, -10, -10, -35, 0, -15);
  triangle(0, -15, 10, -35, 20, -10);
  
  // Глава
  ellipse(0, 0, 40, 30);
  
  // Очички (^.^)
  fill(0);
  ellipse(-8, -3, 4, 4);
  ellipse(8, -3, 4, 4);
  
  // Мустаци
  line(-15, 2, -28, 0);
  line(-15, 5, -26, 7);
  line(15, 2, 28, 0);
  line(15, 5, 26, 7);
  
  pop();
}

function draw() {
  // Оставяме го празно, защото ни трябва статична снимка за Export PNG!
  noLoop();
}
