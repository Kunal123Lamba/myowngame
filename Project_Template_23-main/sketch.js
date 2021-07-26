const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var rock1
var rock2
var per1
var per2


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
  rock1 = new rock(150,500,160,310);
  rock2 = new rock(1200,500,160,310);
  per1 = new per(150,330,100,100);
  per2 = new per(1200,330,100,100);

	
   //Create Player Base and Computer Base Object


 }

function draw() {

  background(180);

  Engine.update(engine);
  rock1.display();
  rock2.display();
  per1.display();
  per2.display();
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 


   //display Player and computerplayer


}
