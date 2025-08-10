class Cell{
    constructor(){
        this.x = 100
        this.y = 0
        this.dir = [0,w]
        this.type = "body"
        this.next = null
        this.color = "#228B22"
        this.child_color = ""
        this.pre_pos = [this.x,this.y]
    }

    update(){
        this.draw()
        this.move()    
        this.check_border()
        this.check_collotion()
    }
    move(){
        this.pre_pos = [this.x,this.y]
        this.x += this.dir[0]
        this.y += this.dir[1]
    }
    draw(){
        ctx.beginPath()
        ctx.rect(this.x,this.y,w,w)
        ctx.fillStyle = this.color

        ctx.fill()

    }
    check_border(){
        // checks the horizontal border
        if(this.x < 0){
            this.x = (w *(width/w -1 ))
        }else if(this.x > (w *(width/w -1 ))){
            this.x = 0
        }

        // checks the vertical border

        if(this.y < 0){
            this.y = (w *(height/w -1 ))
        }else if(this.y > (w *(height/w -1 ))){
            this.y = 0
        }



    }
    check_collotion(){
        for(let body of player_1_body){
            if(this != body){
                if(this.x == body.x && this.y == body.y){
                    console.log("Game Over")
                    back_ground_music.pause()
                    game_over_sound.play()
                    game_over = true
                }
            }
        }
        for(let body of player_2_body){
            if(this != body){
                if(this.x == body.x && this.y == body.y){
                    console.log("Game Over")
                    back_ground_music.pause()
                    game_over_sound.play()
                    game_over = true
                }
            }
        }

    }
}