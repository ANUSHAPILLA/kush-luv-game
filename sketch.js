const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rand
var box1, pig1;
function preload(){
    board=loadImage("wh.png")
    applei=loadImage("apple.png")
    skulli=loadImage("skull.png")
    coinsi=loadImage("coins.png")
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    spinner= createSprite(windowWidth/2,windowHeight/2-150);
    spinner.addImage(board)
    spinner2= createSprite(windowWidth/2-400,windowHeight/2-150);
    spinner2.addImage(board)
    spinner3= createSprite(windowWidth/2+400,windowHeight/2-150);
    spinner3.addImage(board)
    

    
 

   
}

function draw(){
    background("white");
   
    Engine.update(engine);
    spinner.rotationSpeed=5
    spinner2.rotationSpeed=5
    spinner3.rotationSpeed=5
    target1()
    console.log(rand)

    drawSprites();
    //console.log(mouseX,mouseY)
   
}

function target1(){
    if(frameCount%20===0){
        rand=Math.round(random(1,3))
        if (rand===1){
            apple= createSprite(672,180);
            apple.addImage(applei)
            apple.scale=0.1
            apple.rotationSpeed=5
            apple.lifetime=15
        }
        if (rand===2){
            coins= createSprite(672,180);
            coins.addImage(coinsi)
            coins.scale=0.1
            coins.lifetime=15
        }
        if (rand===3){
            skull= createSprite(672,180);
            skull.addImage(skulli)
            skull.scale=0.1
            skull.lifetime=15
        }
   
    }
}