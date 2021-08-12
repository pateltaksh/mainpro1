var background_01,background_02,BG;
var bomb_a,bomb_b,bomb_c,BombGroup;
var Bomb;
var player,P
var enemy,E;
var gameState="PLAY";
var score=0;
var C,c2,c3,c4,c5,c6
var cGroup,c2Group,c3Group,c4Group,c5Group;
var bgSong;


function preload(){
background_01 = loadImage("BG/BG.png");
player = loadAnimation("player/Run__000.png","player/Run__001.png","player/Run__002.png","player/Run__003.png","player/Run__004.png","player/Run__005.png","player/Run__006.png","player/Run__007.png","player/Run__008.png","player/Run__009.png")
player.frameDelay=2;
enemy5=loadAnimation("enemy/5/5_enemies_1_run_000.png","enemy/5/5_enemies_1_run_001.png","enemy/5/5_enemies_1_run_002.png","enemy/5/5_enemies_1_run_003.png","enemy/5/5_enemies_1_run_004.png","enemy/5/5_enemies_1_run_005.png","enemy/5/5_enemies_1_run_006.png","enemy/5/5_enemies_1_run_007.png","enemy/5/5_enemies_1_run_008.png","enemy/5/5_enemies_1_run_009.png","enemy/5/5_enemies_1_run_010.png","enemy/5/5_enemies_1_run_011.png","enemy/5/5_enemies_1_run_012.png","enemy/5/5_enemies_1_run_013.png","enemy/5/5_enemies_1_run_014.png","enemy/5/5_enemies_1_run_015.png","enemy/5/5_enemies_1_run_016.png","enemy/5/5_enemies_1_run_017.png","enemy/5/5_enemies_1_run_018.png","enemy/5/5_enemies_1_run_019.png")
enemy5.frameDelay=2;
bomb_a=loadImage("bombs/Bomb_A.png");
bomb_b=loadImage("bombs/Bomb_B.png");
bomb_c=loadImage("bombs/Bomb_C.png");
C = loadImage("Collectable Object/Chest_01_UnLocked.png");
c2=loadAnimation("Collectable Object/Coin_01.png","Collectable Object/Coin_02.png","Collectable Object/Coin_03.png","Collectable Object/Coin_04.png","Collectable Object/Coin_05.png","Collectable Object/Coin_06.png");
c3=loadImage("Collectable Object/Diamond.png");
c4=loadImage("Collectable Object/life.png");
c5=loadImage("Collectable Object/Star.png");
bgSong=loadSound("song/bgsong.mp3");


}
function setup() {
  createCanvas(windowWidth,windowHeight);
  Background=createSprite(650,100);
  Background.addImage("background_01",background_01);
  Background.velocityX=-5;
  
  
  bgSong.play(); 
  loop();
  P = createSprite(250,500);
  P.addAnimation("player",player);
  P.scale=0.2;
  
  ground=createSprite(windowWidth/2,windowHeight-100,windowWidth,20);
  ground.visible=false;
  E=createSprite(100,490);
  E.addAnimation("enemy5",enemy5);
  E.scale=0.5;
  bombGroup = new Group();
  cGroup= new Group();
  c2Group= new Group();
  c3Group= new Group();
  c4Group= new Group();
  c5Group= new Group();
  
}

function draw() {
  
  background(255);
  drawSprites();
  console.log(Background.x)
  fill("white")
  textSize(30);
  text("score "+score,windowWidth-150,100)
  if (Background.x < windowWidth-700&&Background.x>0){
    Background.x = Background.width/2 ;
  }
  if(gameState==="PLAY"){
    if(P.isTouching(cGroup)){
      score=score+10
      cGroup.destroyEach();
    }
    if(P.isTouching(c2Group)){
      score=score+2
      c2Group.destroyEach();
    }
    if(P.isTouching(c3Group)){
      score=score+12
      c3Group.destroyEach();
    }
    if(P.isTouching(c5Group)){
      score=score+4;
      c5Group.destroyEach();
    }
    
    

  
  
 
  if(keyDown("space")){
P.y=P.y-40;

  }
  P.y=P.y+20
 
  SpawnCollectable();
  if(P.isTouching(bombGroup)){
gameState="END"

  }
  
}
else{
RESET();


}
  P.collide(ground);
  
  
  spawnBomb();
  
}
function spawnBomb(){
  if(frameCount%120===0){
    bomb=createSprite(windowWidth,50);
   var x=Math.round(random(1,3));
   if(x==1){
    bomb.addImage("bomb_a",bomb_a);

   }
   else if(x==2){
    bomb.addImage("bomb_b",bomb_b);
   }
   else if(x==3){
    bomb.addImage("bomb",bomb_c);
   }
   
    bomb.y=Math.round(random(400,600));
    bomb.velocityX=-8;
    bomb.lifetime=800; 
    bomb.scale=0.5;
    bombGroup.add(bomb);
  }

}
function RESET(){




}
function SpawnCollectable(){
  if(frameCount%100===0){
    var collectable=createSprite(windowWidth,50);

   var x=Math.round(random(1,5));
   if(x==1){
    collectable.addImage("C",C);
    collectable.y=Math.round(random(300,500));
    collectable.velocityX=-9;
    collectable.lifetime=800; 
    collectable.scale=0.5;
    cGroup.add(collectable);
   }
   else if(x==2){
    collectable.addAnimation("c2",c2);
    collectable.y=Math.round(random(300,500));
    collectable.velocityX=-9;
    collectable.lifetime=800; 
    collectable.scale=0.5;
    c2Group.add(collectable);
   }
   else if(x==3){
    collectable.addImage("c3",c3);
    collectable.y=Math.round(random(300,500));
    collectable.velocityX=-9;
    collectable.lifetime=800; 
    collectable.scale=0.5;
    c3Group.add(collectable);
   }
   else if(x==4){
    collectable.addImage("c4",c4);
    collectable.y=Math.round(random(300,500));
    collectable.velocityX=-9;
    collectable.lifetime=800; 
    collectable.scale=0.5;
    c4Group.add(collectable);
   }
   else if(x==5){
    collectable.addImage("c5",c5);
    collectable.y=Math.round(random(300,500));
    collectable.velocityX=-9;
    collectable.lifetime=800; 
    collectable.scale=0.5;
    c5Group.add(collectable);
   }
   
    
    
  }




}