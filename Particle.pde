class Particle {
  PVector[] AEpath = new PVector[counterMax];

  PVector p, s;

  Particle(float _px, float _py, float _sx, float _sy) {
    p = new PVector(_px, _py);
    s = new PVector(_sx, _sy);
  }

  void update() {
    //
  }

  void render() {
    ellipseMode(CENTER);
    ellipse(p.x, p.y, s.x, s.y);
  }

  void run() {
    update();
    render();
    if(counter<counterMax){
      AEpath[counter] = new PVector((p.x/sW)*dW,(p.y/sH)*dH);
    }
  }
}

