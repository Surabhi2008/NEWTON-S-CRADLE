
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5,roof
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 bob1=new Bobs(130,450,40)
	 bob2=new Bobs(120,450,40)
	 bob2=new Bobs(110,450,40)
	 bob2=new Bobs(100,450,40)
	 bob2=new Bobs(90,450,40)
	 rope1 = new Rope(bob1.body,{x:130, y:450});
	 rope2 = new Rope(bob1.body,{x:120, y:450});
	 rope3 = new Rope(bob1.body,{x:110, y:450});
	 rope4 = new Rope(bob1.body,{x:100, y:450});
	 rope5 = new Rope(bob1.body,{x:90, y:450});
	 roof  = new Roof(110,300)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  roof.display()
  drawSprites();
 
}



