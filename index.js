const canvas = document.querySelector("canvas");
// This c stands for the canvas context
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

//This stnd to fill the color and take 4 property the color and the height and  width property
c.fillRect(0, 0, canvas.width, canvas.height);

class Sprite {
  constructor(position) {
    this.position;
  }
}

const player = new Sprite();
