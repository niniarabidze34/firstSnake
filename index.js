import { handleKeys, directionX, directionY } from "./arrows.js";
import { start,photo, canvas, ctx, restart,speed,tileCount,tileSize,snakeBody} from "./constants.js";


start.addEventListener('click', () => {
    start.style.display = 'none'
    photo.style.display = 'none'
    canvas.style.display = 'flex'
    restart.style.display = 'flex'
})

restart.addEventListener('click', () => {
   location.reload()
})

// game

// parameters
let snakeX = 10;
let snakeY = 10;
let snakeTailLen = 0;

let appleX = 5;
let appleY = 5;

let Score = 0


function startGame(){
    changeSnakeDirection();

    let gameEnd = GameOver()
    if(gameEnd) return;

    playArea()

    appleRandomPop();
    scoreSystem();

    createApple();
    createSnake();

    colorBackground();

    setTimeout(startGame , 1000/ speed )
}


function GameOver(){
    let end = false;

    //wallCrush
    if(snakeX < 0 || snakeX >= tileCount || snakeY < 0 || snakeY >= tileCount){
        end = true
    }
    // itselfCrush
    for(let el of snakeBody){
        if(el.x === snakeX && el.y === snakeY){
            end = true;
            break;
        }
    }

    if(end){
        ctx.fillStyle = "white"
        ctx.font = "50px arial"
        ctx.fillText('GAME OVER', 50,200)
    }
    return end;
}


function playArea(){
    ctx.fillRect(0,0,400,400)
}
function colorBackground(){
    ctx.fillStyle = "#000000";
}
function scoreSystem(){
    ctx.fillStyle = "white"
    ctx.font = "20px serif"
    ctx.fillText("Score "+ Score, 330, 20)
}

class snakeBodyPart {
    constructor(x,y){
        this.x = x,
        this.y = y
    }
}

function createSnake(){
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(snakeX * tileCount,snakeY * tileCount,tileSize,tileSize)

    ctx.fillStyle = "#03750a";
    for(let el of snakeBody){
        ctx.fillRect(el.x * tileCount, el.y * tileCount, tileSize,tileSize)
    }

    snakeBody.push(new snakeBodyPart(snakeX,snakeY))
    if(snakeBody.length > snakeTailLen){
        snakeBody.shift()
    }
}
 
function changeSnakeDirection(){
    snakeX += directionX;
    snakeY += directionY;
}

function createApple(){
    ctx.fillStyle = "red";
    ctx.fillRect(appleX* tileCount,appleY*tileCount,tileSize,tileSize)
}

function appleRandomPop(){
    if(snakeX === appleX && snakeY === appleY){
        appleX = Math.floor(Math.random() * tileCount)
        appleY = Math.floor(Math.random() * tileCount)
        snakeTailLen ++
        Score ++
    }
}


window.addEventListener('keydown', handleKeys)


startGame()

