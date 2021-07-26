class cannonballs{
    constructor(x,y){
        var options={
            friction:0.8,
            restitution:1.0,
            density:1.0,
            isStatic:true
        }
        this.image = loadImage("assets/cannonball.png");
        this.radius=40;
        this.body = Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)
        pop();

    }
}