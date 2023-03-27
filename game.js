const canvas = document.querySelector('#game')
const context = canvas.getContext('2d')

window.addEventListener('load',setCanvasSize)
window.addEventListener('resize',setCanvasSize)

let canvasSize;
let elementsSize;


function startGame() {

    context.font = elementsSize+'px Verdana'
    context.textAlign = 'right';

    const map = maps[0]
    const mapRows = map.trim().split('\n')
    const mapCols = mapRows.map(row => row.trim().split(''))

    mapCols.forEach((row, rowi) => {
        row.forEach((col, coli) =>{
            console.log(col);
            const posX= elementsSize*(coli+1.2);
            const posY = elementsSize*(rowi+1);
            context.fillText(emojis[col],posX,posY)
        })
    });
    // for (let i = 1; i <= 10; i++) {
    //     for (let e = 1; e <= 10; e++) {
    //         context.fillText(emojis[mapCols[e-1][i-1]],elementsSize*i,elementsSize*e)
    //     }
    // }
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