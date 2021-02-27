class Ball{
    constructor(){
        var option={
            restitution:1
        }
        this.body=Bodies.circle(600,0,40,40,option)
        World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,40,40)
        
    }
}