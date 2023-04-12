const canvas = document.querySelector('#game')
const context = canvas.getContext('2d')
const btnArriba = document.querySelector('#arriba')
const btnAbajo = document.querySelector('#abajo')
const btnDerecha = document.querySelector('#derecha')
const btnIzquierda = document.querySelector('#izquierda')

window.addEventListener('load',setCanvasSize)
window.addEventListener('resize',setCanvasSize)

let canvasSize;
let elementsSize;

const playerPosition = {
    x:undefined,
    y:undefined,
}
const regaloPosition ={
    x:undefined,
    y:undefined,
}

function startGame() {

    context.font = elementsSize+'px Verdana'
    context.textAlign = 'right';

    const map = maps[0]
    const mapRows = map.trim().split('\n')
    const mapCols = mapRows.map(row => row.trim().split(''))

    context.clearRect(0,0,canvasSize,canvasSize)
    mapCols.forEach((row, rowi) => {
        row.forEach((col, coli) =>{
            console.log(col);
            const posX= elementsSize*(coli+1.2);
            const posY = elementsSize*(rowi+1);

            if (col == 'O') {
                if (!playerPosition.x && !playerPosition.y) {
                    playerPosition.x= posX
                    playerPosition.y=posY
                    console.log(playerPosition);
                }
            }
            if (col == 'I') {
                regaloPosition.x = posX
                regaloPosition.y = posY

            }
            context.fillText(emojis[col],posX,posY)
        })
    });
    // for (let i = 1; i <= 10; i++) {
    //     for (let e = 1; e <= 10; e++) {
    //         context.fillText(emojis[mapCols[e-1][i-1]],elementsSize*i,elementsSize*e)
    //     }
    // }
    moverJugador()
}
function setCanvasSize() {

    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.7
    }else{
        canvasSize = window.innerHeight * 0.7

    }
    canvas.setAttribute('width',canvasSize)
    canvas.setAttribute('height',canvasSize)

    elementsSize = canvasSize / 10

    startGame()
}

btnArriba.addEventListener('click',moverArriba)
btnIzquierda.addEventListener('click',moverIzquierda)
btnDerecha.addEventListener('click',moverDerecha)
btnAbajo.addEventListener('click',moverAbajo)

window.addEventListener('keydown', mover)

function mover(event) {
    console.log(event.key);
    if (event.key == 'ArrowUp') {
        moverArriba();
    }else  if (event.key == 'ArrowDown') {
        moverAbajo();
    }else  if (event.key == 'ArrowRight') {
        moverDerecha();
    }else  if (event.key == 'ArrowLeft') {
        moverIzquierda();
    }
}

function moverArriba(params) {
    if (!((playerPosition.y - elementsSize) < 0)) {
        playerPosition.y -= elementsSize;
        startGame()
    }
}
function moverIzquierda(params) {
    if (!((playerPosition.x - elementsSize) < elementsSize)) {
    playerPosition.x -= elementsSize;
    startGame()
    }
}
function moverDerecha(params) {
    if (!((playerPosition.x + elementsSize) > (canvasSize+elementsSize))) {
    playerPosition.x += elementsSize;
    startGame()
    }
}
function moverAbajo(params) {
    if (!((playerPosition.y + elementsSize) > (canvasSize))) {
    playerPosition.y += elementsSize;
    startGame()
    }
}
function moverJugador() {
    if (playerPosition.x != undefined && regaloPosition.x != undefined && playerPosition.y != undefined && regaloPosition.y != undefined) {
        if (playerPosition.x.toFixed(5) == regaloPosition.x.toFixed(5) && playerPosition.y.toFixed(5) == regaloPosition.y.toFixed(5)) {
            alert('Colision')
        }
    } 
    context.fillText(emojis['PLAYER'],playerPosition.x,playerPosition.y)

}