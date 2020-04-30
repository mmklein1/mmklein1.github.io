let data;
let subData;
let usaStarbucks=[];
let usaDunkin=[];
let p;


function preload(){
  
  data = loadTable("directory.csv","csv","header");
  subData = loadTable("dunkin.csv", "csv", "header");
  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background("green");
  
  p = createP("City");
  p.position(120, 320);
  p.addClass("starcity");
  
  dunkcity = createP("e_city");
  dunkcity.position(140, 340);
  dunkcity.addClass("dunkcity");
  
  let word = createP("America Runs On..."); 
  word.position(10, 300); //position on canvas
  word.addClass("key");
  
  let starbucks = createP("Starbucks in");
  starbucks.position(35, 320);
  starbucks.addClass("starbucks");
  
  let dunkin = createP("Dunkin Donuts in");
  dunkin.position(35, 340);
  dunkin.addClass("dunkin");


  let numRows = data.getRowCount();
  let subRows = subData.getRowCount();
  
  print(numRows);
  print(subRows);
  
  //starbucks
  let lng = data.getColumn("Longitude");
  let lat = data.getColumn("Latitude");
  let country = data.getColumn("Country");
  let city = data.getColumn("City");
  
  //dunkin
  let subLng = subData.getColumn("loc_LONG_poly");
  let subLat = subData.getColumn("loc_LAT_poly");
  let subCity = subData.getColumn("e_city");
  
  let maxLng = max(lng);
  let minLng = min(lng);
  print(maxLng, minLng);
  
   let maxLat = max(lat);
  let minLat = min(lat);
  print(maxLat, minLat);
  
  //starbucks
  for(let i = 0; i< numRows; i++){
    
   let mapLng = map(lng[i],-131.82, -66.73, 0, width);
  let mapLat = map(lat[i], 23.33,51.26,height, 0);
    
 usaStarbucks[i] = new Starbucks(mapLng, mapLat, city[i]);
    
     if(mapLng[i]=="US"){
        fill(255);
     }
    if(mapLat[i]=="US"){
      fill(255);
    }
    
  }

  //dunkin
  for(let i = 0; i< subRows; i++){
      
      let subMapLng = map(subLng[i], -131.82, -66.73, 0, width);
    let subMapLat = map(subLat[i], 23.33,51.26, height, 0);
      
  usaDunkin[i] = new Dunkin(subMapLng, subMapLat, subCity[i]);
  }
}


function draw(){
  
  fill (255);
  ellipse(30, 340, 6);
  
  fill("orange");
  noStroke();
  ellipse(30, 360, 6);
  

  for(let i = 0; i < usaStarbucks.length; i++){
    usaStarbucks[i].show();
    usaStarbucks[i].intersect(mouseX, mouseY);
  }

  for(let i = 0; i < usaDunkin.length; i ++){
    usaDunkin[i].show();
    usaDunkin[i].intersect(mouseX, mouseY);
  }
}

class Starbucks{
  constructor(x,y, city){
  this.x = x;
    this.y = y;
    this.city = city;
  }
  intersect(x,y){
    let distance = dist(x, y, this.x, this.y);
    if(distance<1){
    p.html(this.city);
    
    }
    
  }
  
  
  show(){
     fill(255);
    noStroke();
    ellipse(this.x, this.y, 0.7);
  }
}

class Dunkin{
  constructor(x,y,subCity){
    this.x=x;
    this.y=y;
    this.subCity = subCity;
  }
  intersect(x,y){
    let distance = dist(x, y, this.x, this.y);
    if(distance<1){
    dunkcity.html(this.subCity);
    }
  }
  
  show(){
   fill("orange");
  noStroke();
  ellipse(this.x, this.y, 0.7);
  }
  
}
