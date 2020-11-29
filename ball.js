class ball{
    constructor(x, y, radius){
        var options = {
          isStatic: false,
          restitution: 0.3,
          friction: 0.5,
          density: 1.5  
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
       rectMode(CENTER);
        var pos = this.body.position;
        fill(225);
        circle(pos.x, pos.y, this.radius);
    }
}