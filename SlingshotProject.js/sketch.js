const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var slingshot,projectile;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    slingshot = new Slingshot(projectile.body,{x: 200, y: 50})
    projectile = new Projectile(200,200);
    obstacle1 = new Obstacle(400,30);
    obstacle2 = new Obstacle(420,30);
    obstacle3 = new Obstacle(440,30);
    obstacle4 = new Obstacle(410,80);
    obstacle5 = new Obstacle(430,80);
    


}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    slingshot.display();
    projectile.display();
    obstacle1.display();
    obstacle2.display();
    obstacle3.display();
    obstacle4.display();
    obstacle5.display();
}

function mouseDragged() {
    Matter.Body.setPosition(projectile.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
    slingshot.fly();
}