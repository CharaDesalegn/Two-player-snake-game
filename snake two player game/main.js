const canvas = document.getElementById("canvas")
const player_1_display = document.getElementById("p1")
const player_2_display = document.getElementById("p2")

const width = 1000
const height = 500
const w = 10
const fps = 10
let game_over = false

canvas.width = width
canvas.height = height


const ctx = canvas.getContext("2d")


const eat_sound = new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav");
const game_over_sound = new Audio("http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/theygotcha.ogg");
const back_ground_music = new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3");
back_ground_music.loop = true; // repeats forever
back_ground_music.volume = 0.7; // 0.0 to 1.0
back_ground_music.play();

player_1 = new Cell()
player_1.x = 0
player_1.type = "head"
player_1.color = "#00FF00"
player_1.child_color = "#228B22"


player_2 = new Cell()
player_2.x = w * (width/w -1)
player_2.type = "head"
player_2.color = "#1E90FF"
player_2.child_color = "#00008B"


const player_1_body = [player_1]
const player_2_body = [player_2]
const all_foods = []

add_body(player_1_body,2)
add_body(player_2_body,2)



document.onkeydown = function (e) {
    if(e.keyCode == 65 && player_1.dir[0] != w){ // left
        player_1.dir[0] = -w
        player_1.dir[1] = 0
    }else if(e.keyCode == 87 && player_1.dir[1] != w){ // up 
        player_1.dir[0] = 0
        player_1.dir[1] = -w
    }else if(e.keyCode == 68 && player_1.dir[0] != -w){ // right
        player_1.dir[0] = w
        player_1.dir[1] = 0
    }else if(e.keyCode == 83 && player_1.dir[1] != -w){ // down
        player_1.dir[0] = 0
        player_1.dir[1] = w
    }

    if(e.keyCode == 37 && player_2.dir[0] != w){ // left
        player_2.dir[0] = -w
        player_2.dir[1] = 0
    }else if(e.keyCode == 38 && player_2.dir[1] != w){ // up 
        player_2.dir[0] = 0
        player_2.dir[1] = -w
    }else if(e.keyCode == 39 && player_2.dir[0] != -w){ // right
        player_2.dir[0] = w
        player_2.dir[1] = 0
    }else if(e.keyCode == 40 && player_2.dir[1] != -w){ // down
        player_2.dir[0] = 0
        player_2.dir[1] = w
    }
};

function movement_and_drawing_of_each_snake_body(){
    for(let cell of player_1_body){
        if(cell.type == "body"){
            cell.pre_pos = [cell.x,cell.y]
            cell.y = cell.next.pre_pos[1]
            cell.x = cell.next.pre_pos[0]
            cell.draw()
        }
    }
    for(let cell of player_2_body){
        if(cell.type == "body"){
            cell.pre_pos = [cell.x,cell.y]
            cell.y = cell.next.pre_pos[1]
            cell.x = cell.next.pre_pos[0]
            cell.draw()
        }
    }
}

function food_collotion_process(){
    for(food of all_foods){
        food.draw()
        if(food.x == player_1.x && food.y == player_1.y){
            for(let m = 0;m<all_foods.length;m++){
                if(all_foods[m]==food){
                    all_foods.splice(food,1)
                }
            }
            eat_sound.play()

            add_food()
            add_body(player_1_body,10)
        }
        if(food.x == player_2.x && food.y == player_2.y){
            for(let m = 0;m<all_foods.length;m++){
                if(all_foods[m]==food){
                    all_foods.splice(food,1)
                }
            }
            eat_sound.play()

            add_food()
            add_body(player_2_body,10)
        }
    }
}


add_food()


function update(){
    ctx.clearRect(0,0,width,height)
    player_1_display.innerText = "Player1: " + player_1_body.length
    player_2_display.innerText = "Player2: " + player_2_body.length
    movement_and_drawing_of_each_snake_body()
    food_collotion_process()
    player_1.update()
    player_2.update()
    draw_grid()
}


setInterval(()=>{
    if(!game_over){
        update()
    }
},1000/fps)