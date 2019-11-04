document.addEventListener("DOMContentLoaded",appStart);

const colorsParent = document.querySelector('#colors');
let ctx;


function appStart() {
    const myCanvas = new Draw('canvas');

    
    document
        .querySelector('#square')
        .addEventListener('touchstart',()=>{
            myCanvas.brushShape = new Brush('square')
        });

    document
        .querySelector('#circle')
        .addEventListener('touchstart',()=>{
            myCanvas.brushShape = new Brush('circle')
        });
        
    document
        .querySelector('#slash')
        .addEventListener('touchstart',()=>{
            myCanvas.brushShape = new Brush('slash')
        })

    document
        .querySelector('#triangle')
        .addEventListener('touchstart',()=>{
            myCanvas.brushShape = new Brush('triangle')
        })

    document
        .querySelector('#plus')
        .addEventListener('click',(e)=> myCanvas.incrementSize());

     document
        .querySelector('#minus')
        .addEventListener('click',(e)=> myCanvas.decrementSize());
        
    colorsParent
        .addEventListener('touchstart',(e)=> myCanvas.chooseColor(e))

    document
        .querySelector('#darken')
        .addEventListener('click',()=> new Filter('canvas').darkenFilter())
        
}






