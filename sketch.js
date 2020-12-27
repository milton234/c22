// 1. Engine, 2. World, 3. Objects or the bodies in the world
// Matter.js

// Matter.Engine, Matter.World, Matter.Bodies


// namespace

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myRect;

var myEngine,myWorld;

var ball

function setup() {
  createCanvas(500,500);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  // create the rectangluar body

  var options = {
    isStatic : true
  }

  ground = Bodies.rectangle(250,500,500,50, options);

  World.add(myWorld, ground);
  console.log (ground);
   var ballOptions={
     restitution:1
   }
  ball= Bodies.circle(100,250,20,ballOptions)
  World.add(myWorld,ball)

  
}

function draw() {
  background(0);
  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(250,250,50,50);
  // draw the rectangular body
   
  rect(ground.position.x, ground.position.y, 500,50);
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y,20)
}