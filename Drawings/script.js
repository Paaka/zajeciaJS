let canvas;
let brushShape = new Brush('square');



document.addEventListener('DOMContentLoaded', appStart);

function appStart(){
    const myPs = new Photoshop('canvas')

    document
        .querySelector('#squareBtn')
        .addEventListener('touchstart', () => {
            myPs.brushShape = new Brush('square')
        })

    document
        .querySelector('#circleBtn')
        .addEventListener('touchstart', () => {
            myPs.brushShape = new Brush('circle')
        })
}



