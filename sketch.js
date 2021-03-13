var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   
    surface1 = createSprite(0,580,360,30)
    surface1.shapeColor = "black"
   
    surface2 = createSprite(295,580,200,30)
    surface2.shapeColor = "blue"

    surface3= createSprite(515,580,200,30)
    surface3.shapeColor = "pink"

    surface4 = createSprite(740,580,220,30)
    surface4.shapeColor = "red"

    //create 4 different surfaces

    box = createSprite(random(20,750),100,40,40);
    box.shapeColor = "white" ;
    box.velocityX=2
    box.velocityY=3
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
box.bounceOff(edges);



if(surface1.isTouching(box) && box.bounceOff(surface1) ){
box.shapeColor = "black";
music.play()
}

if(surface2.isTouching(box) && box.bounceOff(surface2) ){
    box.shapeColor = "blue";
    music.stop()
    }
  
if(surface3.isTouching(box) && box.bounceOff(surface3) ){
        box.shapeColor = "pink";
        music.play()
        }
        
if(surface4.isTouching(box) && box.bounceOff(surface4) ){
            box.shapeColor = "red";
            music.play()
          
        }
                  
    
drawSprites();


    //add condition to check if box touching surface and make it box
}
