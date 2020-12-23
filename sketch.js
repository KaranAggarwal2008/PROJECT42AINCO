function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  angleMode(DEGREES);
var hr =hour()
var mn = minute()
var sc= second()
//create Digital clock
if(hr<=24){
  textSize(50)
var hourDIGITALPM=text(hr+mn+sc+"PM",300,200);
var hourDIGITALPMHANDLE=map(hourDIGITALPM,0,60,0,360)
}else if(hr<=12){
  var hourDIGITALAM=text(hr+mn+sc+"AM",300,200);
var hourDIGITALAMHANDLE=map(hourDIGITALAM,0,60,0,360)
}
  drawSprites();
}