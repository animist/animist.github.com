Field field;
MinoFactory minoFactory = new MinoFactory();
Mino activeMino;
Mino nextMino;
EffectMaster effecter;
boolean flagLeft = false;
boolean flagRight = false;
boolean flagRotate = false;
boolean flagDown = false;
byte frameCounter = 0;

void setup() {
  frameRate(60);
  size(300, 300);
  //size(300, 400);

  // 各種初期化
  effecter = new EffectMaster(true);
  field = new Field(effecter);
  activeMino = minoFactory.createMino();
  activeMino.set(field, effecter);
  nextMino = minoFactory.createMino();
}

void update() {
  if (activeMino.freeze) {
    activeMino = nextMino;
    nextMino = minoFactory.createMino();

    if (!activeMino.set(field, effecter)) {
      field.reset();
      activeMino.freezing();
      nextMino = minoFactory.createMino();
    }
  } else {
    if (flagLeft) {
      activeMino.move(-1);
      flagLeft = false;
    } else if (flagRight) {
      activeMino.move(1);
      flagRight = false;
    } else if (flagRotate) {
      activeMino.rotate();
      flagRotate = false;
    }
  }
  if (frameCounter > (flagDown ? 1 : field.getSpeed())) {
    activeMino.down();
    field.lineCheck();
    frameCounter = 0;
  }
  frameCounter++;
}

void draw() {
  update();

  background(50);

  field.draw();
  activeMino.draw();
  nextMino.drawNext();
  field.printScore();
  //Controller.draw();
  effecter.draw();
}

class Field {
  int x = 40;
  int y = 30;
  int blockSize = 10;
  byte width = 10;
  byte height = 20;
  int score = 0;
  byte speed = 30;
  EffectMaster effecter;

  byte[][] fieldCells = new byte[height][width];

  Field(EffectMaster _ef) {
    effecter = _ef;
    init();
  }

  void init() {
    for (byte i = 0; i < height; i++) {
      for (byte j = 0; j < width; j++) {
        fieldCells[i][j] = 0;
      }
    }
  }

  void setCell(int _x, int _y) {
    fieldCells[_y][_x] = 1;
  }

  byte getCell(int _x, int _y) {
    if (_x >= 0 && _x < width && _y >= 0 && _y < height) {
      return fieldCells[_y][_x];
    } else {
      return 0;
    }
  }

  byte getSpeed() {
    int s = speed - int(score / 100);
    return byte(s < 1 ? 1 : s);
  }

  void reset() {
    init();
    score = 0;
  }

  void lineCheck() {
    byte count = 0;
    if (effecter.enable) {
      for (byte k = 19; k >= 1; k--) {
        boolean fullLine = true;
        for (byte j = 9; j >= 0; j--) {
          if (fieldCells[k][j] == 0) { fullLine = false; }
        }
        if (fullLine) {
          for (byte j = 9; j >= 0; j--) {
            effecter.addCycle(x + blockSize * j, y + blockSize * k);
          }
        }
      }
    }
    for (byte k = 19; k >= 1;) {
      boolean fullLine = true;
      for (byte j = 9; j >= 0; j--) {
        if (fieldCells[k][j] == 0) { fullLine = false; }
      }
      if (fullLine) {
        count++;
        for (byte i = k; i >= 1; i--) {
          for (byte j = 9; j >= 0; j--) {
            fieldCells[i][j] = fieldCells[i - 1][j];
          }
        }
      } else { k--; }
    }
    switch(count) {
      case 0:
        break;
      case 1:
        score += 10;
        break;
      case 2:
        score += 25;
        break;
      case 3:
        score += 50;
        break;
      case 4:
        score += 100;
        break;
    }
  }

  void draw() {
    stroke(0);
    strokeWeight(1);
    rect(x, y, width * blockSize, height * blockSize);

    for (byte i = 0; i < height; i++) {
      for (byte j = 0; j < width; j++) {
        if (fieldCells[i][j] > 0) { fill(128); }
        else { fill(255); }
        rect(x + j * blockSize, y + i * blockSize, blockSize, blockSize);
      }
    }
  }

  void printScore() {
    rect(x + 125, y + 150, 80, 50);
    textSize(10);
    fill(128);
    text("SCORE: ", x + 135, y + 165);
    textSize(12);
    fill(1);
    text(score, x + 135, y + 190);
  }
}

class Mino {
  byte mino;
  byte x;
  byte y;
  byte angle;
  Field field;
  EffectMaster effecter;
  boolean freeze;
  byte width;
  byte height;
  MinoFactory mf = new MinoFactory();

  final byte CHECK = 1;
  final byte DRAW = 2;
  final byte FREEZE = 3;

  Mino(byte _m, byte _w, byte _h) {
    freeze = false;
    mino = _m;
    width = _w;
    height = _h;
  }

  boolean open(int _x, int _y, int a) {
    if (_x < 0 || _x + ((a + 1) % 2 == 1 ? width : height) > field.width ||
        _y < 0 || _y + ((a + 1) % 2 == 1 ? height : width) > field.height) { return false; }
    return minoLoop(CHECK, byte(_x), byte(_y), byte(a));
  }

  boolean set(Field _f, EffectMaster _ef) {
    field = _f;
    effecter = _ef;
    x = 4;
    y = 0;
    angle = 0;
    return open(4, 0, 0);
  }

  boolean move(int d) {
    if (open(x + d, y, angle)) {
      x = byte(x + d);
      return true;
    }
    return false;
  }

  boolean rotate() {
    byte a = byte(angle < 3 ? angle + 1 : 0);
    if (open(x, y, a)) {
      angle = a;
      return true;
    }
    return false;
  }

  void freezing() {
    freeze = true;
  }

  boolean down() {
    if (open(x, y + 1, angle)) {
      y = byte(y + 1);
      return true;
    }
    freeze = true;
    minoLoop(FREEZE, x, y, angle);

    return false;
  }

  void draw() {
    fill(128);
    minoLoop(DRAW, x, y, angle);
  }

  boolean minoLoop(byte selector, byte _x, byte _y, byte _a) {
    for (byte i = 0; i < height; i++) {
      for (byte j = 0; j < width; j++) {
        if (mf.minoData(mino)[i][j]) {
          byte tgtY = i;
          byte tgtX = j;

          switch(_a) {
            case 1:
              tgtY = j;
              tgtX = byte(height == 1 ? 0 : (i == 0 ? 1 : 0));
              break;
            case 2:
              tgtY = byte(height - (i + 1));
              tgtX = byte(width - (j + 1));
              break;
            case 3:
              byte t = byte(height - (i + 1));
              tgtY = byte(width - (j + 1));
              tgtX = byte(height == 1 ? 0 : (t == 0 ? 1 : 0));
              break;
          }

          switch(selector) {
            case CHECK:
              if (field.getCell(_x + tgtX, _y + tgtY) > 0) { return false; }
              break;
            case DRAW:
              rect(field.x + (_x + tgtX) * field.blockSize,
                field.y + (_y + tgtY) * field.blockSize,
                field.blockSize, field.blockSize);
              break;
            case FREEZE:
              field.setCell(_x + tgtX, _y + tgtY);
              break;
          }
        }
      }
    }
    if (selector == FREEZE) {
      effecter.addRipple(
        field.x + (field.blockSize + width / 2) * _x,
        field.y + (field.blockSize + height / 2) * _y
      );
    }
    return true;
  }

  void drawNext() {
    for (byte i = 0; i < 4; i++) {
      for (byte j = 0; j < 6; j++) {
        if (i > 0 && i < 3 && j > 0 && j < 5 && mf.minoData(mino)[i - 1][j - 1]) {
          fill(128);
        } else {
          fill(255);
        }
        rect(180 + j * 10, 50 + i * 10, 10, 10);
      }
    }
  }
}

class MinoFactory {
  boolean [][][] minos = {
    {
      { true, true, true, true},
      { false, false, false, false}
    },
    {
      { true, true, false, false},
      { true, true, false, false}
    },
    {
      { true, true, false, false},
      { false, true, true, false}
    },
    {
      { false, true, true, false},
      { true, true, false, false}
    },
    {
      { false, false, true, false},
      { true, true, true, false}
    },
    {
      { true, false, false, false},
      { true, true, true, false}
    },
    {
      { false, true, false, false},
      { true, true, true, false}
    },
  };

  boolean[][] minoData(int _i) {
    return minos[_i];
  }

  Mino createMino() {
    int[] widthList = {4, 2, 3, 3, 3, 3, 3};
    int[] heightList = {1, 2, 2, 2, 2, 2, 2};
    int i = int(random(minos.length));
    return new Mino(byte(i), byte(widthList[i]), byte(heightList[i]));
  }
}

class EffectMaster {
  final int CYCLE_SIZE = 100;
  final int RIPPLE_SIZE = 200;
  RippleEffecter[] ripples = new RippleEffecter[RIPPLE_SIZE];
  int ripplePointer = 0;
  CycleEffecter[] cycles = new CycleEffecter[CYCLE_SIZE];
  int cyclePointer = 0;
  boolean enable = true;

  EffectMaster(boolean _e) {
    enable = _e;

    for (int i = 0; i < CYCLE_SIZE; i++) {
      cycles[i] = new CycleEffecter(0, 0);
      cycles[i].freezing();
    }
    for (int i = 0; i < RIPPLE_SIZE; i++) {
      ripples[i] = new RippleEffecter(0, 0);
      ripples[i].freezing();
    }
  }

  void addCycle(int x, int y) {
    if (cyclePointer >= CYCLE_SIZE) { cyclePointer = 0; }

    cycles[cyclePointer] = new CycleEffecter(x, y);
    cyclePointer++;
  }

  void addRipple(int x, int y) {
    if (ripplePointer >= RIPPLE_SIZE) { ripplePointer = 0; }

    ripples[ripplePointer] = new RippleEffecter(x, y);
    ripplePointer++;
  }

  void draw() {
    if (!enable) { return; }

    for (int i = 0; i < CYCLE_SIZE; i++) {
      if (!cycles[i].freeze) { cycles[i].draw(); }
    }
    for (int i = 0; i < RIPPLE_SIZE; i++) {
      if (!ripples[i].freeze) { ripples[i].draw(); }
    }
  }
}

class CycleEffecter {
  boolean freeze = false;
  int x;
  int y;
  float a = 0;
  float[] t = new float[4];
  float[] n = { 0.25, 0.24, 0.23, 0.22 };

  CycleEffecter(int _x, int _y) {
    x = _x;
    y = _y;
    for (byte i = 0; i < 4; i++) { t[i] = 0; }
  }

  void freezing() {
    freeze = true;
  }

  void draw() {
    for (byte i = 0; i < 4; i++) {
      switch (i) {
        case 0:
          fill(128, 64, 64, 255 - a);
          break;
        case 1:
          fill(64, 128, 64, 255 - a);
          break;
        case 2:
          fill(64, 64, 128, 255 - a);
          break;
        case 3:
          fill(128, 128, 128, 255 - a);
          break;
      }
      rect(calX(i) + x, calY(i) + y, 10, 10);
      t[i] = t[i] + n[i];
    }
    a += 5;

    if (a > 255) { freeze = true; }
  }

  float calX(int i) {
    return 1.2 * (cos(t[i]) + t[i] * sin(t[i]));
  }

  float calY(int i) {
    return 1.2 * (sin(t[i]) - t[i] * cos(t[i]));
  }
}

class RippleEffecter {
  boolean freeze = false;
  int x;
  int y;
  int size = 0;

  RippleEffecter(int _x, int _y) {
    x = _x;
    y = _y;
  }

  void freezing() {
    freeze = true;
  }

  void draw() {
    stroke(0, 128, 0, 255 - size * 0.5);

    noFill();
    strokeWeight(5);
    ellipse(x, y, size, size);
    ellipse(x, y, size * 0.85, size * 0.85);
    strokeWeight(6);
    ellipse(x, y, size * 0.7, size * 0.7);
    strokeWeight(8);
    ellipse(x, y, size * 0.5, size * 0.5);
    strokeWeight(10);
    ellipse(x, y, size * 0.25, size * 0.25);
    size += 20;

    if (size > 500) { freeze = true; }
  }
}
/*
static class Controller {
  static void draw() {
    fill(128);
    rect(50, 260, 40, 40);
    rect(10, 300, 40, 40);
    rect(90, 300, 40, 40);
    rect(50, 340, 40, 40);
    rect(50, 300, 40, 40);
    ellipse(210, 330, 100, 100);
    ellipse(210, 330, 80, 80);
    fill(100);
    triangle(70, 270, 60, 290, 80, 290);
    triangle(20, 320, 40, 310, 40, 330);
    triangle(70, 370, 60, 350, 80, 350);
    triangle(120, 320, 100, 310, 100, 330);
    ellipse(70, 320, 20, 20);
    ellipse(210, 330, 90, 90);
    fill(128);
    ellipse(210, 330, 75, 75);
  }
}
*/

void keyPressed() {
  if (key == 'h' || keyCode == LEFT) { flagLeft = true; }
  else if (key == 'j' || keyCode == DOWN) { flagDown = true; }
  else if (key == 'k' || keyCode == UP) { flagRotate = true; }
  else if (key == 'l' || keyCode == RIGHT) { flagRight = true; }
}

void keyReleased() {
  if (key == 'j' || keyCode == DOWN) { flagDown = false; }
}

void mousePressed() {
  print("mouseX : " + mouseX);
  println("mouseY : " + mouseY);
  print("pmouseX : " + pmouseX);
  println("pmouseY : " + pmouseY);
  if (mouseX > 50 && mouseX < 90 && mouseY > 260 && mouseY < 300) { flagRotate = true; }
  if (mouseX > 10 && mouseX < 50 && mouseY > 300 && mouseY < 340) { flagLeft = true; }
  if (mouseX > 90 && mouseX < 130 && mouseY > 300 && mouseY < 340) { flagRight = true; }
  if (mouseX > 160 && mouseX < 260 && mouseY > 280 && mouseY < 380) { flagRotate = true; }
}
