function setup() {
  createCanvas(625, 350);
  bg = loadImage("achtergrond.jpg");
  nn = loadImage("vis.png");
  druppelgeluid = loadSound("druppelgeluid.mp3");
}

var score = 0;
var speed = 3;
var screen = 0;
var highscore = 0;
var bg;
var vissen = [];
var vierkant = {mouseX, height - 10, 50, 30};

class Vis {
  constructor(x, y) {
    this.x = random(width);
    this.y = 0;
    this.w = 30;
    this.h = 30;

  }
  draw() {
    fill(0);
    image(nn, this.x, this.y, this.w, this.h);
    this.y += 5;
  }

  checkCollision() {
    if (this.y > height - 10 && this.x > mouseX - 30 && this.x < mouseX + 30) {
      y = -20
      speed += .5
      score += 1
      druppelgeluid.play()
      if (score > highscore)
        highscore = score
    }
  }

}

class vierkant {

}

function draw() {
  background(0)
  if (screen == 0) {
    startscherm()
  } else if (screen == 1) {
    gameOn()
  } else if (screen == 2) {
    eindscherm()
  }
}

function gameOn() {

  background(bg);
  text("score = " + score, 30, 40)
  fill(0);
  text("highscore = " + highscore, 40, 60)


  if (frameCount % 100 == 0) {
    vissen.push(new Vis());
  }

  vissen.forEach((b) => {
    b.draw();
    b.checkCollision();
  });

  rectMode(CENTER)
  rect(mouseX, height - 10, 50, 30)
  this.y += speed;
  if (this.y > height) {
    screen = 2
  }

  if (this.y == -20) {
    pickRandom();
  }

}

function startscherm() {
  background('#fae');
  textAlign(CENTER);
  textFont('Georgia');
  fill(0, 102, 153);
  text('Welkom bij het spel "ÇATCHING BALLS"!', width / 2, height / 2)
  text('Klik om het spel te starten', width / 2, height / 2 + 20);
}
function eindscherm() {
  background('#fae')
  textAlign(CENTER);
  text('GAME OVER', width / 2, height / 2)
  text("SCORE = " + score, width / 2, height / 2 + 20)
  text('Klik de muis om nog een keer te spelen', width / 2, height / 2 + 40);
}
function pickRandom() {
  this.x = random(20, width - 20)
}

function mousePressed() {
  if (screen == 0) {
    screen = 1
  }
  else if (screen == 2) {
    screen = 0
  }
}