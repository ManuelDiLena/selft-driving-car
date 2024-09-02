class Car {
  // The car is built with its parameters
  constructor(x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.speed = 0;
    this.aceleration = 0.2;
    this.maxSpeed = 3;
    this.friction = 0.05;
    this.angle = 0;

    this.controls = new Controls();
  }

  // Car movement function
  update() {
    this.#move();
  }

  #move() {
    // go forward
    if (this.controls.forward) {
      this.speed += this.aceleration;
    }
    // go back
    if (this.controls.reverse) {
      this.speed -= this.aceleration;
    }
    // forward speed control
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    // reverse speed control
    if (this.speed < -this.maxSpeed/2) {
      this.speed = -this.maxSpeed/2;
    }
    // small advance of the car when not accelerating
    if (this.speed > 0) {
      this.speed -= this.friction;
    }
    if (this.speed < 0) {
      this.speed += this.friction;
    }
    if (Math.abs(this.speed) < this.friction) {
      this.speed = 0;
    }

    // actions to change direction
    if (this.speed != 0) {
      const flip = this.speed > 0 ? 1 : -1;
      // turn left
      if (this.controls.left) {
        this.angle += 0.03 * flip;
      }
      // turn right
      if (this.controls.right) {
        this.angle -= 0.03 * flip;
      }
    }

    // actions to change direction while the car moves
    this.x -= Math.sin(this.angle) * this.speed;
    this.y -= Math.cos(this.angle) * this.speed;
  }

  // Function to draw the car
  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(-this.angle);

    ctx.beginPath();
    ctx.rect(
      -this.width/2,
      -this.height/2,
      this.width,
      this.height
    );
    ctx.fill();

    ctx.restore();
  }
}