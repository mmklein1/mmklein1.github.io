let data;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR928eRngkm1vz0KB_KKztXmFOKRL6jZdWUC6Mvmjb98tDlj57D1FEJedvrxqrXi3jQpFxicuyvvqr2/pub?gid=0&single=true&output=csv"
function preload() {
  //data = loadTable('M&MsData.csv', 'csv', 'header');
  data = loadTable('MMData.csv', 'csv', 'header');
  
}

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(20);
  
  //this makes sure there is content in the data
  if (data) {

    //get the amount of rows in the CSV
    let numRows = data.getRowCount();

    //get the column titled Miles
    let name = data.getColumn('Name');
   let type = data.getColumn('Type of M&M');
    
    //debug
    print(name);
    print(type);
    
    

    //iterate over the number of rows
    for (let i = 0; i < numRows; i++) {
      
      let x=random(width);
      let y=random(height)
      
      if(type[i]=="mini"){
        fill("lightpink");
      }else if(type[i] == "regular"){
      fill("skyblue");
    }
      
      
      //text(string, xpos, ypos);
      text(name[i],x,y);
      //rect(x,y,w,h);
    }
  }
}
