/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
class Draw{
    constructor(element){
        this.canvas = document.querySelector(`#${element}`);
        this.ctx = this.canvas.getContext('2d');
        this.color = "black";
        this.brushShape = 'square';
        this.size = 10;

        this.canvas.addEventListener('touchmove',(e)=> this.paintOnCavas(e));
        this.drawBackground()
    }

    paintOnCavas(e) {
        const X = e.touches[0].clientX - this.canvas.offsetLeft;
        const Y = e.touches[0].clientY - this.canvas.offsetTop;
        
        const brush = new Brush(this.brushShape);
        this.brushShape = brush.getBrush();
        this.drawShape(X,Y);       
    }

    drawBackground() {
        const image = new Image();
        image.src = "./img/img1.jpg";
        image.addEventListener('load', ()=>{
            this.ctx.drawImage(image,0,0);
        })
        
    }

    changeBackground(file){
        const reader = new FileReader();
        reader.onload = function () {
            console.log(btoa(reader.result))
            const image = new Image();
            image.src = reader.result.split(',')[1];
            this.ctx.drawImage(image, 0,0)
        }
        result.createObjectURL(file) 
    }

    chooseColor(e){
        console.log(e.target)
        if(e.target !== e.currentTarget){ //btn różny od parenta
            this.color = e.target.value
        }
        e.stopPropagation();
    }

    drawShape(X,Y){
    switch(this.brushShape){
        case 'square':{
            console.log(this.size);
            this.ctx.beginPath();
            this.ctx.rect(X,Y, this.size,this.size);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
            break;
        }   
        case 'circle':{
            this.ctx.beginPath();
            this.ctx.arc(X,Y, (this.size/2),0,Math.PI*2,false);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
            break;
        }
        case 'slash':{
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.color;
            this.ctx.lineWidth = this.size/2;
            this.ctx.moveTo(X, Y);
            this.ctx.lineTo(X+5, Y+5);
            this.ctx.stroke()
            break;
        }
        case 'triangle':{
            this.ctx.beginPath();
            this.ctx.fillStyle = this.color;
            this.ctx.lineWidth = this.size;
            this.ctx.moveTo(X, Y);
            this.ctx.lineTo(X+this.size, Y);
            this.ctx.lineTo(X+(this.size/2), Y-this.size);
            this.ctx.fill()
            break;
        }
        case 'hex':{
            this.ctx.beginPath();
            this.ctx.fillStyle = this.color;
            this.ctx.lineWidth = this.size;
            this.ctx.moveTo(X, Y)
            this.ctx.lineTo(X+(this.size/3), Y-(this.size/2));
            this.ctx.lineTo(X+(this.size/3)*2, Y-(this.size/2));
            this.ctx.lineTo(X+this.size, Y);
            this.ctx.lineTo(X+(this.size/3)*2, Y+(this.size/2));
            this.ctx.lineTo(X+(this.size/3), Y+(this.size/2));
            this.ctx.fill()
            break;
        }    
          
        }      
    }

    incrementSize(){
        if(this.size <20){
            this.size += 2;
        }
    }

    decrementSize(){
        if(this.size > 2){
            this.size -= 2;
        }
    }

    
}

