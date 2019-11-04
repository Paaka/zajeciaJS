document.addEventListener("DOMContentLoaded",appStart);

const colorsParent = document.querySelector('#colors');
const filterParent = document.querySelector('#filters');
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
        .addEventListener('touchstart',(e)=> myCanvas.chooseColor(e));

    filterParent
        .addEventListener('touchstart',(ev)=> new Filter('canvas', ev).chooseFilter());

    // document
    //     .querySelector('#darken')
    //     .addEventListener('click',()=> new Filter('canvas').darkenFilter());

    // document
    //     .querySelector('#lighter')
    //     .addEventListener('click',()=> new Filter('canvas').lighterFilter());

    // document
    //     .querySelector('#moreRed')
    //     .addEventListener('click',()=> new Filter('canvas').redFilter());
        
}






