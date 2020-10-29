var car, wall;
var speed, weight;
function setup() {
  createCanvas(1600,400);
  speed = Math.round(random(55, 90))
  weight = random(400, 1500);
  car = createSprite(50, 200, 50, 50);
  car.depth = 10;
  wall = createSprite(1500, 200, 60, height/2)
  wall.shapeColor = rgb(80, 80, 80);
 wall.depth = 1;
  car.velocityX = speed;
  
}

function draw() {
  background(rgb(50, 1150, 200));
  if( wall.x - car.x < (wall.width/2 + car.width/2)){
    car.velocityX = 0;
    var deformation = Math.round((0.5 * speed * weight * weight)/225000)
    console.log(deformation);
   if(deformation > 180){
     car.shapeColor = color(255, 0, 0);
   }else if(deformation > 100 && deformation < 180){
     car.shapeColor =color(230, 230, 0)
   } else if( deformation < 100){
     car.shapeColor = color(0, 255, 0)
   }

  }
  
  drawSprites();
}