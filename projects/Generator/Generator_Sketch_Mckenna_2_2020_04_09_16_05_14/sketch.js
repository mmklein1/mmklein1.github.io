//GLOBAL VARIABLES
let walls = [];
let numOfWalls = 3;
let door = [];
let numOfDoor = 8;
let skinny = [];
let numOfSkinny = 2;
let side = [];
let numOfSide = 3;
let flooor = [];
let numOfFlooor = 5;

function setup() {
  createCanvas(800, 800);
     //noLoop();
    frameRate(2);

   }
  
function draw() {
  background(250, 207, 220);
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
  
  for (let i = 0; i < walls.length; i++) {
     walls[i].move();
    walls[i].show();
    
  }

  for (let i = 0; i < door.length; i++) {
    door[i].move();
    door[i].show();

  }
  
  for (let i = 0; i < skinny.length; i++) {
    skinny[i].move();
    skinny[i].show();
  
  }
    for (let i = 0; i < side.length; i++) {
    side[i].move();
    side[i].show();
    }

  for (let i = 0; i < flooor.length; i++) {
    flooor[i].move();
    flooor[i].show();
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

    if (this.x+ this.w > width) {
      this.x = 0;
    }
   }
  
  show() {

    fill(241, 90, 41);
    rect(this.x, this.y, this.w, this.h);

    //sidewall
    fill("orange");
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

    if (this.y+ this.w > width) {
      this.y = 0;
    }
   }

  show() {

   //doorframe
  fill(218, 28, 92);
    rect(this.x, this.y, this.w, this.h);

  //knob
  fill("brown");
  noStroke();
  circle(this.x+this.w, this.y+this.h/2, 10, 10);
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

    if (this.y+ this.w > width) {
      this.y = 0;
    }
   }

  show() {

  fill(236,0,140);
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

    if (this.y+ this.w > width) {
      this.y = 0;
    }
   }

  show() {

 fill(190, 30, 45);
  quad(this.x + 38, this.y + 31, this.x + 86, this.y-30, this.x + 86, this.y + 143, this.x + 38, this.y+76);

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

    if (this.y+ this.w > width) {
      this.y = 0;
    }
   }

  show() {

 fill(239, 65, 54);
  quad(this.x + 50, this.y + 40, this.x + 186, this.y + 30, this.x + 276, this.y + 63, this.x + 133, this.y + 76);

  }
  
  
}
