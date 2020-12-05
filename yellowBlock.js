class yellowblock {
    constructor(x,y,width,height) {
      var options = {
          isStatic:false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visibility=255
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
    }
    else{
      World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     fill("yellow")
     tint(255,this.Visiblity);
    
     pop();
   }
    }
    score(){
      if (this.Visiblity < 0 && this.Visiblity >-105){
        score++;
      }
    }
  }
  