
function setup() {
  createCanvas(400,400);
  var box = createSprite(200,200,50,50); 
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    background ("yellow");
    }
    if(keyIsDown(LEFT_ARROW)){
      background ("blue");
      } 
      if(keyIsDown(UP_ARROW)){
        background ("red");
        } 
        if(keyIsDown(DOWN_ARROW)){
          background ("green");
          } 
drawSprites();
}




