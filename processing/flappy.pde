Ball ball = new Ball();
SquareManager sm = new SquareManager();
Life life = new Life();
Title title = new Title();
Item item = new Item();

static final int FPS = 60;
static final int MODE_WAIT = 0;
static final int MODE_GAME = 1;
int mode = 0;

int pseudoHeight = 400;

void setup() {
  size(400, 700);
  frameRate(FPS);

  sm.init();
  ball.reset();
  item.reset();
}

void update() {
  switch (mode) {
    case MODE_WAIT:
      ball.glowing();
      title.update();
      break;
    case MODE_GAME:
      ball.update();
      item.update();

      if (sm.runAndHit(ball)) {
        life.damage();
      }

      if (item.collision(ball)) {
        life.recovery();
        item.reset();
      }

      if (!life.update()) {
        mode = MODE_WAIT;
        ball.reset();
        life.reset();
        item.reset();
        sm.reset();
        title.resetWait();
      }
      break;
  }
}

void draw() {
  update();

  background(0);

  if (mode == MODE_WAIT) {
    title.draw();
  }

  sm.flash();

  ball.draw();
  sm.draw();
  item.draw();
  life.draw();

  strokeWeight(2);
  stroke(255, 200, 128);
  stroke(128, 200, 255);
  line(0, 0, width, 0);
  line(0, pseudoHeight, width, pseudoHeight);
}

void mouseClicked() {
  switch (mode) {
    case MODE_WAIT:
      if (title.isWait()) {
        mode = MODE_GAME;
        sm.resetScore();
        ball.stopGlow();
      }
      break;
    case MODE_GAME:
      ball.jump();
      break;
  }
}

class Ball {
  float x, y;
  float speed;
  int halfsize = 5;
  int glowSpeed = 5;
  int glow = glowSpeed * 2;

  Ball() {
    x = 20;
    reset();
  }

  void reset() {
    y = pseudoHeight / 2;
    speed = 2;
  }

  void update() {
    y = y + speed;
    if (y < 0) { y = halfsize; speed = -speed * 0.5; }
    if (y > pseudoHeight) { y = pseudoHeight - halfsize; speed = -speed * 0.5; }
    speed = speed + 0.1;
  }

  void glowing() {
    glow += glowSpeed;
    if (glow > 200 || glow < 0) {
      glowSpeed = -glowSpeed;
    }
  }

  void stopGlow() {
    glow = 0;
  }

  void draw() {
    noStroke();
    fill(255, glow, glow);
    ellipse(x, y, halfsize * 2, halfsize * 2);
  }

  void jump() {
    speed = -5;
  }
}

class SquareManager {
  float score = 1;
  int num = 4;
  Square[] squares = new Square[num];

  int flashCounter = 0;

  void init() {
    for (int i = 0; i < num; i++) {
      squares[i] = new Square(width + 110 * i);
    }
  }

  void reset() {
    for (int i = 0; i < num; i++) {
      squares[i].x = width + 110 * i;
      squares[i].resetSpeed();
    }
  }

  void resetScore() {
    score = 1;
  }

  void draw() {
    for (int i = 0; i < num; i++) {
      squares[i].draw();
    }

    fill(128);
    textSize(20);
    textAlign(CENTER);
    text("Score : " + round((score - 1) * 100) + (score > 1 ? "00" : ""), width / 2, pseudoHeight + 25);
  }

  boolean runAndHit(Ball b) {
    boolean result = false;

    for (int i = 0; i < num; i++) {
      if (squares[i].update()) {
        score *= 1.05;
      }
      squares[i].accel(0.001);

      if (squares[i].collision(b)) {
        flashCounter = 6;
        result = true;
      }
    }

    return result;
  }

  void flash() {
    if (flashCounter > 0) {
      if (flashCounter % 2 == 1) {
        background(128);
      } else {
        background(0);
      }
      flashCounter--;
    }
  }
}

class Square {
  float x, y;
  int sizeMax, weight;
  float size, speed, grow;

  Square(int _x) {
    resetSize();
    weight = 30;
    x = _x;
    resetSpeed();
  }

  boolean update() {
    x = x - speed;
    size = size + grow;

    if (x + weight < 0) {
      x = width;
      resetSize();
      return true;
    }

    if (size < 0 || size > sizeMax) {
      grow = -grow;
    }

    return false;
  }

  void resetSize() {
    sizeMax = int(random(50, 300));
    size = sizeMax;
    y = round(random(0.0, 1.0)) == 1 ? 0 : pseudoHeight - sizeMax;
    grow = -random(2, 8);
  }

  void resetSpeed() {
    speed = 2;
  }

  void accel(float _s) {
    speed += _s;
  }

  void draw() {
    noStroke();
    fill(0, 128, 0);
    if (y == 0) {
      rect(x, y, weight, y + size);
    } else {
      rect(x, y + size, weight, pseudoHeight - (y + size));
    }
  }

  boolean collision(Ball b) {
    if (x + weight > b.x && x < b.x) {
      return y == 0 ? b.y < size : b.y > y + size;
    }
    return false;
  }
}

class Life {
  int life;
  int damageCounter;

  Life() {
    reset();
  }

  void reset() {
    life = 300;
    damageCounter = 0;
  }

  void draw() {
    noStroke();
    fill(255, 64, 128, 200);
    rect(50, 20, life, 5);
  }

  boolean update() {
    if (damageCounter > 0) {
      damageCounter--;
      life--;
    }
    return life >= 0;
  }

  void damage() {
    damageCounter += 3;
  }

  void recovery() {
    life += 15;
  }
}

class Title {
  int glow = 100;
  int glowSpeed = 3;
  int waitCounter = 0;

  void update() {
    glow += glowSpeed;
    if (glow > 1000) {
      glow = 100;
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
    fill(64, 128, 255);
    textSize(20);
    textAlign(CENTER);
    text("Click to Start and Jump!", width / 2, pseudoHeight / 2);

    // draw the mask
    noStroke();
    fill(0, 0, 0, 200);
    pushMatrix();
    translate(glow, 150);
    rotate(PI / 4);
    rect(7, 0, 10, 100);
    rect(0, 0, 5, 100);
    popMatrix();
  }
}

class Item {
  float x, y;
  float angle, speed;
  int glow, glowSpeed = 3;
  int size = 10;
  boolean get = false;

  Item() {
    glow = 0;
    resetSpeed();
    reset();
  }

  boolean update() {
    x = x - speed;
    angle += 0.01;
    glow += glowSpeed;

    if (angle > 2) {
      angle = 0;
    }

    if (glow < 0 || glow > 127) {
      glowSpeed = -glowSpeed;
    }

    if (x < 0) {
      reset();
    }

    return false;
  }

  void reset() {
    x = round(random(15, width)) + width;
    y = round(random(15, pseudoHeight - 15));
  }

  void resetSpeed() {
    speed = 2;
  }

  void accel(float _s) {
    speed += _s;
  }

  void draw() {
    noStroke();
    fill(128 + glow, 128 + glow, glow);
    pushMatrix();
    translate(x, y);
    rotate(PI * angle);
    rect(-size, -size, size * 2, size * 2);
    popMatrix();
    if (get) { background(255, 0, 255); get = false; }
  }

  boolean collision(Ball b) {
    if (x + size > b.x && x - size < b.x) {
      if (b.y < y + size * 2 && b.y > y - size * 2) {
        get = true;
        return true;
      }
    }
    return false;
  }
}
