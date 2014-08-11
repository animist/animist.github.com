Field field;
MinoFactory minoFactory = new MinoFactory();
Mino activeMino;
Mino nextMino;
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
  field = new Field();
  activeMino = minoFactory.createMino();
  activeMino.set(field);
  nextMino = minoFactory.createMino();
}

void update() {
  if (activeMino.freeze) {
    activeMino = nextMino;
    nextMino = minoFactory.createMino();

    if (!activeMino.set(field)) {
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

  field.draw();
  activeMino.draw();
  nextMino.drawNext();
  field.printScore();
  //Controller.draw();
}

class Field {
  int x = 40;
  int y = 30;
  int blockSize = 10;
  byte width = 10;
  byte height = 20;
  int score = 0;
  byte speed = 30;

  byte[][] fieldCells = new byte[height][width];

  Field() {
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

  boolean set(Field _f) {
    field = _f;
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
