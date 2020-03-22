function setup() {
createCanvas(windowWidth, windowHeight);
  frameRate(5); 
}

function draw() {
  background("skyblue");
for (let i = 0; i < 50; i++) {
    flower(random(width), random(height));
  }


}

function flower(x, y) {



  //leaves
  fill("green");
  noStroke();
  angleMode(DEGREES);
  push();
  translate(x, y);
  rotate(45);
  ellipse(0 - 4, 0 + 25, 20, 80);
  ellipse(0 - 4, 0 - 25, 20, 80);
  ellipse(0 - 24, 0 - 1, 80, 20);
  ellipse(0 + 24, 0 - 1, 80, 20);
  pop();

  //white background
  fill(255);
  noStroke();
  ellipse(x, y + 30, 45);
  ellipse(x + 30, y, 45);
  ellipse(x, y - 30, 45);
  ellipse(x - 30, y, 45);


  //blue main bg
  fill("yellow");
  noStroke();
  ellipse(x, y, 40, 40);


  //center
  fill(255, 255, 10);
  noStroke();
  ellipse(x, y, 20, 20);



}