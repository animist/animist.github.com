Pylons pylons;
Plane plane;

final int FPS = 30;

void setup() {
  size(400, 400);
  frameRate(FPS);

  plane = new Plane();
  pylons = new Pylons(plane);
}

void update() {
  plane.update();
  pylons.update();
}

void draw() {
  update();

  noStroke();
  int gradHeight = 5;
  for (int i = 0; i < height / gradHeight; i++) {
    int grad = 180 / (height / gradHeight) * i;
    fill(50 + grad, 50 + grad, 255);
    rect(0, gradHeight * i, width, gradHeight);
  }

  pylons.draw();
  plane.draw();
}

void keyPressed() {
  if (key == 'h' || keyCode == LEFT) { plane.goRight(); }
  else if (key == 'l' || keyCode == RIGHT) { plane.goLeft(); }
}

void keyReleased() {
  plane.stop();
}

class Plane {
  int x, y;

  int size = 8;

  boolean rightMode = false;
  boolean leftMode = false;

  float speed = 0;
  float accel = 1;

  final int MAX_SPEED = 15;

  boolean damageFlag;
  int damageCounter;

  Plane() {
    x = width / 2;
    y = height / 2;
    resetDamage();
  }

  void goRight() {
    rightMode = true;
    leftMode = false;
  }

  void goLeft() {
    rightMode = false;
    leftMode = true;
  }

  void stop() {
    rightMode = false;
    leftMode = false;
    speed = 0;
  }

  void update() {
    if (x - size + speed > 0 && x + size + speed < width) {
      x += speed;
    }

    if (rightMode && abs(speed) < MAX_SPEED) {
      speed += -accel;
    }

    if (leftMode && abs(speed) < MAX_SPEED) {
      speed += accel;
    }
  }

  void damage() {
    damageFlag = true;
  }

  void resetDamage() {
    damageFlag = false;
    damageCounter = FPS / 3;
  }

  void draw() {
    if (damageFlag) {
      if (damageCounter % 2 == 0) {
        fill(255, 0, 0);
        stroke(255, 0, 0);
      } else {
        fill(255);
        stroke(255);
      }

      damageCounter--;
      if (damageCounter < 0) {
        resetDamage();
      }
    } else {
      fill(32, 32, 128);
      stroke(32, 32, 128);
    }

    strokeWeight(size);
    pushMatrix();
    translate(x, y);
    if (speed < 0) {
      rotate(PI / map(speed, -MAX_SPEED, MAX_SPEED, 2, 0));
    } else if (speed > 0) {
      rotate(PI / map(speed, -MAX_SPEED, MAX_SPEED, -0, -2));
    }
    ellipse(0, -size, size * 2, size * 2);
    line(-size * 4, -size, size * 4, -size);
    popMatrix();
    /*
    ellipse(x, y, size * 2, size * 2);
    line(x - size * 4, y, x + size * 4, y);
    */
  }
}

class Pylon {
  Plane p;
  float size = 0;
  int defaultSpeed = 3;
  float speed = defaultSpeed;
  float x = 0;
  float xSpeed = 5;

  Pylon(Plane _p, int _s) {
    p = _p;
    size = _s;
  }

  boolean update() {
    size += speed;
    x += xSpeed;
    speed += pow(speed, 3) * 0.001;
    //speed += pow(size, 3) * 0.000001;

    if (size > 150) {
      collision();
      x = 0;
      size = 0;
      speed = defaultSpeed;
      xSpeed = round(random(-1.5, 4.5));
      return true;
    }
    return false;
  }

  void draw() {
    stroke(128);
    strokeWeight(1);
    fill(64, 128, 255, 30);
    rect(leftX(), topY(), size * 2, size * 3);
    fill(255, 230);
    rect(leftX(), topY(), size, size * 3);
    rect(width / 2 + size - x, topY(), size, size * 3);
  }

  float leftX() {
    return width / 2 - size - x;
  }

  float topY() {
    return height / 3 - size;
  }

  float bottomY() {
    return height / 3 - size + size * 3;
  }

  float rightX() {
    return width / 2 - size - x + size * 3;
  }

  void collision() {
    if ((p.x - p.size < leftX() + size) || (p.x + p.size > width / 2 + size - x)) {
      p.damage();
    }
  }
}

class Pylons {
  Plane p;
  Pylon[] pylons = new Pylon[2];

  Pylons(Plane _p) {
    p = _p;
    pylons[0] = new Pylon(p, 0);
    pylons[1] = new Pylon(p, 75);
  }

  void update() {
    for (int i = 0; i < 2; i++) {
      if (pylons[i].update()) {
        swap();
      }
    }
  }

  void swap() {
    Pylon tmpPylon;
    tmpPylon = pylons[0];
    pylons[0] = pylons[1];
    pylons[1] = tmpPylon;
  }

  void draw() {
    for (int i = 0; i < 2; i++) {
      pylons[i].draw();
    }
    stroke(255);
    strokeWeight(1);
    line(0, 0, pylons[1].leftX(), pylons[1].topY());
    line(0, height, pylons[1].leftX(), pylons[1].bottomY());
    line(width, 0, pylons[1].rightX(), pylons[1].topY());
    line(width, height, pylons[1].rightX(), pylons[1].bottomY());

    line(pylons[1].leftX(), pylons[1].topY(), pylons[0].leftX(), pylons[0].topY());
    line(pylons[1].leftX(), pylons[1].bottomY(), pylons[0].leftX(), pylons[0].bottomY());
    line(pylons[1].rightX(), pylons[1].topY(), pylons[0].rightX(), pylons[0].topY());
    line(pylons[1].rightX(), pylons[1].bottomY(), pylons[0].rightX(), pylons[0].bottomY());

    line(pylons[0].leftX(), pylons[0].topY(), width / 2 - 5, height / 3 - 5);
    line(pylons[0].leftX(), pylons[0].bottomY(), width / 2 - 5, height / 3 + 5);
    line(pylons[0].rightX(), pylons[0].topY(), width / 2 + 5, height / 3 - 5);
    line(pylons[0].rightX(), pylons[0].bottomY(), width / 2 + 5, height / 3 + 5);
    noFill();
    rect(width / 2 - 5, height / 3 - 5, 10, 10);
  }
}
