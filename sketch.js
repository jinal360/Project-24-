
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var   paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,585,1200,20);
	waste = new Paper(150, 525, 100);
	dustbin1 = new DustBin(600, 425, 170, 20);
	dustbin2 = new DustBin(525, 365, 20, 100);
	dustbin3 = new DustBin(650, 365, 20, 100);
}


function draw() {

  waste.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();

  drawSprites();
 
}



