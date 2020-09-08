var ground, Bbin, Lbin, Rbin, paper;

function setup() {
    createCanvas(1200,700);

    ground = createSprite(600,650,1200,20);
    ground.shapeColor = "green";

    Bbin = createSprite(1000,635,90,15);
    Bbin.shapeColor = "red";

    Lbin = createSprite(950,550,15,185);
    Lbin.shapeColor = "red";

    Rbin = createSprite(1050,550,15,185);
    Rbin.shapeColor = "red";

    paper = createSprite(200,625,30,30);
    paper.shapeColor = "white";
}

function draw() {
    background("black");
    fill("white")

    paper.collide(ground);
    paper.collide(Bbin);
    paper.collide(Rbin);
    paper.collide(Lbin);

    if(keyDown("up")) {
        paper.velocityX = 9;
        paper.velocityY = -6;
    }

    if(keyDown("down")) {
        paper.velocityX = 0;
        paper.velocityY = 10;
    }

    if(paper.isTouching(Bbin)) {
        textSize(30);
        text("YOU WIN",550,350);
    }

    drawSprites();
}

