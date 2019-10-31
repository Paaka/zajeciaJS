document.addEventListener("DOMContentLoaded",appStart);

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
        })

    document
        .querySelector('#circle')
        .addEventListener('touchstart',()=>{
            myCanvas.brushShape = new Brush('circle')
        })
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


