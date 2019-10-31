document.addEventListener("DOMContentLoaded",appStart);

let canvas;
let ctx;


function appStart() {
    canvas = document.querySelector('#canvas');
    ctx = canvas.getContext('2d');

    document
        .querySelector('#darken')
        .addEventListener('click',()=> darkenFilter())
        
    drawImage();

    canvas.addEventListener('touchmove', paintOnCavas)
}

function drawImage() {
    const image = new Image();
    image.src = "./img/img1.jpg"
    image.addEventListener('load', ()=>{
        ctx.drawImage(image,0,0);
    })
    
}

function darkenFilter(amount = 30){
    
    const canvasData = ctx.getImageData(0,0, 300, 200);
    
    for(let i=0; i<canvasData.data.length;i+=4){
        canvasData.data[i] -= amount;
        canvasData.data[i+1] -= amount;
        canvasData.data[i+2] -= amount;
    }
    console.log(canvasData);
    ctx.putImageData(canvasData, 0,0)
}

function paintOnCavas(e) {
   const X = e.touches[0].clientX - this.offsetLeft;
   const Y = e.touches[0].clientY - this.offsetTop;

   console.log(this.offsetLeft);
   ctx.rect(X,Y, 10,10);
   ctx.fillStyle = "#FF0000";
   ctx.fill();
    
}