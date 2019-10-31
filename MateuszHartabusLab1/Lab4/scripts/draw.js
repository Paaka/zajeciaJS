/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
class Draw{
    constructor(element){
        this.canvas = document.querySelector(`#${element}`);
        this.ctx = this.canvas.getContext('2d');
        this.canvas.addEventListener('touchmove',(e)=> this.paintOnCavas(e));

        this.drawBackground()
    }

    paintOnCavas(e) {
        console.log(e)
        const X = e.touches[0].clientX - this.canvas.offsetLeft;
        const Y = e.touches[0].clientY - this.canvas.offsetTop;
     
        
        this.ctx.rect(X,Y, 10,10);
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fill();
     
     }

    drawBackground() {
        const image = new Image();
        image.src = "./img/img1.jpg"
        image.addEventListener('load', ()=>{
            this.ctx.drawImage(image,0,0);
        })
        
    }
}
