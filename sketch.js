let currentColor = 'black';
let swatches = new Arr

class colorSwatch
{
    constructor(color,size,xPos,yPos) {
        this.color = color;
        this.size = size;
        this.x = xPos;
        this.y = yPos;
    }
    clicked() 
    {
        if (dist(mouseX, mouseY, this.x, this.y) < this.size)
        {
          currentColor = this.color;
        }
    }
}

function createSwatch(color,size,xPos,yPos)
{
  strokeWeight(0);
  fill(color);
  square(xPos,yPos,size);
  let newSwatch = new colorSwatch(color,size,xPos,yPos);
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(220);

  //color pallete
  let swatchSize = 20;
  createSwatch('red',swatchSize,0,0);
  createSwatch('orange',swatchSize,0,0+swatchSize*1);
  createSwatch('yellow',swatchSize,0,0+swatchSize*2);
  createSwatch('green',swatchSize,0,0+swatchSize*3);
  createSwatch('blue',swatchSize,0,0+swatchSize*4);
  createSwatch('indigo',swatchSize,0,0+swatchSize*5);
  createSwatch('violet',swatchSize,0,0+swatchSize*6);
  createSwatch('brown',swatchSize,0,0+swatchSize*7);
  createSwatch('white',swatchSize,0,0+swatchSize*8);
  createSwatch('black',swatchSize,0,0+swatchSize*9);

  //testing square
  fill(currentColor);
  square(300,300,100);
  
}


