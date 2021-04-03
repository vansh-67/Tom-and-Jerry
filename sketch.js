var bg,bg_img;
var cat,cat_ani,cat_img1,cat_img2;
var mouse,mouse_ani,mouse_img1,mouse_img2;


function preload() {
    bg_img = loadImage("images/garden.png");
    cat_img1 = loadImage("images/cat1.png");
    cat_img2 = loadImage("images/cat4.png");
    cat_ani = loadAnimation("images/cat2.png","images/cat3.png");
    mouse_img1 = loadImage("images/mouse1.png");
    mouse_img2 = loadImage("images/mouse4.png");
    mouse_ani = loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(700,565);
    
    bg = createSprite(320,283,10,10);
    bg.addImage("bg",bg_img);
    bg.scale = 0.8;

    cat = createSprite(535,460,100,10);
    cat.addImage("cat1",cat_img1);
    cat.addAnimation("cat2",cat_ani);
    cat.addImage("cat3",cat_img2);
    cat.scale = 0.12;
    cat.setCollider("rectangle",0,0,1400,1400);

    mouse = createSprite(130,460,200,10);
    mouse.addImage("mouse1",mouse_img1);
    mouse.addAnimation("mouse2",mouse_ani);
    mouse.addImage("mouse3",mouse_img2);
    mouse.scale = 0.12;
    mouse.setCollider("rectangle",0,0,800,1400);
}

function draw() {

    background("white");

    if(cat.x < 1000){
      cat.width = 200;
      mouse.width = 72;
    }

    if(cat.x - mouse.x < cat.width/2 + mouse.width/2){
        cat.changeImage("cat3",cat_img2);
        cat.velocityX = 0;
        mouse.changeImage("mouse3",mouse_img2);
    }
    else{
     keyPressed();
    }

    drawSprites();
}


function keyPressed(){
  if(keyWentDown("LEFT_ARROW")){
    cat.changeAnimation("cat2",cat_ani);
    cat.velocityX = -2;
    mouse.changeAnimation("mouse2",mouse_ani);
  }
}
