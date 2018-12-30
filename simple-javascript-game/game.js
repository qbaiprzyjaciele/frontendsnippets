var cnv = document.getElementById("cnv");
var ctx = cnv.getContext("2d");
var image =  document.getElementById("source");
var frames = [[0,0,50,60],[0,0,50,60],[50,0,50,60],[50,0,50,60]];
var xPos = 0;
var yPos = 50 ;
var frameCnt = 0; 
var jump = false;
var jumpStage = 0;
var maxJumpStage = 5  ;
var jumpStageYOffset = [-15,-5,-2,2,5,15];
var runVector = 0;
var characterBoundingBox = {
  x:50,y:60
}

function GameObject(spriteImage) {
  this.image = spriteImage;
  this.frames = [];
  this.xPos = 0;
  this.yPos = 0;
  this.frameCnt = 0;
  this.jump = false;
  this.jumpStage = 0;
  this.maxJumpStage = 5;
  this.jumStageYOffset = [-15,-5,-2,2,5,15];
  this.moveXVector = 0;
  this.characterBoundingBox = {};
  //this.animations = {run:{frames:[],frameCnt:0},jump:}
}

GameObject.prototype.draw = function(drawContext) {  
  
}


function Sprite(spriteImage) {
  this.image = spriteImage;
  this.animations = [];
  this.xPos = 0;
  this.yPos = 0;
  this.currentState = "";
  this.stateStage;
 
}

 
var update = function() {
   ctx.clearRect(0,0,600,480);
   if(jump && jumpStage<=maxJumpStage) {
     yPos = yPos+jumpStageYOffset[jumpStage] ;
     if(jumpStage==maxJumpStage) {
      jump = false;  
      jumpStage = 0; 
     }
     else {
       jumpStage++;
     }
   }
   xPos+=runVector;
   ctx.drawImage(image,
                  frames[frameCnt][0],
                  frames[frameCnt][1],
                  frames[frameCnt][2],
                  frames[frameCnt][3],
                  xPos,yPos,50,60);  
    frameCnt++;
    if(frameCnt==frames.length) {
      frameCnt=0;
    }
}

document.addEventListener("keydown",function(event) {
  if(event.keyCode == 37 && xPos>5) {
    //xPos=xPos-5;
    runVector=-8;
  } 
  else if(event.keyCode == 39 && xPos < 595 ) {
    //xPos=xPos+5;
    runVector=8;
  }
  else if(event.keyCode == 32 && !jump) {
     jump = true;
  }
  
  console.log("kd" + event.keyCode);
});

document.addEventListener("keyup",function(event) {
  if(event.keyCode == 37 ) {
    runVector = 0;
  }
  else if(event.keyCode == 39) {
    runVector = 0;
  }
}) ; 

setInterval(update,35);
