/* eslint-disable no-undef */
class Draw{
    constructor(element){
        this.canvas = document.querySelector(`#${element}`);
        this.canvas.addEventListener('touchmove',(e)=> this.paintOnCavas(e, 'value', 'color'));
    }

    paintOnCavas(e, value, color) {
        console.log(e)
        const X = e.touches[0].clientX - this.canvas.offsetLeft;
        const Y = e.touches[0].clientY - this.canvas.offsetTop;
     
        ctx.rect(X,Y, 10,10);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
     
     }
}

