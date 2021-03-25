class DustBin{
constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(this.body.position.x, this.body.position.y);
    rectMode(CENTER);
    strokeWeight(3);
    fill(255,0,255);
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
}