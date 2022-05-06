const canvas = document.querySelector("canvas");
// This c stands for the canvas context
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

//This stnd to fill the color and take 4 property the color and the height and  width property
c.fillRect(0, 0, canvas.width, canvas.height);

// of course we can use object but since is a game and class is gonne be like how a object should look than we need to do a class

const gravity = 0.2;
class Sprite {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.height = 150;
  }

  drawPlayer() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, 50, this.height);
  }

  update() {
    this.drawPlayer();
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0;
    } else this.velocity.y += gravity;
  }
}

const player = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
});

player.drawPlayer();

const enemy = new Sprite({
  position: {
    x: 400,
    y: 100,
  },
  velocity: {
    x: 0,
    y: 0,
  },
});

enemy.drawPlayer();

// Here we gonna create an infint loop.
const animate = () => {
  window.requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  enemy.update();
};
animate();
