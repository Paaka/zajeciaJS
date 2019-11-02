document.addEventListener("DOMContentLoaded",appStart);

const colorsParent = document.querySelector('#colors');
let ctx;


function appStart() {
    const myCanvas = new Draw('canvas');

    document
        .querySelector('#darken')
        .addEventListener('click',()=> darkenFilter())
        
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
        .querySelector('#plus')
        .addEventListener('click',(e)=> myCanvas.incrementSize());

     document
        .querySelector('#minus')
        .addEventListener('click',(e)=> myCanvas.decrementSize());
        
    colorsParent
        .addEventListener('touchstart',(e)=> myCanvas.chooseColor(e))
}



function darkenFilter(amount = 30){
    
    const canvasData = ctx.getImageData(0,0, 800, 600);
    
    for(let i=0; i<canvasData.data.length;i+=4){
        canvasData.data[i] -= amount;
        canvasData.data[i+1] -= amount;
        canvasData.data[i+2] -= amount;
    }
    console.log(canvasData);
    ctx.putImageData(canvasData, 0,0)
}


