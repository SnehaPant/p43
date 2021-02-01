const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var hr,mn,sc
var scAngle
var hrAngle
var mnAngle

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 
}

function draw() {
  background("black"); 
  Engine.update(engine); 
  hr=hour()
  mn=minute()
 sc=second() 
translate(400,200)
rotate(-90)
  scAngle=map(sc,0,60,0,360)
  hrAngle=map(hr%12,0,12,0,360)
  mnAngle=map(mn,0,60,0,360)
  noFill()
  push()
  rotate(scAngle)
  stroke("blue")
  strokeWeight(7)
 
  line(0,0,100,0)
  pop()

  push()
  rotate(hrAngle)
  stroke("red")
  strokeWeight(7)
 
  line(0,0,50,0)
  pop()

  push()
  rotate(mnAngle)
  stroke("green")
  strokeWeight(7)
 
  line(0,0,75,0)
  pop()
  strokeWeight(7)
  stroke("blue")
  arc(0,0,300,300,0,scAngle)
  stroke("red")
  arc(0,0,260,260,0,hrAngle)
  stroke("green")
  arc(0,0,240,240,0,mnAngle)
  drawSprites();
}