var tom, tomImg1, tomImg2, tomImg3;
var bg, bgImg;
var jerry, jerryImg1, jerryImg2, jerryImg3;

function preload() {
    bgImg = loadImage("images/garden.png");

    tomImg1 = loadImage("images/cat1.png");
    tomImg2 = loadImage("images/cat2.png");
    tomImg3 = loadImage("images/cat3.png");

    jerryImg1 = loadImage("images/mouse1.png");
    jerryImg2 = loadImage("images/mouse2.png");
    jerryImg3 = loadImage("images/mouse3.png");

}

function setup(){
    createCanvas(1000,800);
    
    bg = createSprite(500,400,10,10);
    bg.addImage(bgImg);

    tom = createSprite(900,700);
    tom.addImage(tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation("jerryDePé", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(255);
    if(tom.x - jerry.x < (tom.width - jerry.width) / 2){
        tom.velocityX= 0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage");
        jerry.scale = 0.15;
        jerry.changeAnimation("jerryLastImage");
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation("tomRunning", tomImg2);
      tom.changeAnimation("tomRunning");

      jerry.addAnimation("jerryTeasing", jerryImg2);
      jerry.frameDelay = 25;
      jerry.changeAnimation("jerryTeasing");
  }


}
