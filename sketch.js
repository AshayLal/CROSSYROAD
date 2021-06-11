var canvas, backgroundImage;


var game
var crosser
var car1, car2, car3,road1,road2;
var car1image,car2image,car3image,road1image,road2image;




function preload(){
  car1image=loadImage("Pngitem_5234935.png")
  car2image=loadImage("ClipartKey_140330.png")
  car3image=loadImage("6623972.png")
  road1image=loadImage("Road left side.png")
  road2image=loadImage("Road right side.png")

crosserImage= loadImage("animated-boy-image-0053.gif")
backgroundImage=loadImage("Road.png")

}

function setup() {
createCanvas(600,400)
 crosser=createSprite(300,350,50,80);
 crosser.addImage("animated-boy-image-0053.gif",crosserImage)



}



function draw() {
background(backgroundImage)

road1=createSprite(100,200)
road2=createSprite(200,400)

crosser.scale= 0.5;

drawSprites();
}
