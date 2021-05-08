var car, wall;
var speed, weight;
speed = random(55,90);
weight = random(400,1500);
deformation = 0.5 * weight * speed *speed/22500


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  //creating the car.
  car = createSprite(50,200,50,50);
  car.shapeColor="red";
  // creating wall
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor="green"; 
  

}

function draw() {
  //collision of the car 
  function isTouching(){
  if(wall.x-car.x < (car.width+wall)/2)
  {
    car.velocityX= 0;
    var deformation = 0.5*weight*speed*speed/22500;
    if(deformation>180)
    {
      car.shapeColor = COLOUR(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }
    if (deformation<180)
    {
      car.shapeColor=color(0,255,0);
    }
  }
}
  background(255,255,255);
    
  drawSprites();
  // giving velocity toe car.
  car.velocityX = speed();
  
}
