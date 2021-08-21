const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
  createCanvas(1200, 700);
  engine = Engine.create();
  world = engine.world;

  ball = new Paper(100, 600, 10);
  dustbin3 = new Dustbin(950, 630, 285, 25);
  dustbin1 = new Dustbin(1100, 570, 25, 120);
  dustbin2 = new Dustbin(800, 570, 25, 120);
  ground = new Ground(600, 650, 1100, 15);
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  dustbin1.display();
  ball.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body, ball.body.position, { x: 17, y: -20 });
  }
}
