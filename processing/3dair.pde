Pylons pylons;
Plane plane;
Title title = new Title();
Background bg = new Background();

final int FPS = 30;
static final int MODE_WAIT = 0;
static final int MODE_GAME = 1;

int mode = MODE_WAIT;

int pseudoHeight = 400;

void setup() {
  size(400, 700);
  frameRate(FPS);

  plane = new Plane();
  pylons = new Pylons(plane);
}

void update() {
  switch (mode) {
    case MODE_WAIT:
      title.update();
      break;
    case MODE_GAME:
      moveByMouse();
      if (plane.update()) {
        mode = MODE_WAIT;
        plane.reset();
        pylons.reset();
        title.resetWait();
      }
      pylons.update();
      break;
  }
}

void draw() {
  update();

  bg.draw();

  switch (mode) {
    case MODE_WAIT:
      title.draw();
      pylons.drawScore();
      break;
    case MODE_GAME:
      pylons.draw();
      plane.draw();
      break;
  }
}

void keyPressed() {
  switch (mode) {
    case MODE_WAIT:
      startGame();
      break;
    case MODE_GAME:
      if (key == 'h' || keyCode == LEFT) { plane.goLeft(); }
      else if (key == 'l' || keyCode == RIGHT) { plane.goRight(); }
      break;
  }
}

void keyReleased() {
  plane.stop();
}

void moveByMouse() {
  if (mouseX + plane.size < plane.x) {
    plane.goLeft();
  } else if (mouseX - plane.size > plane.x) {
    plane.goRight();
  } else {
    plane.stop();
  }
}

void mouseClicked() {
  switch (mode) {
    case MODE_WAIT:
      startGame();
      break;
  }
}

void startGame() {
  if (title.isWait()) {
    mode = MODE_GAME;
    pylons.resetScore();
  }
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

  int life;
  final int LIFE_MAX = 300;

  Plane() {
    reset();
  }

  void reset() {
    x = width / 2;
    y = pseudoHeight / 2;
    life = LIFE_MAX;
    resetDamage();
  }

  void goRight() {
    if (leftMode) { stop(); }
    rightMode = true;
    leftMode = false;
  }

  void goLeft() {
    if (rightMode) { stop(); }
    rightMode = false;
    leftMode = true;
  }

  void stop() {
    rightMode = false;
    leftMode = false;
    speed = 0;
  }

  boolean update() {
    if (x - size + speed > 0 && x + size + speed < width) {
      x += speed;
    }

    if (rightMode && abs(speed) < MAX_SPEED) {
      speed += accel;
    }

    if (leftMode && abs(speed) < MAX_SPEED) {
      speed += -accel;
    }


    if (damageFlag) {
      life -= 5;
      damageCounter--;
      if (damageCounter < 0) {
        resetDamage();
      }
      if (life < 0) {
        return true;
      }
    }
    return false;
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

    // draw life gage
    noStroke();
    fill(255, 64, 128, 200);
    rect(50, 20, life, 5);
  }
}

class Pylon {
  Plane p;
  float size = 0;

  final float INITIAL_SPEED = 1.0000001;

  float defaultSpeed;
  float speed;
  float x = 0;
  float xSpeed = 5;


  Pylon(Plane _p, int _s) {
    p = _p;
    size = _s;
    reset();
  }

  void accel() {
    defaultSpeed += (INITIAL_SPEED - 1) / 2;
  }

  void reset() {
    defaultSpeed = INITIAL_SPEED;
    resetSpeed();
  }

  void resetSpeed() {
    speed = defaultSpeed;
  }

  boolean update() {
    size += speed;
    x += xSpeed;
    //speed *= 1.05;
    speed += pow(size, 3) * 0.000003;
    //speed += pow(size, 3) * 0.000001;

    if (size > 150) {
      collision();
      x = 0;
      size = 0;
      xSpeed = round(random(-1.5, 4.5));
      reset();
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
    return pseudoHeight / 3 - size;
  }

  float bottomY() {
    return pseudoHeight / 3 - size + size * 3;
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
  float score = 1;

  Pylons(Plane _p) {
    p = _p;
    pylons[0] = new Pylon(p, 0);
    pylons[1] = new Pylon(p, 75);
  }

  void update() {
    for (int i = 0; i < 2; i++) {
      if (pylons[i].update()) {
        swap();
        score *= 1.05;
      }
    }
  }

  void reset() {
    for (int i = 0; i < 2; i++) {
      pylons[i].reset();
    }
  }

  void resetScore() {
    score = 1;
  }

  void swap() {
    Pylon tmpPylon;
    tmpPylon = pylons[0];
    tmpPylon.resetSpeed();
    pylons[0] = pylons[1];
    pylons[1] = tmpPylon;
    for (int i = 0; i < 2; i++) {
      pylons[i].accel();
    }
  }

  void draw() {
    for (int i = 0; i < 2; i++) {
      pylons[i].draw();
    }
    stroke(255);
    strokeWeight(1);
    line(0, 0, pylons[1].leftX(), pylons[1].topY());
    line(0, pseudoHeight, pylons[1].leftX(), pylons[1].bottomY());
    line(width, 0, pylons[1].rightX(), pylons[1].topY());
    line(width, pseudoHeight, pylons[1].rightX(), pylons[1].bottomY());

    line(pylons[1].leftX(), pylons[1].topY(), pylons[0].leftX(), pylons[0].topY());
    line(pylons[1].leftX(), pylons[1].bottomY(), pylons[0].leftX(), pylons[0].bottomY());
    line(pylons[1].rightX(), pylons[1].topY(), pylons[0].rightX(), pylons[0].topY());
    line(pylons[1].rightX(), pylons[1].bottomY(), pylons[0].rightX(), pylons[0].bottomY());

    line(pylons[0].leftX(), pylons[0].topY(), width / 2 - 5, pseudoHeight / 3 - 5);
    line(pylons[0].leftX(), pylons[0].bottomY(), width / 2 - 5, pseudoHeight / 3 + 5);
    line(pylons[0].rightX(), pylons[0].topY(), width / 2 + 5, pseudoHeight / 3 - 5);
    line(pylons[0].rightX(), pylons[0].bottomY(), width / 2 + 5, pseudoHeight / 3 + 5);
    noFill();
    rect(width / 2 - 5, pseudoHeight / 3 - 5, 10, 10);

    drawScore();
  }

  void drawScore() {
    fill(128);
    textSize(20);
    textAlign(CENTER);
    text("Score : " + round((score - 1) * 100) + (score > 1 ? "00" : ""), width / 2, pseudoHeight + 25);
  }
}

class Title {
  float glow = 0;
  float glowSpeed = 0.1;
  int waitCounter = 0;

  void update() {
    glow += glowSpeed;
    glowSpeed *= 1.2;
    if (glow > 200) {
      glowSpeed = -0.1;
    } else if (glow < 0) {
      glowSpeed = 0.1;
    }
    if (waitCounter > 0) { waitCounter--; }
  }

  void resetWait() {
    waitCounter = round(FPS * 1.5);
  }

  boolean isWait() {
    return waitCounter == 0;
  }

  void draw() {
    fill(0, glow, 0);
    textSize(20);
    textAlign(CENTER);
    text("Click or Tap to Start!", width / 2, pseudoHeight / 2);
  }
}

class Background {
  void draw() {
    background(0);
    noStroke();
    int gradHeight = 5;
    for (int i = 0; i < (pseudoHeight / 3 + 10) / gradHeight; i++) {
      int grad = 180 / ((pseudoHeight / 3 + 10) / gradHeight) * i;
      fill(50 + grad, 50 + grad, 255);
      rect(0, gradHeight * i, width, gradHeight);
    }
    for (int i = 0; i < (pseudoHeight - (pseudoHeight / 3 + 5)) / gradHeight; i++) {
      int grad = 180 / ((pseudoHeight - (pseudoHeight / 3 + 5)) / gradHeight) * i;
      fill(255 - grad, 250 - grad*1.5, 240 - grad*2, 255);
      //fill(255 - grad, 230 - grad, 180 - grad, 255);
      rect(0, gradHeight * i + (pseudoHeight / 3 + 5), width, gradHeight);
    }
  }
}
