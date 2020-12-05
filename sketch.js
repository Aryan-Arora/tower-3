const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var ground;
var ground2;
var yellowblock1;
var yellowblock2;
var yellowblock3;
var yellowblock4;
var yellowblock5;
var yellowblock7;
var yellowblock8;
var yellowblock9;
var yellowblock10;
var yellowblock11;
var yellowblock12;
var yellowblock13;
var yellowblock14;
var yellowblock15;
var redblock1;
var redblock2;
var redblock3;
var redblock4;
var redblock5;
var redblock6;
var redblock7;
var redblock8;
var redblock9;
var redblock10;
var redblock11;
var redblock12;
var redblock13;
var greenblock1;
var greenblock2;
var greenblock3;
var greenblock4;
var greenblock5;
var greenblock6;
var greenblock7;
var greenblock8;
var greenblock9;
var greenblock10;
var greenblock11;
var pinkblock1;
var pinkblock2;
var pinkblock3;
var pinkblock4;
var pinkblock5;
var pinkblock6;
var pinkblock7;
var pinkblock8;
var blueblock1;
var blueblock2;
var blueblock3;
var blueblock4;
var blueblock5;
var blueblock6;
var purpleblock1;
var purpleblock2;
var purpleblock3;
var purpleblock4;
var orangeblock1;
var orangeblock2;
var orangeblock3;
var orangeblock4;
var orangeblock5;
var orangeblock6;
var orangeblock7;
var polygon1;
var slingshot1;
var backgroundImage;
var score=0;



function preload(){

  getbackgroundImage();
}


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  stroke(255)


 
  
  ground=new Ground(300,600,250,10)
  yellowblock1=new yellowblock(200,585,20,20)
  yellowblock2=new yellowblock(220,585,20,20)
  yellowblock3=new yellowblock(240,585,20,20)
  yellowblock4=new yellowblock(260,585,20,20)
  yellowblock5=new yellowblock(280,585,20,20)
  yellowblock6=new yellowblock(300,585,20,20)
  yellowblock7=new yellowblock(320,585,20,20)
  yellowblock8=new yellowblock(340,585,20,20)
  yellowblock9=new yellowblock(360,585,20,20)
  yellowblock10=new yellowblock(380,585,20,20)
  yellowblock11=new yellowblock(400,585,20,20)
  yellowblock12=new yellowblock(540,365,20,20)
  yellowblock13=new yellowblock(560,365,20,20)
  yellowblock14=new yellowblock(580,365,20,20)
  yellowblock15=new yellowblock(600,365,20,20)
  redblock1=new redblock(210,565,20,20)
  redblock2=new redblock(230,565,20,20)
  redblock3=new redblock(250,565,20,20)
  redblock4=new redblock(270,565,20,20)
  redblock5=new redblock(290,565,20,20)
  redblock6=new redblock(310,565,20,20)
  redblock7=new redblock(330,565,20,20)
  redblock8=new redblock(350,565,20,20)
  redblock9=new redblock(370,565,20,20)
  redblock10=new redblock(390,565,20,20)
  redblock11=new redblock(550,345,20,20)
  redblock12=new redblock(570,345,20,20)
  redblock13=new redblock(590,345,20,20)
  greenblock1=new greenblock(220,545,20,20)
  greenblock2=new greenblock(240,545,20,20)
  greenblock3=new greenblock(260,545,20,20)
  greenblock4=new greenblock(280,545,20,20)
  greenblock5=new greenblock(300,545,20,20)
  greenblock6=new greenblock(320,545,20,20)
  greenblock7=new greenblock(340,545,20,20)
  greenblock8=new greenblock(360,545,20,20)
  greenblock9=new greenblock(380,545,20,20)
  greenblock10=new greenblock(560,325,20,20)
  greenblock11=new greenblock(580,325,20,20)
  pinkblock1=new pinkblock(230,525,20,20)
  pinkblock2=new pinkblock(250,525,20,20)
  pinkblock3=new pinkblock(270,525,20,20)
  pinkblock4=new pinkblock(290,525,20,20)
  pinkblock5=new pinkblock(310,525,20,20)
  pinkblock6=new pinkblock(330,525,20,20)
  pinkblock7=new pinkblock(350,525,20,20)
  pinkblock8=new pinkblock(370,525,20,20)
  blueblock1=new blueblock(260,505,20,20)
  blueblock2=new blueblock(280,505,20,20)
  blueblock3=new blueblock(300,505,20,20)
  blueblock4=new blueblock(320,505,20,20)
  blueblock5=new blueblock(340,505,20,20)
  blueblock6=new blueblock(570,305,20,20)
  purpleblock1=new purpleblock(270,485,20,20)
  purpleblock2=new purpleblock(290,485,20,20)
  purpleblock3=new purpleblock(310,485,20,20)
  purpleblock4=new purpleblock(330,485,20,20)
  orangeblock1=new orangeblock(290,465,20,20)
  orangeblock2=new orangeblock(310,465,20,20)
  ground2=new Ground(575,400,150,10)
  orangeblock3=new orangeblock(530,385,20,20)
  orangeblock4=new orangeblock(550,385,20,20)
  orangeblock5=new orangeblock(570,385,20,20)
  orangeblock6=new orangeblock(590,385,20,20)
  orangeblock7=new orangeblock(610,385,20,20)
  polygon1=new polygon(50,400,40,40)
  slingshot1=new slingshot(polygon1.body,{x:100,y:300})
}




function draw() {
  
 
  if(backgroundImage)
    background(backgroundImage) 
    Engine.update(engine);
    noStroke();20
    textSize(35)
    fill("yellow")
    text("Score  " + score, width-300, 50)
 
 
  
  
  
 
  ground.display();
  yellowblock1.display();
  yellowblock1.score();

  yellowblock2.display();
  yellowblock2.score();

  yellowblock3.display();
  yellowblock3.score();

  yellowblock4.display();
  yellowblock4.score();

  yellowblock5.display();
  yellowblock5.score();
  
  yellowblock6.display();
    yellowblock6.score();
  
    yellowblock7.display();
  yellowblock7.score();
  
  yellowblock8.display();
  yellowblock8.score();
  
  yellowblock9.display();
  yellowblock9.score();
  
  yellowblock10.display();
  yellowblock10.score();
 
  yellowblock11.display();
  yellowblock11.score();
 
  redblock1.display();
  redblock1.score();
 
  redblock2.display();
  redblock2.score();
 
  redblock3.display();
  redblock3.score();
 
  redblock4.display();
  redblock4.score();
 
  redblock5.display();
  redblock5.score();
 
  redblock6.display();
   redblock6.score();
 
   redblock7.display();
   redblock7.score();

  redblock8.display();
  redblock8.score();
  
  redblock9.display();
  redblock9.score();

  redblock10.display();
  redblock10.score();
  
  greenblock1.display();
  greenblock1.score();

  greenblock2.display();
  greenblock2.score();

  greenblock3.display();
  greenblock3.score();

  greenblock4.display();
  greenblock4.score();

  greenblock5.display();
 greenblock5.score();

  greenblock6.display();
greenblock6.display();

  greenblock7.display();
greenblock7.score();

  greenblock8.display();
greenblock8.score();

  greenblock9.display();
greenblock9.score();

  pinkblock1.display();
pinkblock1.score();

  pinkblock2.display();
pinkblock2.score();

  pinkblock3.display();
pinkblock3.score();

  pinkblock4.display();
pinkblock4.score();

  pinkblock5.display();
pinkblock5.score();

  pinkblock6.display();
pinkblock6.score();

  pinkblock7.display();
pinkblock7.score();

  pinkblock8.display();
pinkblock8.score();

  blueblock1.display();
blueblock1.score();

  blueblock2.display();
blueblock2.score();

  blueblock3.display();
blueblock3.score();

  blueblock4.display();
  blueblock4.score();
  
  blueblock5.display();
  blueblock5.score();
  
  purpleblock1.display();
 purpleblock1.score();  
  
  purpleblock2.display();
  purpleblock2.score();
  
  purpleblock3.display();
  purpleblock3.score();
  
  purpleblock4.display();
  purpleblock4.score();
  
  orangeblock1.display();
  orangeblock1.score();
  
  orangeblock2.display();
 orangeblock2.score();
 
  orangeblock3.display();
 orangeblock3.score();
 
  orangeblock4.display();
 orangeblock4.score();
 
  orangeblock5.display();
 orangeblock5.score();
 
  orangeblock6.display();
 orangeblock6.score();
 
  orangeblock7.display();
 orangeblock7.score();
 
  yellowblock12.display();
 yellowblock12.score();
 
  yellowblock13.display();
 yellowblock13.score();
 
  yellowblock14.display();
 yellowblock14.score();
 
  yellowblock15.display();
 yellowblock15.score();
 
  redblock11.display();
 redblock11.score();
 
  redblock12.display();
 redblock12.score();
 
  redblock13.display();
 redblock13.score();
 
  greenblock10.display();
 greenblock10.score();
 
  greenblock11.display();
 greenblock11.score();
 
  blueblock6.display();
  blueblock6.score();

  ground2.display();

  
 polygon1.display();
 slingshot1.display();
 
 keyPressed();
 drawSprites();
}

function mouseDragged(){
  
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot1.fly();
  
}

function keyPressed(){
  if(keyCode===32){
    slingshot1.attach(polygon1.body)
  }

}

async function getbackgroundImage(){
  var time;
  time=await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  //console.log(time)
  var timeJSON = await time.json();
  var datetime = timeJSON.datetime;
   var hour = datetime.slice(11,13);
   console.log(datetime)
  
   if(hour>=6 && hour<=19){
   backgroundImage=loadImage("screen-0.jpg")
   }
   else{
       backgroundImage=loadImage("night.jpg")
   }
  }
  