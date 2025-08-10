function draw_grid(){
    for(let i = 0; i < width/w;i++){
        ctx.beginPath()
        ctx.moveTo(i*w,0)
        ctx.lineTo(i*w,height)
        ctx.strokeStyle = "#2A2A2A"
        ctx.stroke()
    }
    for(let i = 0; i < height/w;i++){
        ctx.beginPath()
        ctx.moveTo(0,i*w)
        ctx.lineTo(width,i*w)
        ctx.strokeStyle = "#2A2A2A"
        ctx.stroke()
    }
        
}
function rand(range){
    return Math.floor(Math.random()*range)
}

function add_food(){
    let f = new Food()
    f.x = w * rand(width/w)
    f.y = w * rand(height/w)
    all_foods.push(f)
}

function add_body(list_to_add,amount = 1){
    for(let i = 0;i<amount;i++){
            let b = new Cell()
            b.next = list_to_add[list_to_add.length -1]
            b.x = [list_to_add.length -1].x
            b.color = list_to_add[0].child_color
            list_to_add.push(b)
    }
}

