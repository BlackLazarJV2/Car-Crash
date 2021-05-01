var car, carImg, wall;

var speed, weight;
var text1, textLOL, textRed = "Crashed!", textYellow = "CLOSE! but Safe", textGreen = "Totally Safe!";



function setup() {
  createCanvas(1600,400);

  speed = Math.round(random(55, 90));
  weight = Math.round(random(400, 1500));

  car = createSprite(400, 200, 50, 50);
  car.shapeColor = color(255);
  car.velocityX = speed;

  wall = createSprite(1300, 200, 60, height/2)
  wall.shapeColor = "cyan"

  

}

function draw() {
  background(0);  

  textSize(20);
  text(speed, car.x +100, car.y);

  text1 = text(textLOL ,550,200)

  if(mousePressedOver(car)){
    speed = Math.round(random(55, 90));
    weight = Math.round(random(400, 1500));
    
    car.velocityX = speed;
    car.shapeColor = color(255);
    
  }

  if(wall.x-car.x < (car.width+wall.width)/2){
    
    car.velocityX = 0;
    var deformation =0.5 *weight *speed *speed/22509;

  if (deformation<180){

    car.shapeColor = color(255,0,0)
    textLOL = "CRASHED!";
    car.x = 400;
  }
  if(deformation<180 && deformation>100){

    car.shapeColor = color(230,230,0)
    textLOL = "CLOSE but safe!";
    car.x = 400;
  }

   if(deformation<100){

    car.shapeColor = color(0,255,0)
    textLOL = "TOTALLY SAFE!";
    car.x = 400;
   }
    }


  drawSprites();
}