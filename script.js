function setup() {
	createCanvas(625, 350);
  bg = loadImage("achtergrond.jpg");
  nn = loadImage("vis.png");
  druppelgeluid = loadSound("druppelgeluid.mp3");
}


var score = 0;
var speed = 3;
var screen = 0;
var y = -20;
var x = 200;
var  highscore = 0;
var bg;

function draw() {
  background(0)
	if(screen == 0){
    startscherm()
  }else if(screen == 1){
  	gameOn()
  }else if(screen==2){
  	eindscherm()
  }	
}
function startscherm(){
    background('#fae');
		textAlign(CENTER);
    textFont('Georgia');
    fill(0, 102, 153);
		text('Welkom bij het spel "ÇATCHING BALLS"!', width / 2, height / 2)
		text('Klik om het spel te starten', width / 2, height / 2 + 20);
		reset();
}

function gameOn(){
  background(bg);
   text("score = " + score, 30,40)
   fill(0);
   text("highscore = " + highscore,40,60)
   fill(0);
   image(nn,x,y,30,30)
   rectMode(CENTER)
   rect(mouseX,height-10,50,30)
	y+= speed;
  if(y>height){
  	screen =2
	 }
  if(y>height-10 && x>mouseX-30 && x<mouseX+30){
	y=-20
  speed+=.5
  score+= 1
  druppelgeluid.play()
    if(score> highscore)
      highscore = score
  }
	if(y==-20){
  	pickRandom();
  }
}

function eindscherm(){
		background('#fae')
		textAlign(CENTER);
		text('GAME OVER', width / 2, height / 2)
  	text("SCORE = " + score, width / 2, height / 2 + 20)
		text('Klik de muis om nog een keer te spelen', width / 2, height / 2 + 40);
}
function pickRandom(){
	x= random(20,width-20)
}
   


function reset(){
	  score=0;
  	speed=2;
  	y=-20;
}

function mousePressed(){
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
}
