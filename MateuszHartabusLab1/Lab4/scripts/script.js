document.addEventListener("DOMContentLoaded",appStart);

let ctx;


function appStart() {
    
    ctx = canvas.getContext('2d');

    const idk = new Draw('canvas');

    document
        .querySelector('#darken')
        .addEventListener('click',()=> darkenFilter())
        
    drawImage();

    
}

function drawImage() {
    const image = new Image();
    image.src = "./img/img1.jpg"
    image.addEventListener('load', ()=>{
        ctx.drawImage(image,0,0);
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


