//name your variables
var x = 0
var speed = 3


//setup your canvas
function setup() {
  createCanvas(400,400);
  // put setup code here
}

//draw function
function draw() {
  background(20,0,300);

  fill(100,100,100)
  ellipse(x,120,120,120);


  if (x > width){
    speed = - 3;
  }
  x = x + speed
}
