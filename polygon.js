class polygon{
    constructor(x,y,width,height){
      var options={
          isStatic:false,
          resitution:0.8,
          friction:1,
          density:1
      }
      this.body=Bodies.rectangle(x,y,width,height,options)
      this.width=width
      this.height=height
      this.image=loadImage("polygon.png")
      World.add(world,this.body)

    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}