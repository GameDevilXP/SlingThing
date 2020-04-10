class Projectile {
    constructor(x,y) {
        var options ={
            restitution: 1.0,
            density: 7.0,
            friction: 6.0,
        }
        this.body = Bodies.rectangle(x,y,20,20);
        this.width = 20;
        this.height = 20;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(angle);
        fill(234,23,123);
        strokeWeight(7);
        stroke(123,123,150);
        rectMode(CENTER);
        pop();
    }
}