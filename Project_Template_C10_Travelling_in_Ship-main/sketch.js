var shipMoving;
var water;
var ship;
var waterImage,edges;
function preload(){
shipMoving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
waterImage = loadImage("sea.png");
}

function setup(){
  createCanvas(600,400);
  water = createSprite(200,180,400,20);
  water.addImage(waterImage);
  edges = createEdgeSprites();
  ship = createSprite(100,260,20,50);
  ship.addAnimation("moving",shipMoving);
  ship.scale = 0.2;
  ship.x = 100;
  
  
}

function draw() {
  background("blue");
  water.velocityX = -3;
  ship.collide(edges[3]);
  if(water.x < 0) {
    water.x = water.width / 2;
  }
  console.log(ship.y);
  drawSprites();
}