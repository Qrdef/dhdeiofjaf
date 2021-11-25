class PlayerArrow{

    constructor(a,b,c,d,archerAngle)
    {
    var options={
       isStatic:true,
       density:1.0
    }
    this.x=a;
    this.y=b;
    this.w=c;
    this.h=d;
    this.archerAngle=archerAngle
    this.body=Bodies.rectangle(a,b,c,d,options)
    this.image=loadImage("assets/arrow.png")
    this.velocity=p5.Vector.fromAngle(archerAngle)
    World.add(world,this.body);
    }
    remove(index)
    {
    this.isRemoved=true
    Matter.World.remove(world,this.body)
    delete playerArrows[index]
    
    
    
    }
    shoot(archerAngle)
    {
    //archerAngle+=90
    //this.velocity=p5.Vector.fromAngle(archerAngle*(3.14/180))
    this.velocity=p5.Vector.fromAngle(archerAngle+PI/2)
    this.velocity.mult(55)
Matter.Body.setVelocity(this.body,{
x:this.velocity.x,
y:this.velocity.y

})
Matter.Body.setStatic(this.body,false)
    }
    
    display()
    {
    var tempAngle
    if(this.body.velocity.y==0)
    {
    tempAngle=this.archerAngle+PI/2

    }
    else{
     Math.atan(this.body.velocity.y/this.body.velocity.x)

    }
    Matter.Body.setAngle(this.body,tempAngle)
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