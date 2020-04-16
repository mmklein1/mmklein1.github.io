//GLOBAL VARIABLES
let walls = [];
let numOfWalls = 10;
let door = [];
let numOfDoor = 25;
let skinny = [];
let numOfSkinny = 8;
let side = [];
let numOfSide = 8;
let flooor = [];
let numOfFlooor = 18;
let couch = [];
let numOfCouch = 20;
let lamp = [];
let numOfLamp = 15;
let tv = [];
let numOfTv = 9;

//sliders
let shapeSlider;
let maxShapes = 50;

//color changer
let warm = true;
let cool = false;
let colorSelect;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();
  frameRate(1);


  //use that for the second value in the createSlider function (min,max,start)
  shapeSlider = createSlider(0, maxShapes, 4);
  shapeSlider.position(5, 45); 

  
  
  //slider decor
  let couch = createP("Construct the room"); 
  couch.position(5, 5); //position on canvas
  couch.addClass("sliderText");

  


  //color change
  colorSelect = createSelect();
  colorSelect.option('warm'); 
  colorSelect.option('cool');  
  colorSelect.changed(colorChange);
  colorSelect.position(5,70);

}

function colorChange() {
  let item = colorSelect.value();
  //store the value of the colorselector in a variable
  
  if (item == 'warm') {
    warm = true;
    cool = false;
  } else {
    warm = false;
    cool = true;
  }
}


function draw() {
  
   if (warm == true) {
      background(250, 207, 220);
    } else {
      background(175, 220, 221);
    }
  noStroke();

  
  for (let i = 0; i < numOfWalls; i++) {
    let x = random(width);
    let y = random(height);

    let w = random(50, 80);
    let h = random(90, 120);
    let scl = random(20, 50);
    walls[i] = new Wall(x, y, w, h, scl);

  }

  for (let i = 0; i < numOfDoor; i++) {
    let x = random(width);
    let y = random(height);

    let w = (60);
    let h = (120);
    let scl = random(20, 200);
    door[i] = new Door(x, y, w, h, scl);

  }

  for (let i = 0; i < numOfSkinny; i++) {
    let x = random(width);
    let y = random(height);

    let w = (200);
    let h = (40);
    let scl = random(20, 200);
    skinny[i] = new Skinny(x, y, w, h, scl);

  }

  for (let i = 0; i < numOfSide; i++) {
    let x = random(width);
    let y = random(height);

    let w = (200);
    let h = (40);
    let scl = random(20, 200);
    side[i] = new Side(x, y, w, h, scl);

  }

  for (let i = 0; i < numOfFlooor; i++) {
    let x = random(width);
    let y = random(height);

    let w = (200);
    let h = (40);
    let scl = random(20, 200);
    flooor[i] = new Flooor(x, y, w, h, scl);

  }

  for (let i = 0; i < numOfCouch; i++) {
    let x = random(width);
    let y = random(height);

    let w = (200);
    let h = (40);
    let scl = random(20, 200);
    couch[i] = new Couch(x, y, w, h, scl);

  }

  for (let i = 0; i < numOfLamp; i++) {
    let x = random(width);
    let y = random(height);

    let w = (200);
    let h = (40);
    let scl = random(20, 200);
    lamp[i] = new Lamp(x, y, w, h, scl);

  }


  for (let i = 0; i < numOfTv; i++) {
    let x = random(width);
    let y = random(height);

    let w = (200);
    let h = (40);
    let scl = random(20, 200);
    tv[i] = new Tv(x, y, w, h, scl);

  }
  
  
  // SLIDERS GO IN THESE FOR LOOPS
  
  //use the map function to change the value from max shapes to wall max
  let wallMax = map(shapeSlider.value(),0,maxShapes,0,numOfWalls);

  for (let i = 0; i < wallMax; i++) {
    walls[i].move();
    walls[i].show();

  }

    let doorMax = map(shapeSlider.value(),0,maxShapes,0,numOfDoor);

  for (let i = 0; i <  doorMax; i++) {
    door[i].move();
    door[i].show();

  }
  
  let skinnyMax = map(shapeSlider.value(),0,maxShapes,0,numOfSkinny);
  
  for (let i = 0; i < skinnyMax; i++) {
    skinny[i].move();
    skinny[i].show();
  }
  
  let sideMax = map(shapeSlider.value(),0,maxShapes,0,numOfSide);
  
  for (let i = 0; i < sideMax; i++) {
    side[i].move();
    side[i].show();
  }

  let flooorMax = map(shapeSlider.value(),0,maxShapes,0,numOfFlooor);
  
  for (let i = 0; i < flooorMax; i++) {
    flooor[i].move();
    flooor[i].show();
    
  }
  
  let couchMax = map(shapeSlider.value(),0,maxShapes,0,numOfCouch);
  
  for (let i = 0; i < couchMax; i++) {
    couch[i].move();
    couch[i].show();
    
  }

  let lampMax = map(shapeSlider.value(),0,maxShapes,0,numOfLamp);
  
  for (let i = 0; i < lampMax; i++) {
    lamp[i].move();
    lamp[i].show();
  }

  let tvMax = map(shapeSlider.value(),0,maxShapes,0,numOfTv);
  
  for (let i = 0; i < tvMax; i++) {
    tv[i].move();
    tv[i].show();
  }
}


class Wall {

  constructor(x, y, w, h, scl) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.scl = scl;
    this.speed = random(1, 4);
  }

  move() {
    this.x = this.x + this.speed;

    if (this.x + this.w > width) {
      this.x = 0;
    }
  }

  show() {

    if (warm == true) {
      fill(241, 90, 41);
    } else {
      fill(0, 165, 184);
    }
    //wall
    rect(this.x, this.y, this.w, this.h);

    
    if (warm == true) {
      fill("orange");
    } else {
      fill(93, 190, 123);
    }
    //sidewall
    quad(this.x, this.y, this.x, this.y + this.h, this.x - this.scl * 3, this.y + this.h + this.scl, this.x - this.scl * 3, this.y - this.scl);
  }

}

class Door {

  constructor(x, y, w, h, scl) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.scl = scl;
    this.speed = random(2, 6);

  }

  move() {
    this.y = this.y + this.speed;

    if (this.y + this.w > width) {
      this.y = 0;
    }
  }

  show() {

     if (warm == true) {
      fill(218, 28, 92);
    } else {
      fill(150, 201, 61);
    }
    //doorframe
    rect(this.x, this.y, this.w, this.h);

     if (warm == true) {
      fill("brown");
    } else {
      fill(112, 90, 61);
    }
    //knob
    noStroke();
    circle(this.x + this.w, this.y + this.h / 2, 10, 10);
  }

}

class Skinny {
  constructor(x, y, w, h, scl) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.scl = scl;
    this.speed = random(2, 6);


  }

  move() {
    this.y = this.y + this.speed;

    if (this.y + this.w > width) {
      this.y = 0;
    }
  }


  show() {   
    
    if (warm == true) {
      fill(236, 0, 140);
    } else {
      fill(51, 198, 244);
    }
    rect(this.x, this.y, this.w, this.h);

  }

}

class Side {

  constructor(x, y, w, h, scl) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.scl = scl;
    this.speed = random(2, 6);

  }

  move() {
    this.y = this.y + this.speed;

    if (this.y + this.w > width) {
      this.y = 0;
    }
  }

  show() {

     if (warm == true) {
      fill(190, 30, 45);
    } else {
      fill(39, 43, 110);
    }
    quad(this.x + 38, this.y + 31, this.x + 86, this.y - 30, this.x + 86, this.y + 143, this.x + 38, this.y + 76);

  }
}

class Flooor {

  constructor(x, y, w, h, scl) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.scl = scl;
    this.speed = random(2, 6);

  }

  move() {
    this.y = this.y + this.speed;

    if (this.y + this.w > width) {
      this.y = 0;
    }
  }

  show() {

     if (warm == true) {
      fill(239, 65, 54);
    } else {
      fill(0, 81, 162);
    }
    quad(this.x + 50, this.y + 40, this.x + 186, this.y + 30, this.x + 276, this.y + 63, this.x + 133, this.y + 76);

  }
}

class Couch {
  constructor(x, y, w, h, scl) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.scl = scl;
    this.speed = random(2, 6);

  }

  move() {
    this.y = this.y + this.speed;

    if (this.y + this.w > width) {
      this.y = 0;
    }
  }

  show() {
    
     if (warm == true) {
      fill(180, 31, 99);
    } else {
      fill(0, 110, 61);
    }
    //TopPart
    quad(this.x + 28, this.y + 35, this.x + 80, this.y + 37, this.x + 89, this.y + 59, this.x + 30, this.y + 66);

     if (warm == true) {
      fill(159, 31, 99);
    } else {
      fill(0, 78, 61);
    }
    //BottomPart
    quad(this.x + 30, this.y + 66, this.x + 90, this.y + 58, this.x + 120, this.y + 60, this.x + 60, this.y + 72);

     if (warm == true) {
      fill("brown");
    } else {
      fill(112, 90, 61);
    }
    //Legs
    rect(this.x + 30, this.y + 66, 5, 10);
    rect(this.x + 90, this.y + 64, 5, 5);
    rect(this.x + 110, this.y + 60, 5, 12);
    rect(this.x + 60, this.y + 70, 5, 12);
  }
}

class Lamp {
  constructor(x, y, w, h, scl) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.scl = scl;
    this.speed = random(2, 6);

  }

  move() {
    this.y = this.y + this.speed;

    if (this.y + this.w > width) {
      this.y = 0;
    }
  }

  show() {

     if (warm == true) {
      fill(247, 205, 100);
    } else {
      fill(112, 90, 152);
    }
    //bottom
    rect(this.x + 50, this.y + 50, 5, 70);
    rect(this.x + 42, this.y + 120, 20, 5);

     if (warm == true) {
      fill(247, 205, 100);
    } else {
      fill(229, 255, 200);
    }
    //light
    circle(this.x + 78, this.y + 50, 10);

     if (warm == true) {
      fill(239, 28, 54);
    } else {
      fill(160, 172, 215);
    }
    //lamp
    triangle(this.x + 48, this.y + 50, this.x + 78, this.y + 30, this.x + 78, this.y + 70);
  }
}

class Tv {
  constructor(x, y, w, h, scl) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.scl = scl;
    this.speed = random(2, 6);

  }

  move() {
    this.y = this.y + this.speed;

    if (this.y + this.w > width) {
      this.y = 0;
    }
  }

  show() {
   
     if (warm == true) {
      fill(70, 5, 54);
    } else {
      fill(4, 26, 74);
    }
    rect(this.x + 20, this.y + 20, 50, 30);
  }


}

