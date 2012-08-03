class Particle {
  ArrayList AEpath, AEscale;

  PVector p, s;
  
  PImage img;

  Particle(float _px, float _py, float _sx, float _sy, PImage _img) {
    p = new PVector(_px, _py);
    s = new PVector(_sx, _sy);
    img = _img;
    AEpath = new ArrayList();
    AEscale = new ArrayList();
  }

  void update() {
    if(record){
      AEpath.add(new PVector((p.x/sW)*dW,(p.y/sH)*dH));
      AEscale.add(new PVector(s.x,s.y));
    }
  }

  void render() {
    imageMode(CENTER);
    image(img, p.x, p.y, s.x, s.y);
    /*
    ellipseMode(CENTER);
    ellipse(p.x, p.y, s.x, s.y);
    */
  }

  void run() {
    update();
    render();
  }
}

