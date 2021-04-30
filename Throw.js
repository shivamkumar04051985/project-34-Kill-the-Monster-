class Throw{
    constructor(A, B){
        var options = {
            bodyA: A,
            pointB:B,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=B;
        this.throw = Matter.Constraint.create(options);
        World.add(world, this.throw);
    }

    fly(){
        this.throw.bodyA=null;
    }

    Launch(bodyA){
        this.throw.bodyA=bodyA;
    }

    display(){
        if(this.throw.bodyA){ var a = this.throw.bodyA.position;
            var b = this.pointB;
     
            strokeWeight(2);
            line(a.x,a.y,b.x,b.y);
     
           }
    }
}