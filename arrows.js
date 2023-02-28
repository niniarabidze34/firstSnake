export let directionX = 0;
export let directionY = 0;

const arrowsCodes = {
    Up : 38,
    Down : 40,
    Left : 37,
    Rigth : 39
}

export function handleKeys(e){
    if(e.keyCode === arrowsCodes.Up){
        if( directionY == 1) return;
        directionY = -1
        directionX = 0 // მარტო ზევით ადის
    }else if(e.keyCode === arrowsCodes.Down){
        if( directionY == -1) return;
        directionY = 1
        directionX = 0 
    }else if(e.keyCode === arrowsCodes.Left){
        if( directionX == 1) return;
        directionY = 0
        directionX = -1
    }else if(e.keyCode === arrowsCodes.Rigth){
        if( directionX == -1) return;
        directionY = 0
        directionX = 1
    }
}

