const canvas = document.getElementById('canvas');

// Properties to give size to the road
canvas.width = 200;

// The canvas and its elements are initialized
const ctx = canvas.getContext('2d');
const road = new Road(canvas.width/2, canvas.width*0.9);
const car = new Car(road.getLaneCenter(1),100,30,50);

animate();

// Function to start the animation of the elements
function animate() {
  car.update();
  
  canvas.height = window.innerHeight;
  road.draw(ctx);
  car.draw(ctx);
  requestAnimationFrame(animate);
}