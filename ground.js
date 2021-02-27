class Ground{
    constructor(){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(600,380,1200,20,option)
        World.add(world,this.body);
    }

    display(){
        push()
        rectMode(CENTER)
        fill("brown")
        rect(this.body.position.x,this.body.position.y,1200,20)
        pop()
    }
}