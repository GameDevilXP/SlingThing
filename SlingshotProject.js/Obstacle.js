class Obstacle {
    constructor(x,y) {
        var options ={
            restitution: 10.0,
            density: 1.5,
            friction: 2,
        }
        this.body = Bodies.rectangle(x,y,20,50);
        this.width = 20;
        this.height = 50;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(234,123,123);
        rect(pos.x,pos.y,20,50);

    }
}