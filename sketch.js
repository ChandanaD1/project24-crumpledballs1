const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1, bin2, bin3;
var paper1;
var ground1;

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(600,650,1200,20);

	bin1 = new Dustbin(750,645,200,20);
	bin2 = new Dustbin(650,550,20,200);
	bin3 = new Dustbin(850,550,20,200);

	paper1 = new Paper(100,645,30);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);

	Engine.update(engine);

	ground1.display();
    
    bin1.display();
	bin2.display();
	bin3.display();

    paper1.display();
  
	drawSprites();
 
}

function keyPressed () {
    if(keyCode === UP_ARROW) {
        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:150, y:-200})
    }
}
