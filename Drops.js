class Drops {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution : 0.1,
          friction : 0.001
      }
      this.body = Bodies.rectangle(x,y,5,5,options);
      this.width = 5
      this.height = 5
      World.add(world, this.body);
    }
    updateY(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }

    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("blue");
      ellipse( pos.x, pos.y, this.width, this.height);
    }
  };
