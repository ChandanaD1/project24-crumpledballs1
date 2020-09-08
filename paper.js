class Paper {
    constructor (x, y) {
        var options = {
            friction : 0.5,
            isStatic : false,
            restitution : 0.2,
            density : 1.2
        }

        this.body = Bodies.circle(x,y,30,options);
        this.radius = 30;

        World.add(world, this.body);
    }

    display() {
        push();
        fill("purple");
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse(0,0, this.radius, this.radius);
        pop();
    }
}