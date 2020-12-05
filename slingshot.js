class slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 5
        }
        this.slingshot = Constraint.create(options);
        this.pointB=pointB
        World.add(world, this.slingshot);
    }
    attach(body){
        this.slingshot.bodyA = body;
    }
    
    fly(){
        this.slingshot.bodyA = null;
    }

    display(){      
    
    if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        fill("lightgreen")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}