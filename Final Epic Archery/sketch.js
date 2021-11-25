const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player,playerBase,comp,compBase,canvas;
var playerArcher;
var board1;
var board2;
var playerArrows=[]
var noa=10//number of arrows
var score=0
//var angle
function preload() {
  backgroundImg = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  playerBase=new Base(200,350,180,150)
  player=new Player(250,playerBase.body.position.y-153,50,180)
  compBase=new Base(width-300,random(450,height-300),180,150)
  comp=new Player(width-280,compBase.body.position.y-153,50,180)
  playerArcher=new PlayerArcher(300,playerBase.body.position.y-170,120,120)
  board1=new Board(width-300,330,50,200);
  board2=new Board(width-550,height-300,50,200);


}



function draw() {
  background(backgroundImg);
  Engine.update(engine);
  playerBase.display()
 player.display() 
 compBase.display();
 comp.display();
 board1.display();
  board2.display();
playerArcher.display();
//i refers to the location of the items in array
  for(var i=0;i<playerArrows.length;i++)
  {
  if(playerArrows[i]!==undefined)
  {
  playerArrows[i].display();
  //error
  var board1Col=Matter.SAT.collides(board1.body,playerArrows[i].body)
  var board2Col=Matter.SAT.collides(board2.body,playerArrows[i].body)
  if(board1Col.collided || board2Col.collided)
  {
  console.log("collided")
  score+=5
  }
  var posX=playerArrows[i].body.position.x
  var posY=playerArrows[i].body.position.y
  if(posX>width || posY>height)
  {
  if(!playerArrows[i].isRemoved)
  {
  playerArrows[i].remove(i)
  }
  }
  }
  
  }
  
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
function keyPressed()
{
if(keyCode==32)
{
 if(noa>0)
 {
  var posX=playerArcher.body.position.x
  var posY=playerArcher.body.position.y
  var angle=playerArcher.body.angle
  var arrow=new PlayerArrow(posX,posY,100,10,angle)
  Matter.Body.setAngle(arrow.body,angle)
  playerArrows.push(arrow);
  noa-=1



 }
}

}
function keyReleased()
{
if(keyCode==32)
{
if(playerArrows.length)
{
  var angle=playerArcher.body.angle
playerArrows[playerArrows.length-1].shoot(angle)
}


}


}