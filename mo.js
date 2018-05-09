var a;
var d=0;


function setup(){
  createCanvas(400,400);
  background(0);
  strokeWeight(5);
  stroke(255);
  frameRate(30);
}

function draw() {
  
if(d%2==0){  
  for(var i= 0; i<width/20; i=i+1) {
    for(var j= 0; j<height/20; j=j+1) {
   
      fill(random(255),random(255),random(255));
      rect(20*i, 20*j, 40, 40);
    }
  }
}
  
if (d%2==1){  
  
  for(var i= 0; i<width/20; i=i+1) {
    for(var j= 0; j<height/20; j=j+1) {
     
     a= random(255); 
      fill(a,a,a);
      rect(20*i, 20*j, 40, 40);
    }
  }  
}

if(mouseIsPressed) d ++;

}
