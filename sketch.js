const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var temp_arrow
var engine, world;
var rand
var box1, pig1;
var gameState="PLAY"
var sword2
var skullGroup,coinsGroup,appleGroup
var count=0
var score=0
var sword2,temp_arrow
function preload(){
    board=loadImage("wh.png")
    applei=loadImage("apple.png")
    skulli=loadImage("skull.png")
    coinsi=loadImage("coin.png")
    swordi=loadImage("sword.png")
    restarti=loadImage("restart.png");
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    spinner= createSprite(windowWidth/2,windowHeight/2-150);
    spinner.addImage(board);
    spinner.scale=1.2;
    sword=createSprite(windowWidth/2,windowHeight-90);
    sword.scale=0.3
    sword.addImage(swordi);
    restart=createSprite(windowWidth/2+20,windowHeight/2+100)
    restart.addImage(restarti)
    restart.scale=0.5
    restart.visible=false
   appleGroup= createGroup()
   coinsGroup= createGroup()
   skullGroup= createGroup()
   swordGroup=createGroup()

    
 

   
}

function draw(){
    background("cyan");
    if (gameState==="PLAY"){
        count=count+1
        textSize(25)
        text("Time Elapsed:" +(1000-count),windowWidth-300,50)
        text("Score:" +score,windowWidth-300,100)
         target1()
    console.log(rand)
   sword.x=mouseX
   if(coinsGroup.isTouching(sword2)){
       score=score+2
       coinsGroup.destroyEach()
   }
    if (keyDown("space")) {
         temp_arrow = createArrow();
        temp_arrow.addImage(swordi);
         temp_arrow.x = sword.x;    
      }
      if(count==1000){
          gameState="end"
      }
    }
    if (gameState=="end"){
        textSize(40)
        fill("coral")
        text("Try again",windowWidth/2-80,windowHeight/2)
        spinner.visible=false
        swordGroup.destroyEach()
        appleGroup.destroyEach()
        skullGroup.destroyEach()
        coinsGroup.destroyEach()
        sword.visible=false
        
restart.visible=true
    }
    if(mousePressedOver(restart)){
        gameState="PLAY"
        spinner.visible=true
        sword.visible=true
        count=0
        restart.visible=false
    }
        drawSprites();
    //console.log(mouseX,mouseY)
   
}
function createArrow() {
    sword2=createSprite(windowWidth/2,windowHeight-90);
    sword2.scale=0.3
    sword2.velocityY=-18
    sword2.lifetime=20  
    if (sword2.x>700 || sword2.x < 450){
        sword2.x=500
}
swordGroup.add(sword2)


    return sword2;
  }
function target1(){
    if(frameCount%60===0){
        rand=Math.round(random(1,3))
        if(rand==1){
        obstacle=createSprite(windowWidth/2+40,windowHeight/2-120,10,10)
        obstacle.rotationSpeed=3
        obstacle.lifetime=45
        obstacle.addImage(coinsi)
        obstacle.scale=0.2
        coinsGroup.add(obstacle)
        }
        if(rand==2){
            obstacle2=createSprite(windowWidth/2+40,windowHeight/2-120,10,10)
            obstacle2.rotationSpeed=3
            obstacle2.lifetime=45
            obstacle2.addImage(skulli)
            obstacle2.scale=0.3
            skullGroup.add(obstacle2)
            }
            if(rand==3){
                obstacle3=createSprite(windowWidth/2+40,windowHeight/2-120,10,10)
                obstacle3.rotationSpeed=3
                obstacle3.lifetime=45
                obstacle3.addImage(applei)
                obstacle3.scale=0.1
                appleGroup.add(obstacle3)
                }
     }
    
}
