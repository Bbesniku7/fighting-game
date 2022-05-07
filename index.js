const canvas = document.querySelector("canvas");
// This c stands for the canvas context
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

//This stnd to fill the color and take 4 property the color and the height and  width property
c.fillRect(0, 0, canvas.width, canvas.height);

// of course we can use object but since is a game and class is gonne be like how a object should look than we need to do a class

const gravity = 0.8;
class Sprite {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.height = 150;
    this.lastKeyPressed = "";
  }

  drawPlayer() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, 50, this.height);
  }

  update() {
    this.drawPlayer();
    this.position.x += this.velocity.x;
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

// Here we gonna make the keys on the game:
const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  w: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
  ArrowUp: {
    pressed: false,
  },
};

// Here we gonna create an infint loop.
const animate = () => {
  window.requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  enemy.update();

  // Player Movement
  player.velocity.x = 0;
  if (keys.d.pressed && player.lastKeyPressed === "d") {
    player.velocity.x = 1;
  } else if (keys.a.pressed && player.lastKeyPressed === "a") {
    player.velocity.x = -1;
  }

  // Enemy Movement

  enemy.velocity.x = 0;
  if (keys.ArrowRight.pressed && enemy.lastKeyPressed === "ArrowRight") {
    enemy.velocity.x = 1;
  } else if (keys.ArrowLeft.pressed && enemy.lastKeyPressed === "ArrowLeft") {
    enemy.velocity.x = -1;
  }
};
animate();

// This ie where we are creating Event Listeneres.
// With this function we can take every  key that is it pressing by the  user
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = true;
      player.lastKeyPressed = "d";
      break;
    case "a":
      keys.a.pressed = true;
      player.lastKeyPressed = "a";
      break;
    case "w":
      player.velocity.y = -20;
      break;
    // Enemy Keys
    case "ArrowRight":
      keys.ArrowRight.pressed = true;
      enemy.lastKeyPressed = "ArrowRight";
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = true;
      enemy.lastKeyPressed = "ArrowLeft";
      break;
    case "ArrowUp":
      enemy.velocity.y = -20;
      break;
  }
  console.log(event.key);
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "w":
      keys.w.pressed = false;
      lastKeyPressed = "w";
      break;
    // Enemy Keys
    case "ArrowRight":
      keys.ArrowRight.pressed = false;
      enemy.lastKeyPressed = "ArrowRight";
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      enemy.lastKeyPressed = "ArrowLeft";
      break;
    case "ArrowUp":
      keys.ArrowUp.pressed = false;
      break;
  }
  console.log("upp event =< ", event.key);
});
