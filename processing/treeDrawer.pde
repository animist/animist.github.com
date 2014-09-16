Tree tree;
boolean debug = false;
boolean drawGen = true;
int _width = screen.width;
int _height = screen.height;

void setup() {
  frameRate(60);
  size(_width, _height);
  background(0);
  stroke(0);

  tree = new Tree(drawGen);
}

void draw() {
  if (drawGen) {
    if (tree.drawGen()) {
      background(0);
      tree = new Tree(drawGen);
    }
  } else {
    tree.before();

    tree.draw();

    if (debug) { tree.printDebug(); }

    if (tree.after()) {
      background(0);
      tree = new Tree(drawGen);
    }
  }
}

void mouseClicked() {
  debug = !debug;
}

class Tree {
  int layer;
  ArrayList<Branch> branchs = new ArrayList<Branch>();
  ArrayList<Branch> nextBranchs = new ArrayList<Branch>();
  int current, step, generation, limit;
  int childCount = 2;

  Tree(boolean _d) {
    Branch _fb;
    int _c = round(random(0, 5));
    if (_d) {
      limit = round(random(12, 20));
      _fb = new Branch(width / 2 + random(-150, 150), height / 2 + random(-100, 300), PI * random(0, 2), random(40, 128), limit, _c);
    } else {
      limit = round(random(12, 18));
      _fb = new Branch(width / 2 + random(-150, 150), height / 2 + random(-100, 300), PI * random(0, 2), random(32, 128), limit, _c);
    }
    //Branch _fb = new Branch(width / 2 + random(-150, 150), height / 2 + random(-100, 300), PI * random(0, 2), random(32, 64), random(6, 8), _c);
    branchs.add(_fb);
    current = 0;
    step = 1;
    generation = 1;
  }

  void before() {
    Branch currentBranch = branchs.get(current);

    if (currentBranch.notLast()) {
      Branch children[] = currentBranch.graft(childCount);

      for (int i = 0; i < childCount; i++) {
        nextBranchs.add(children[i]);
      }
    }
  }

  boolean after() {
    current++;
    if (current == branchs.size()) {
      current = 0;
      if (nextBranchs.size() == 0) {
        return true;
      }
      branchs.clear();
      for (int i = 0; i < nextBranchs.size(); i++) {
        branchs.add(nextBranchs.get(i));
      }
      nextBranchs.clear();
      generation++;
      step = branchs.size();
    }
    return false;
  }

  void draw() {
    Branch currentBranch = branchs.get(current);

    currentBranch.draw(generation);
  }

  boolean drawGen() {
    for (int i = 0; i < branchs.size(); i++) {
      Branch currentBranch = branchs.get(i);

      if (currentBranch.notLast()) {
        Branch children[] = currentBranch.graft(childCount);

        for (int j = 0; j < childCount; j++) {
          nextBranchs.add(children[j]);
        }
      }

      currentBranch.draw(generation);
      current = i;
    }
    return after();
  }

  void printDebug() {
    noStroke();
    fill(128);
    rect(0, 0, 150, 25);
    fill(32);
    textSize(9);
    text("generation : " + generation + " / " + limit
        + "\ncurrent : " + current + " / " + step,
        10, 0, 150, 30);
  }
}

class Branch {
  float startX;
  float startY;
  float angle;
  float lineLength;
  float lineWeight;
  int colorSelector;
  float endX, endY;
  //int step, current;

  Branch(float _sX, float _sY, float _a, float _l, float _w, int _c) {
    startX = _sX;
    startY = _sY;
    angle = _a;
    lineLength = _l;
    lineWeight = _w;
    colorSelector = _c;
    endX = startX + cos(angle) * lineLength;
    endY = startY + sin(angle) * lineLength;
  }

  boolean notLast() {
    return lineWeight - 1 > 0;
  }

  Branch[] graft(int childCount) {
    Branch children[] = new Branch[childCount];
    float _a[] = new float[childCount];
    //for (int i = 0; i < childCount; i++) {
    //  _a[i] 
    //}
    _a[0] = angle + PI * random(1.5, 2.1);
    _a[1] = angle + PI * random(1.9, 2.5);

    for (int i = 0; i < childCount; i++) {
      children[i] = new Branch(endX, endY, _a[i], lineLength * 0.95, lineWeight - 1, colorSelector);
    }
    return children;
  }

  void draw(int generation) {
    strokeWeight(lineWeight);
    stroke(branchColor());
    line(startX, startY, endX, endY);
  }

  color branchColor() {
    switch (colorSelector) {
    //switch ((colorSelector + generation) % 3) {
      case 0:
        return color(lineLength * random(2, 4), lineLength * random(0, 1), lineLength * random(1, 2), 128);
      case 1:
        return color(lineLength * random(0, 1), lineLength * random(2, 4), lineLength * random(1, 2), 128);
      case 2:
        return color(lineLength * random(1, 2), lineLength * random(0, 1), lineLength * random(2, 4), 128);
      case 3:
        return color(lineLength * random(3, 4), lineLength * random(3, 4), lineLength * random(3, 4), 50);
      case 4:
        return color(lineLength * random(2, 4), lineLength * random(1, 3), lineLength * random(1, 3), 128);
      case 5:
        return color(lineLength * random(2, 3), lineLength * random(1, 2), lineLength * random(2, 4), 128);
    }
    return color(128, 128, 128);
  }
}
