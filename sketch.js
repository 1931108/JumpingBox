var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600)
    surface1= createSprite(0,580,360,30)
    surface1.shapeColor="pink"

    surface2= createSprite(295,580,200,30)
    surface2.shapeColor="yellow"

    surface3= createSprite(515,580,200,30)
    surface3.shapeColor="green"

    surface4= createSprite(740,580,220,30)
    surface4.shapeCeolor="blue"

    box=createSprite(random(20,730),100,40,40)
    box.shapeColor = "white"
box.velocityX=4
box.velocityY=9
    

}
function draw() {
    background("black");
    //create edgeSprite
 
  edges=createEdgeSprites()
  if(surface1.isTouching(box)&&box.bounceOff(surface1))
{
    box.shapeColor="blue"
    music.play()
}
if(surface2.isTouching(box)){
    box.shapeColor="red"
    box.velocityX=0
    box.velocityY=0
    music.stop()
}
if(surface3.isTouching(box)&&box.bounceOff(surface3))
{
    box.shapeColor="blue"
    music.play()
}
if(surface4.isTouching(box)&&box.bounceOff(surface4))
{
    box.shapeColor="blue"
    music.play()
}
drawSprites()
}