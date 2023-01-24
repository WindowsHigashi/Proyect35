var backGround1;
var spaceShuttle,spaceShuttle1;
var holeImg;
var gameState=1;
var blackhole;
var hole;

function preload(){
  backGround1=loadImage("Space1.jpg");
  spaceShuttle=loadImage("Spaceshuttle.png");
  holeImg=loadImage("Blackhole.jpg");
};

function setup(){
  createCanvas(1500,700);
  
  spaceShuttle1 = createSprite(750,500,30,100);
  spaceShuttle1.addImage(spaceShuttle);
  spaceShuttle1.scale=0.5;

  blackhole= new Blackhole();

}

function draw(){
  background(backGround1);

  if (keyIsDown(UP_ARROW)) {
    spaceShuttle1.position.y -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    spaceShuttle1.position.y += 10;
  }
  if (keyIsDown(LEFT_ARROW)) {
    spaceShuttle1.position.x -= 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    spaceShuttle1.position.x += 10;
  }


  if(gameState===1){
    blackhole.show();
    
    /*if(){
      gameState=2;
    }*/

  }


if(gameState===2){

blackhole.hide();

}



  drawSprites();
}