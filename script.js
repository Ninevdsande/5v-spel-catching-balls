function setup() {
	createCanvas(600, 400);
}

var score = 0;
var speed = 3;
var screen = 1;
var y = -20;
var x = 200;

function draw() {
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
