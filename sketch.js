
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, side1, side2, side3;

function preload()
{
	
}

function setup() {
	createCanvas(800 , 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Rect(400, 500, 800, 10);
	paper = new ball(50, 498, 20);
	side1 = new side(650, 490, 200, 10);
	side2 = new side(550 , 445, 10, 100);
	side3 = new side(750, 445, 10, 100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  paper.display();
  ground.display();
  side1.display();
  side2.display();
  side3.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body, paper.position,{x:85, y: -85});
	   
	 }
   }

