//declarando variaveis 
let diameter = 80;
let trail = [];
let colorR, colorG, colorB;

//criando as funções 
function setup(){ 
createCanvas(400,400);
colorMode(HSB,360,100,100);
colorR = random(360);
colorG = 100;
colorB = 100;
} 

function draw(){
background("white");
fill(colorR,colorG,colorB);
trail.push ({x: mouseX, y: mouseY, color: color(colorR, colorG, colorB)});

if(trail.length > 50) {
  trail.shift();
}

  for(let i = 0; i< trail.length; i++) {
    noStroke();
    fill(trail[i].color);
    ellipse(trail[i].x, trail[i].y, diameter, diameter);
    
  }
  
  //altera as cores da bola 
  colorR =(colorR + 1)%360;
  colorG =(colorG + 1)%100;
  colorB =(colorB + 1)%100;
}