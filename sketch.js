var car, wall, speed ,weight;
var deformation;
function setup() {
  createCanvas(1000,500);


car=createSprite(50,200,20,20);
wall= createSprite(800,250,50,250);
}

function draw() {
  background(0); 
 
  speed=random(55,90)
  weight=random(400,1500)
  car.velocityX=speed;

  if(wall.width/2+car.width/2>wall.x-car.x){
    car.velocityX=0;
    deformation=(0.5*speed*speed*weight)/22500;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation>180&&deformation>100){
      car.shapeColor=color(230,230,100);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }


  drawSprites();
}