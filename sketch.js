var thikness, wall;
var speed,bullet, weight;


function setup() {
  createCanvas(1600,400);


  bullet= createSprite(50, 200, 50, 50);
  
  

  speed=random(55,90);
  weight=random(400,1500);

  bullet.velocityX = speed;

  thickness=random(22,88);

  wall=createSprite(1200,200,thickness,height);

  speed=random(233,321);
  weight=random(30,52);

  bullet.velocityX=speed;
  
  
}

function draw() {

  background("black");  

  if (bullet.x-bullet.x < (bullet.width+wall.width)/2) {
  bullet.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22509;
  if (deformation>180) {
  bullet.shapeColor = "red";
  }
  if (deformation<180 && deformation>100) {
  bullet.shapeColor = "yellow";
  }
  if (deformation<100) {
  bullet.shapeColor = "green";
  }

if(hascollided(bullet,wall)){

bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10)

{
  wall.shapeColor=color(255,0,0);
}

if(damage<10){
wall.shapeColor=color(0,255,0);

}


}

} 



  drawSprites();
}

function  hascollided(lwall,lbullet){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>-wallLeftEdge){
    return true;
  }
  return false;}