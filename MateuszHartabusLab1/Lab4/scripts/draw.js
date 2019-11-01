/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
class Draw{
    constructor(element){
        this.canvas = document.querySelector(`#${element}`);
        this.ctx = this.canvas.getContext('2d');
        this.color = "black";
        this.brushShape = 'square';
        this.canvas.addEventListener('touchmove',(e)=> this.paintOnCavas(e));

        this.drawBackground()
    }

    paintOnCavas(e) {
        const X = e.touches[0].clientX - this.canvas.offsetLeft;
        const Y = e.touches[0].clientY - this.canvas.offsetTop;
        
        const brush = new Brush(this.brushShape);
        this.brushShape = brush.getBrush();
        
        if(this.brushShape ==='square'){
            this.ctx.beginPath();
            this.ctx.rect(X,Y, 10,10);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        }else if(this.brushShape ==='circle'){
            this.ctx.beginPath();
            this.ctx.arc(X,Y, 5,0,Math.PI*2,false);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        }
        
     
        
     
     }

    drawBackground() {
        const image = new Image();
        image.src = "./img/img1.jpg"
        image.addEventListener('load', ()=>{
            this.ctx.drawImage(image,0,0);
        })
        
    }

    chooseColor(e){
        console.log(e.target)
        if(e.target !== e.currentTarget){ //btn różny od parenta
            this.color = e.target.value
        }
        e.stopPropagation();
    }

    
}

