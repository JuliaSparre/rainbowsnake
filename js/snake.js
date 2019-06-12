class Snake {

  constructor() {
    this.body = [];
    this.body[0] = createVector(floor(w / 2), floor(h / 2));
    this.xdir = 0;
    this.ydir = 0;
    this.length = 0;
  }

  update() {
    let head = this.getHead();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
  }

  show() {
    for(let i = 0; i < this.body.length; i++) {
      colorMode(HSB);
      fill((100 + 8*i)%360, 150, 90);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1);
    }
  }

  eat(pos) {
    let x = this.getHead().x;
    let y = this.getHead().y;
    if(x == pos.x && y == pos.y) {
      this.grow();
      return true;
    }
    return false;
  }

  grow() {
    let head = this.getHead();
    this.length++;
    this.body.push(head);
  }

  setDir(x,y) {
    this.xdir = x;
    this.ydir = y;
  }

  getHead() {
    return this.body[this.body.length -1].copy();
  }

  endGame() {
    let x = this.getHead().x;
    let y = this.getHead().y;
    if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
      return true;
    }

    for (let i = 0; i < this.body.length -1; i++) {
      let part = this.body[i];
      if (part.x === x && part.y === y) {
        return true;
      }
    }
    return false;
  }
}