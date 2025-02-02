// Path Following (Path Following)
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/LrnR6dc2IfM
// https://thecodingtrain.com/learning/nature-of-code/5.7-path-following.html

// Path Following: https://editor.p5js.org/codingtrain/sketches/dqM054vBV
// Complex Path: https://editor.p5js.org/codingtrain/sketches/2FFzvxwVt

let vehicle;
let path;

function setup() {
  createCanvas(1200, 800);
  vehicle = new Vehicle(100, 100);
  vehicle.vel.x = 2;
  path = new Path(0, height / 2, width, height / 2);
}

function draw() {
  background(0);

  path.end.y = mouseY;

  let force = vehicle.applyBehaviors(path);

  vehicle.edges();
  vehicle.update();
  vehicle.show();

  path.show();
}
