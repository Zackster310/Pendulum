class Circle{
    constructor(x,y,radius){
        var options = {
            //isStatic : true
        }

        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);

        this.radius = radius;
    }
    display(){
        var pos = this.body.position;
        ellipse(pos.x,pos.y,this.radius);
    }
}