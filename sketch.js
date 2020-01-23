var movingrect,fixedrect;

function setup() {
  createCanvas(800,400);
fixedrect =  createSprite(200, 200, 50, 80);
fixedrect.shapeColor = "yellow";
movingrect = createSprite(400,200,80,30);
movingrect.shapeColor = "yellow";
}

function draw() {
  background(0);  
movingrect.x = World.mouseX;
movingrect.y = World.mouseY;

//calling the isTouching function
if(isTouching(movingrect,fixedrect))
{
  fixedrect.shapeColor = "orange"; 
  movingrect.shapeColor = "orange";
}
else
{
  fixedrect.shapeColor = "yellow"; 
  movingrect.shapeColor = "yellow"; 
}


  drawSprites();
}


