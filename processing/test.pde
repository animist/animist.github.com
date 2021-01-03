int roses = 0;
int maxRoses = 80;
Rose[] r = new Rose[maxRoses];
int frame = 0;
int frameRates = 8;
int _width = screen.width;
int _height = screen.height;
int _minSize = _width / 10 < 30 ? 30 : _width / 10;
int _maxSize = _width / 5 > 300 ? 300 : _width / 10;
int m = 0;

void setup() {
  size(_width, _height);
  maxRoses = int(_width * _height / 15000);
  frameRate(frameRates);
  smooth();
  noStroke();
  background(0);

  for (int i = 0; i < maxRoses; i++) {
    r[i] = new Rose(new Point(random(0,_width), random(0,_height)), random(100, 300), new Point(_width, _height));
  }
}

void update() {
  roses++;
  if (roses > maxRoses) {
    roses = maxRoses;

    for (int i = 0; i < maxRoses; i++) {
      if (r[i].over) {
        for (int k = i; k < maxRoses; k++) {
          r[k] = r[k + 1];
        }
        r[maxRoses - 1] = new Rose(new Point(random(0,_width), random(0,_height)), random(100, 300), new Point(_width, _height));
      }
    }

    /*
    if (millis() - m > 15000) {
      roses = 0;
      for (int i = 0; i < maxRoses; i++) {
        r[i] = new Rose(new Point(random(0,_width), random(0,_height)), random(100, 300), new Point(_width, _height));
      }
    }
    */
  } else {
    m = millis();
  }
}

void draw() {
  update();
  background(0);

  for (int i = 0; i < roses; i++) {
    r[i].update(frame);
  }
  frame++;
  if (frame == frameRates) { frame = 0; }

  //println(looping);
  //noLoop();
}

class Color {
  float r, g, b, a = 0.0;
  Color (float _r, float _g, float _b, float _a) {
    r = _r;
    g = _g;
    b = _b;
    a = _a;
  }
}

class Point {
  float x, y = 0.0;
  Point (float _x, float _y) {
    x = _x;
    y = _y;
  }
}

class Rose {
  Point point;
  float size = 0.0;
  int blur = 0;
  char maxRolls = 15;
  char rolls = 0;
  char maxPetals = 15;
  char petals = 1;
  Color[] colors = new Color[maxRolls];
  Point[][] points = new Point[maxRolls][maxPetals];
  float[][] sizes = new float[maxRolls][maxPetals];
  Point limit;
  int xSpeed = 0;
  int ySpeed = 0;
  int speedRange = 8;
  bool over = false;

  Rose(Point _point, float _size, Point _limit) {
    point = _point;
    size = _size;
    limit = _limit;
    xSpeed = random(-1 * speedRange, speedRange);
    xSpeed = xSpeed == 0 ? 1 : xSpeed;
    ySpeed = random(-1 * speedRange, speedRange);
    ySpeed = ySpeed == 0 ? 1 : ySpeed;

    this.init(_point, _size);
  }

  void init(Point _point, float _size) {
    rolls = 0;
    petals = 1;
    for (char i = 0; i < maxRolls; i++) {
      float centerRange = 0.1 + 0.01 * i * 2;
      float __size = i == 0 ? _size : sizes[i - 1][0] * (1 - centerRange);

      if (i % 2 == 0) {
        colors[i] = new Color(random(150,255), random(150), random(150), 180 - i * i);
        //colors[i] = new Color(random(150), random(150,255), random(150), 180 - i * i);
        //colors[i] = new Color(random(150), random(150), random(150,255), 180 - i * i);
      } else {
        colors[i] = new Color(0, 0, 0, 40);
      }

      for (char k = 0; k < maxPetals; k++) {
        float _x = random(__size * centerRange);
        float _y = random(__size * centerRange);
        points[i][k] = new Point(_x + point.x, _y + point.y);
        sizes[i][k] = random(__size - __size * centerRange, __size + __size * centerRange);
      }
    }
  }

  void update(int _frame) {
    //for (char i = 0; i < (_frame > rolls ? rolls : _frame); i++) {
    for (char i = 0; i < rolls; i++) {
      float centerRange = 0.1 + 0.01 * i * 2;

      fill(colors[i].r, colors[i].g, colors[i].b, colors[i].a);
      blur = floor((maxRolls - i) / 3);

      for (char k = 0; k < petals; k++) {
        points[i][k].x += xSpeed;
        points[i][k].y += ySpeed;
        ellipse(points[i][k].x += random(-1 * blur, blur), points[i][k].y += random(-1 * blur, blur), sizes[i][k], sizes[i][k]);
      }
      petals+=3;
      if (petals > maxPetals) { petals = maxPetals; }
    }
    rolls+=3;
    if (rolls > maxRolls) { rolls = maxRolls; }
    if ((points[0][0].x < -1 * size) || (points[0][0].x > size + limit.x) || (points[0][0].y < -1 * size) || (points[0][0].y > size + limit.y))
    {
       over = true;
    }
    int dice = random(1, 3);
    if (dice == 1) { xSpeed--; ySpeed--; }
    if (dice == 3) { xSpeed++; ySpeed++; }
  }
}
