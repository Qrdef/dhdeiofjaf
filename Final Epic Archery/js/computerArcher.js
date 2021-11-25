class CompArcher{

    constructor(a,b,c,d)
    {
    var options={
       isStatic:true 
    }
    this.x=a;
    this.y=b;
    this.w=c;
    this.h=d;
    this.body=Matter.Bodies.rectangle(a,b,c,d,options)
    this.image=loadImage("assets/playerArcher.png")
    World.add(world,this.body);
    Matter.Body.setAngle(this.body,PI/2)//-90 degrees
    }
    
    
    display()
    {
    var pos=this.body.position
    var angle=this.body.angle
    push();
    translate(pos.x,pos.y);
    rotate(angle)
    imageMode(CENTER) 
    image(this.image,0,0,this.w,this.h)
    pop();
    
    
    }
    
    
    
    
    
    }