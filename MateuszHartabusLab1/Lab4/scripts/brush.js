class Brush {
    constructor(s){
        this.shape = s;
        if(s.shape){
            this.shape = s.shape;
        }
    }

    getBrush(){
        return this.shape;
    }

    drawBrush(X,Y, ctx){
        
        this.ctx.beginPath();
        this.ctx.rect(X,Y, 10,10);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
}