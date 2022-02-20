
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundimage;
var cannon; 
var secadora1, secadora2, secadora3;


function preload (){
  backgroundimage = loadImage ("pinkground1.jpeg");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  cannon = new Cannon(1275, 600, 200, 200,15);
  secadora1 = new secadora (100,150,150,100);
  secadora2 = new secadora (100,350,150,100);
  secadora3 = new secadora (100,550,150,100);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 15;

}


function draw() 
{
  background(51);
  image(backgroundimage,0,0,width,height);
  Engine.update(engine);
  cannon.display();
  secadora1.display ();
  secadora2.display ();
  secadora3.display ();
}
function windowResized (){
 resizeCanvas (windowWidth,windowHeight);
 }
