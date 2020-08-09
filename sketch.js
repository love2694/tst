const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var object;
var o2;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();

  world=engine.world;
  var div={
    isStatic:true
  }
 
o2=Bodies.rectangle(100,100,50,60,div);
World.add(world,o2);

 var options={
   isStatic:true
 }

  object=Bodies.rectangle(200,200,50,50,options);
  World.add(world,object);
}

function draw() {
  background(0);  
  Engine.update(engine);
 rect(o2.position.x,o2.position.y,50,60);
  rect(object.position.x,object.position.y,50,50);
  drawSprites();
}