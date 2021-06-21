var sea,seaImg;
var ship,shipImg1;
function preload(){

  seaImg=loadImage("sea.png");
  shipImg1=loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");

}

function setup(){
  createCanvas(400,400);
  ship=createSprite(50,40,100,10)
  ship.addAnimation("movingShip",shipImg1)
  sea=createSprite(400,400,400,20);
  sea.addImage(seaImg);
  sea.velocityX=-3;



}

function draw() {
  background("blue");
 

  if(sea.x<0){
    sea.x=sea.width/2
  }
}