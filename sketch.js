var astraunaut;

var iss, issImg;

var sleep, brush, gym, eat, drink, move;

function preload(){
  issImg=loadImage("iss.png");
  sleep=loadAnimation("sleep.png");
  brush=loadAnimation("brush.png");
  gym=loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png");
  eat=loadAnimation("eat1.png", "eat2.png");
  drink=loadAnimation("drink1.png", "drink2.png");
  move=loadAnimation("move.png");
  bath=loadAnimation("bath1.png", "bath2.png");
}

function setup() {
  createCanvas(800,400);
  iss=createSprite(400, 200, 800, 400);
  iss.addImage("iss", issImg);
  iss.scale=0.15;

  astraunaut=createSprite(400, 230);
  astraunaut.addAnimation("astraunaut", brush);
  astraunaut.scale=0.1;

  
}

function draw() {
  background("black");  

  
}