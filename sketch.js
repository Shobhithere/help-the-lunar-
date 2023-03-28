let ground;
let lander;
var lander_img;
var bg_img;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var moon;



var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(80);

  lander = createSprite(50,120,30,30);
  lander.addImage(lander_img);
lander.scale = 0.08;
lander.debug=true
lander.setCollider("rectangle",0,0,700,700)
moon = createSprite(width-120,height/3,120,120);
moon.visible=false;

edges=createEdgeSprites()


 // lander.velocityX=2;
 // lander.velocityY=1
  block1 = createSprite(350,70,450,10);
  block1 = createSprite(190,150,150,10);
  block1.shapeColor="red"
  block1 = createSprite(420,150,150,10);

  block2 = createSprite(500,345,10,400);
  block2 = createSprite(570,270,10,400)
  block2.shapeColor="red"
  block2 = createSprite(25,340,10,180);

  block3 = createSprite(580,470,30,10);
  block3 = createSprite(700,470,30,10);
  block3.shapeColor="red"

  
  block3 = createSprite(650,540,300,10);
  block3.shapeColor="red"


  block4 = createSprite(800,445,10,200);
  block4.shapeColor="red"

  block4 = createSprite(710,350,10,250);

block5 = createSprite(780,220,150,10);

block6 = createSprite(260,250,10,200);
block6 = createSprite(350,250,10,200);

block7 = createSprite(190,350,150,10);
block7 = createSprite(190,425,150,10);

block8 = createSprite(350,355,10,150);
//block8 = createSprite(300,425,100,10);

block8 = createSprite(110,302,10,107);
block8 = createSprite(80,425,100,10);;;
block8 = createSprite(25,245,10,100);;;
block8 = createSprite(225,218,10,65);;;

block9 = createSprite(165,245,120,10);
block9 = createSprite(120,190,200,10);

block10 = createSprite(850,150,10,150);
block10 = createSprite(950,150,10,150);
block10 = createSprite(870,350,150,10);
block10 = createSprite(950,420,10,150);
block10 = createSprite(600,400,10,150);
block10 = createSprite(680,400,10,150);
block10 = createSprite(995,500,100,10);
block10 = createSprite(1050,570,10,150);
block10 = createSprite(1100,640,100,10);
block10 = createSprite(1150,570,10,150);
block10 = createSprite(1150,420,10,150);
block10 = createSprite(1170,350,150,10);
block10 = createSprite(1100,320,10,65);




  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop(); 
if(keyDown("w")){
  lander.y=lander.y-5
}
if(keyDown("s")){
  lander.y=lander.y+5
}
if(keyDown("a")){
  lander.x=lander.x-5
}
if(keyDown("d")){
  lander.x=lander.x+5
}



lander.bounceOff(block1);
lander.bounceOff(block2);
lander.bounceOff(block3);
lander.bounceOff(block4);
lander.bounceOff(block5);
lander.bounceOff(block6);
lander.bounceOff(block7);
lander.bounceOff(block8);
lander.bounceOff(block9);
lander.bounceOff(block10);
lander.bounceOff(edges);





  if(lander.isTouching(block1) || lander.isTouching(block2) || lander.isTouching(block3) || lander.isTouching(block4)){
    lander.x=100
    lander.y=100


  }

  //fall down
 // vy +=g;
 // lander.position.y+=vy;
  drawSprites();
  if(lander.isTouching(moon)){
    lander.debug=true
    moon.debug=true
    textSize(50)
    text("congratulation!!!!you have completed the maze!!!!",width/2-100,height/2)
    lander.collide(moon)
  }

}


