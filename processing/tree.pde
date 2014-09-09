ArrayList branches = new ArrayList();
Branch branch;
float rotater = 0.15;

void setup() {
  size(1000, 800);
  stroke(255);
  background(0);

  branch = new Branch(width / 2, height / 1.5, PI * 2.5, 80.0, 9.0);
  branches.add(branch.draw());
}

void draw() {
  long initSize = branches.size();
  for (int i = 0; i < initSize; i++) {
    branch = (Branch)branches.get(i);
    if (branch.drawable()) {
      Branch branch2 = branch.copy();
      branch.setRotater(2-rotater);
      branch2.setRotater(2+rotater);
      branches.add(branch.draw());
      branches.add(branch2.draw());
    } else {
      strokeWeight(0);
      stroke(0);
      fill(0, 0, 0, 100);
      rect(0, 0, width, height);
      rotater = random(0.001, 0.999);
      branches = new ArrayList();
      branch = new Branch(width / 2 + random(-100, +100), height / 2 + random(-100, +100), PI * random(0, 2), random(32, 80), random(4.0, 9.0));
      branches.add(branch.draw());
      return;
    }
  }
}

class Branch {
  float startX, startY, angle, path, weight, rotater;

  Branch(float _startX, float _startY, float _angle, float _path, float _weight) {
    startX = _startX;
    startY = _startY;
    angle = _angle;
    path = _path;
    weight = _weight;
    rotater = 1;
  }

  void setRotater(float _r) {
    rotater = _r;
  }

  Branch copy() {
    return new Branch(startX, startY, angle, path, weight);
  }

  boolean drawable() {
    return weight > 0;
  }

  Branch draw() {
    strokeWeight(weight);

    float endX, endY;

    endX = startX + cos(angle) * path;
    endY = startY + sin(angle) * path;

    float baseColor = 2 * path;
    stroke(baseColor * random(1, 4), baseColor * random(1, 4), baseColor * random(1, 4), 128);
    line(startX, startY, endX, endY);

    return new Branch(endX, endY, angle + PI * rotater, path - 2, weight - 1);
  }
}

