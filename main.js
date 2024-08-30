const canvas = document.getElementById('canvas');

// Properties to give size to the road
canvas.width = 200;

// The canvas and its elements are initialized
const ctx = canvas.getContext('2d');
const car = new Car(100,100,30,50);
car.draw(ctx);
animate();

// Function to start the animation of the elements
function animate() {
  car.update();
  canvas.height = window.innerHeight;
  car.draw(ctx);
  requestAnimationFrame(animate);
}