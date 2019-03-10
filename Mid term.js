function setup() {
  createCanvas(500, 500);
}

var ball = 100;
var ballSpeed = 1;
var ballChangeX = ballSpeed;

var ball2 = 100;
var ballSpeed2 = 2;
var ballChangeX2 = ballSpeed2;

var ball3 = 50;
var ballSpeed3 = 1.5;
var ballChangeX3 = ballSpeed3;

var ball4 = 200;
var ballSpeed4 = 0.7;
var ballChangeX4 = ballSpeed4;

var ball5 = 200;
var ballSpeed5 = 0.5;
var ballChangeX5 = ballSpeed5;

var ball6 = 200;
var ballSpeed6 = 1.2;
var ballChangeX6 = ballSpeed6;

function draw() {
  background(84,116,169);
  fill(244,247,252);
  stroke(244,247,25);
  ellipse(ball, height/2, 100);
  ellipse(ball2, height/4, 75);
  ellipse(ball3, 350, 150);
  ellipse(ball4, 50,100);
  ellipse(ball5, 150,40);
  ellipse(ball6, 450,100);

  ball = ball + ballChangeX;
  ball2 = ball2 + ballChangeX2;
  ball3 = ball3 + ballChangeX3;
  ball4 = ball4 + ballChangeX4;
  ball5= ball5 + ballChangeX5;
  ball6= ball6 + ballChangeX6;

  // Check if ball is off right hand side of screen
  if (ball >= width) {
    ballChangeX = -ballSpeed;
  }
  if (ball2 >= width) {
    ballChangeX2 = -ballSpeed2;
  }
  if (ball3 >= width) {
    ballChangeX3 = -ballSpeed3;
  }
    if (ball4 >= width) {
    ballChangeX4 = -ballSpeed4;
  }
    if (ball5 >= width) {
    ballChangeX5 = -ballSpeed5;
  }
      if (ball6 >= width) {
    ballChangeX6 = -ballSpeed6;
  }
  // Check if ball is off left hand side of screen
  if (ball <= 0) {
    ballChangeX = ballSpeed;
  }
  if (ball2 <= 0) {
    ballChangeX2 = ballSpeed2;
  }
  if (ball3 <= 0) {
    ballChangeX3 = ballSpeed3;
  }
    if (ball4 <= 0) {
    ballChangeX4 = ballSpeed4;
  }
    if (ball5 <= 0) {
    ballChangeX5 = ballSpeed5;
  }
      if (ball6 <= 0) {
    ballChangeX6 = ballSpeed6;
  }
}
