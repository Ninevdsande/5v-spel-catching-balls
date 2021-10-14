function setup() {
  createCanvas(625, 350);
  bg = loadImage("achtergrond.jpg");
  nn = loadImage("vis.png");
  druppelgeluid = loadSound("druppelgeluid.mp3");
  player = new Vierkant();
}

var score = 0;
var speed = 3;
var screen = 0;
var highscore = 0;
var bg;
var vissen = [];


class Vis {
  constructor(x, y, w, h) {
    this.x = random(width);
    this.y = 0;
    this.w = 30;
    this.h = 30;
  

    if (score > 5) {
      this.vy = 7;
    }
    if (score > 10) {
      this.vy = 9;
    }
    if (score > 35){
      this.vy = 13
    }
    else {
      this.vy = 5;
    }
  }

  draw() {
    fill(0);
    image(nn, this.x, this.y, this.w, this.h);
    this.y += this.vy;

  }

  checkCollision() {
    if (player.y < this.y) {
      if (player.x + player.w > this.x && player.x < this.x + this.w) {

        druppelgeluid.play()
        score += 1
        if (score > highscore)
          highscore = score

        let idx = vissen.indexOf(this);
        vissen.splice(idx, 1);
      }
    }

    if (this.y > height) {
      screen = 2;
    }
  }

}

class Vierkant {
  constructor() {
    this.x = 100;
    this.y = height - 10;
    this.w = 50;
    this.h = 10;
  }

  draw() {
    this.x = mouseX;
    rect(this.x, this.y, this.w, this.h);
  }
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
  text("Score = " + score, 30, 40)
  fill(0);
  text("Highscore = " + highscore, 40, 60)
  text("Beweeg de muis om de vissen te vangen!", 300, 60)

  player.draw();

  if (frameCount % 100 == 0) {

    vissen.push(new Vis());

  }
  if (frameCount % 100 == 50) {

    vissen.push(new Vis());
  }

  vissen.forEach((b) => {
    b.draw();
    b.checkCollision();
  });

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
  text('Welkom bij het spel "ÇATCHING FISH"!', width / 2, height / 2)
  text('Klik om het spel te starten', width / 2, height / 2 + 20);
}
function eindscherm() {
  background('#fae')
  textAlign(CENTER);
  textFont('Georgia');
  fill(0, 102, 153);
  text('GAME OVER', width / 2, height / 2)
  text("SCORE = " + score, width / 2, height / 2 + 20)
  text("HIGHSCORE =" + highscore, width / 2, height / 2 + 40)
  text('Klik de muis om nog een keer te spelen', width / 2, height / 2 + 60);
}
function pickRandom() {
  this.x = random(20, width - 20)
}

function mousePressed() {
  if (screen == 0) {
    screen = 1;
  }
  else if (screen == 2) {
    vissen = [];
    score = 0;
  
    screen = 0;

  }
}