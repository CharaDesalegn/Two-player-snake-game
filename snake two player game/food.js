class Food{
    constructor(){
        this.x = 0
        this.y = 0
        this.color = "#FF0000"
    }
    draw(){
        ctx.beginPath()
        ctx.rect(this.x,this.y,w,w)
        ctx.fillStyle = this.color
        ctx.fill()
    }
}