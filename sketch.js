const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  
 ground = new Base(0,height-10,width*2,20,"brown",true )
 leftwall = new Base(100,height/2,300,100,"brown",true)
 rightwall = new Base(width-100,height/2,300,100,"brown",true)

bridge = new Bridge(15,{x:width/2, y:height/2})
jointPoint = new Base(width-200,height/2,40,20,"yellow",true)

Composite.add(bridge, jointPoint)

jointLink = new Link(bridge,jointPoint)

}

function draw() {
  background(51);
  Engine.update(engine);
  ground.show()
  leftwall.show()
  rightwall.show()
  bridge.show()
}
