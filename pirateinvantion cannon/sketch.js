const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas;
var tower;
var can;





function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  tower = new Tower(150,350,160,310);
can= new cannon(180,110,110,50,-PI/4);
  
  
}

function draw() {
  background(189);
  

  Engine.update(engine);
  tower.display();
  can.display();
 
}







