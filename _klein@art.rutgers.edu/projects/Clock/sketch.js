let sec;
let mint;
let hr;


function setup() {
  createCanvas(800, 800);

}

function draw() {
  background(44, 191, 245);

  //remap seconds/minutes/hours to fit within my canvas
  sec = map(second(), 0, 60, 0, 800);
  mint = map(minute(), 0, 60, 0, 400);
  hr = map(hour(), 0, 24, 0, 100);

  //draw sec/min/hour
  let div = height / 10;
  ellipseMode(CENTER);

  fill(184, 222, 255, 100);
  circle(400, 400, mint, div, mint);
  fill(164,237,255,91)
  noStroke();
  circle(400, 400, hr, div, hr);

  //seconds circle
  //fourth number will be opacity (on a scale of 0-255)
  fill(115, 169, 255, 100);
  circle(400, 400, sec, div, sec);
  print(sec);
}