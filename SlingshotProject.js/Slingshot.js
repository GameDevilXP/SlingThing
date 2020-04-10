class Slingshot {
    constructor(bodyA,pointB) {
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.07,
            length: 5
        }
        this.pointB = pointB;
        this.slingshot = Constraint.create(options);
    }

    fly() {
        this.slingshot.bodyA = null;
    }

    display() {
        if(this.slingshot.bodyA) {
            var bodyApos = this.slingshot.bodyA.position;
            var pointB = pointB;
            push();
            stroke(154,33,151);
            strokeWeight(7);
            line(bodyApos.x,bodyApos.y,pointB.x,pointB.y);
            pop();
        }
    }
}