class Marker {

  PVector p, s;

  Marker(float _px, float _py, float _sx, float _sy) {
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
  }
}

