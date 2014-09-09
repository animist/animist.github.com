void setup() {
  size(500, 500);
  background(255);
  stroke(255);
  background(0);
  stroke(0);
  branch(width / 2, height / 1.7, PI * 1.5, 32, 16);
  branch(width / 2, height / 1.5, PI * 0.5, 24, 12);
  branch(width / 2 - 125, height / 2.75, PI * 1.25, 22, 11);
  branch(width / 2 + 125, height / 2.75, PI * 1.75, 22, 11);
}

void draw() {
  background(0);
  branch(width / 2, height / 1.7, PI * 1.5 + random(-0.1, 0.1), random(29, 33), 16);
  branch(width / 2, height / 1.5, PI * 0.5 + random(-0.1, 0.1), random(22, 26), 12);
  branch(width / 2 - 125, height / 2.75, PI * 1.25 + random(-0.1, 0.1), random(20, 24), 11);
  branch(width / 2 + 125, height / 2.75, PI * 1.75 + random(-0.1, 0.1), random(20, 24), 11);
}

void branch(float startX, float startY, float angle, float length, float weight) {
  strokeWeight(weight);

  float endX, endY;

  endX = startX + cos(angle) * length;
  endY = startY + sin(angle) * length;

  if (weight < 10) {
    stroke(length * random(3, 4), length * random(2, 4), length * random(2, 3), 64);
    line(startX, startY, endX, endY);
  } else {
    strokeWeight(weight * 3);
    stroke(2 * length * random(1, 2), 2 * length * random(3, 4), 2 * length * random(3, 4), 64);
    stroke(length * random(3, 4), length * random(3, 4), length * random(3, 4), 64);
    line(startX, startY, endX, endY);
  }

  if (weight > 0) {
    branch(endX, endY, angle + PI * 1.8, length - 2, weight - 1);
    branch(endX, endY, angle + PI * 2.2, length - 2, weight - 1);
  }
}
